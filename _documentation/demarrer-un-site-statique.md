# Tuto : créer un site statique avec déploiement continue de démo

A chaque push sur Github, le site sera déployer sur la platefrome netlify

* [GitHub](https://github.com) : hébergement et gestion git
* [Eleventy](https://github.com/11ty/eleventy) : générateur de site statique
* [Netlify](https://app.netlify.com/) : intégration continue, service de déploiement auto (GitHub, GitLab, Bitbucket)
* [Nunjucks](https://mozilla.github.io/nunjucks/templating.html) : tamplating JavaScript

## 1. GitHub

Dans le menu `Repositories`, cliquez sur le bouton  `New`


|Label|Saisie|Remarque|
|-----|------|--------|
|Repository name | mon-projet | un nom simple et court|
|add .gitignore | Node | |
|Choose a license  | GNU General Public License v3.0 | Open source et qui doit le rester |

Copier le lien pour cloné le dépot

## 2. IDE

### 2.1 Creer un projet et cloné les sources

Ouvrir l'IDE de son choix, creer un nouveau porjet et cloner le dépot

Sur PhpStorm :
* Menu `Git`
* `clone`
* url : coller le lien
* Directory : Ajouter un dossier du nom du projet avec un antislash `\mon-projet`


### 2.2 Installer

npm
```
npm install -y
```

eleventy
```
npm i @11ty/eleventy
```



### 2.3 Exclure de git le site compilé

Dans le fichier _.gitignore_, ajouter

```
# eleventy
_site/
```

### 2.4 Exclure un dossier ou un fichier de la compilation de Eleventy

Modifier ou ajouter le fichier _.eleventyignore_ à la racine du projet


```
dossier/sous-dossier-exclu/
fichier-exclu.md
```

### 2.5 Ligne de commande principal Eleventy

|Commande|Effet|
|--------|-----|
|`npx eleventy`|initialisation|
|`npx eleventy --serve`|initialisation + lancement serveur local|

### 2.6 Coloration syntaxique de Nunjucks dans IntelliJ

* Go to File -> Settings -> Editor -> File Types
* Find Twig, it's identical template engine but for PHP and add custom extension. click green plus and type *.nunj. Now all *.nunj files are parsed as Twig so in the end - support Nunjucks.


### 2.7 Compiler du SASS

#### 2.7.1 Installer les dépendances

fs-extra
```
npm install fs-extra
```

Sass

```
npm install --save-dev sass

```

PostCss

```
npm install postcss postcss-cssnext
```

Autoprefixer

```
npm install postcss-cli autoprefixer
```

#### 2.7.2 Dossier et fichier de base

`_sass/style.scss`

#### 2.7.3 Configuration dans 11ty

Dans `.eleventy.js` ajouter

```
const fs = require("fs-extra");
const sass = require("sass");
const postcss = require("postcss");
const autoprefixer = require("autoprefixer");

module.exports = function (eleventyConfig) {

    // compile sass and optimize it https://www.d-hagemeier.com/en/articles/sass-compile-11ty/
    eleventyConfig.on("beforeBuild", () => {

        // Compile Sass
        let result = sass.renderSync({
            file: "_sass/style.scss",
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

};
```

## Netlify

* Dans le menu `Sites`, cliquez sur le bouton  `New site from git`
* Continuous Deployment : `GitHub`
* Autorisé le lien entre les 2 plateformes
* Choisir le dépot
* `Deploy site`

Renommmer l'url

* `Deploy settings`
* `Change site name`
* "mon-projet", `save`