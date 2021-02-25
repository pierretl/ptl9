const fs = require("fs-extra");
const sass = require("sass");
const postcss = require("postcss");
const autoprefixer = require("autoprefixer");

module.exports = function (eleventyConfig) {

    // compile sass and optimize it https://www.d-hagemeier.com/en/articles/sass-compile-11ty/
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


    // trigger a rebuild if sass changes
    eleventyConfig.addWatchTarget("_sass/");


    // Copie le dossier "_js" dans "_site/js"
    eleventyConfig.addPassthroughCopy({"sources/_js": "js"});


    return {
        passthroughFileCopy: true,
        dir: {
            input: "sources",
            output: "_site",
            include: "../_includes"
        }
    }

};