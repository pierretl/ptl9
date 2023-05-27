const fs = require("fs-extra");
const sass = require("sass");
const postcss = require("postcss");
const autoprefixer = require("autoprefixer");

const { DateTime } = require('luxon');

const path = require("path");
const Image = require("@11ty/eleventy-img");
const fg = require('fast-glob');

function imageShortcodeSync(type, src, alt, sizes, classe="") {
    switch (type) {
        case 'mosaique1s1':
            var widthType = [300, 150];
            break;
        case 'mosaique2s1':
            var widthType = [640, 320];
            break;
        case 'w-100':
            var widthType = [600, 870];
            break;
        default:
            var widthType = [150];
    }

    let extentionSrc = src.split(/[#?]/)[0].split('.').pop().trim();
    // le avif ne fonctionne pas sur certaine image, why ??
    switch (extentionSrc) {
        case 'png':
            var formatType = ["webp", "png"];
            break;
        default:
            //jpg
            var formatType = ["webp", "jpg"];
    }

    let options = {
        widths: widthType,
        formats: formatType,
        urlPath: "/images/generate/",
        outputDir: "_site/images/generate/",
    };

    // generate images, while this is async we don’t wait
    Image(src, options);

    //Don't lazy load Largest Contentful Paint image
    var loadingLazy = "";
    if (type !== 'w-100') {
        loadingLazy = "lazy";
    }

    let imageAttributes = {
        class: classe,
        alt ,
        sizes,
        loading: loadingLazy,
        decoding: "async",
    };
    // get metadata even the images are not fully generated
    let metadata = Image.statsSync(src, options);
    return Image.generateHTML(metadata, imageAttributes);
}

module.exports = function (eleventyConfig) {

    eleventyConfig.setDataDeepMerge(true);

    // Convertis les dates en format lisible : 11 10 2021
    eleventyConfig.addFilter('readableDate', (dateObj) => {
        return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat(
            'dd MM yyyy'
        );
    });

    // Convertis les dates en format lisible : 11 octobre 2021
    eleventyConfig.addFilter('frDate', (date) => {

        const months = ["janvier", "février", "mars","avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];

        const formatDate = (date)=>{
            let formatted_date = date.getDate() + "&nbsp;" + months[date.getMonth()] + "&nbsp;" + date.getFullYear()
            return formatted_date;
        }

        return formatDate(date);
    });

    eleventyConfig.on("beforeBuild", () => {

        // Compile Sass
        let result = sass.renderSync({
            file: "sources/_sass/style.scss",
            sourceMap: false,
            outputStyle: "compressed",
        });
        console.log("SCSS compiled");

        // Optimize and write file with PostCSS
        let css = result.css.toString();
        postcss([autoprefixer])
            .process(css, { from: "style.css", to: "style.css" })
            .then((result) => {
                fs.outputFile("_site/style.css", result.css, (err) => {
                    if (err) throw err;
                    console.log("CSS optimized");
                });
            });
    });

    //Shortcode image
    eleventyConfig.addNunjucksShortcode("image", imageShortcodeSync); // Nunjucks macros cannot use asynchronous shortcodes

    // trigger a rebuild if sass changes
    eleventyConfig.addWatchTarget("_sass/");


    // Copie le dossier "_js" dans "_site/js"
    eleventyConfig.addPassthroughCopy({"sources/_js": "js"});


    // Copie le dossier "images" dans "_site/images"
    eleventyConfig.addPassthroughCopy({"sources/images": "images"});


    // Copie le dossier "medias" dans "_site/medias"
    eleventyConfig.addPassthroughCopy({"sources/medias": "medias"});


    // Copie le dossier "fonts" dans "_site/fonts"
    eleventyConfig.addPassthroughCopy({"sources/fonts": "fonts"});


    return {
        passthroughFileCopy: true,
        dir: {
            input: "sources",
            data: '_data',
            output: "_site",
            include: "_includes",
        }
    }

};
