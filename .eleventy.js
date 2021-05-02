const fs = require("fs-extra");
const sass = require("sass");
const postcss = require("postcss");
const autoprefixer = require("autoprefixer");

const { DateTime } = require('luxon');

const path = require("path");
const Image = require("@11ty/eleventy-img");
const fg = require('fast-glob');

async function generateImages() {
    const dossierImages = fg.stream("sources/images/**/*.{jpg,jpeg,png}");
    for await (const entry of dossierImages) {

        let dossier = entry.substr(0,entry.lastIndexOf('/'));

        let stats = await Image(entry, {
            formats: ['avif', 'webp'],
            outputDir: dossier+'/auto',
            filenameFormat: function (id, src, width, format, options) {
                const extension = path.extname(src);
                const name = path.basename(src, extension);
                return `${name}.${format}`;
            },
        })
    }
}

module.exports = function (eleventyConfig) {

    eleventyConfig.setDataDeepMerge(true);

    // Convertis les dates en format lisible
    eleventyConfig.addFilter('readableDate', (dateObj) => {
        return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat(
            'dd MM yyyy'
        );
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

        //génère les images en webp et avif
        generateImages();
        console.log('images généré');
    });


    // trigger a rebuild if sass changes
    eleventyConfig.addWatchTarget("_sass/");


    // Copie le dossier "_js" dans "_site/js"
    eleventyConfig.addPassthroughCopy({"sources/_js": "js"});


    // Copie le dossier "images" dans "_site/images"
    eleventyConfig.addPassthroughCopy({"sources/images": "images"});


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
