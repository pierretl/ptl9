---
layout: layout/standard.njk
markdown: "true"
titre: "Créer un site statique avec déploiement continu"
tags: "recueil"
date: 2021-04-21
description: "Tutoriel de base pour la création de sites statiques avec Eleventy et Netlify"
---

À chaque *push*, le site sera compilé et mis en ligne


## Sommaire

<ul class="ul-sommaire mb-l">
  <li>
    <a class="lien-niveau2" href="#git">Git : Gestion de versions décentralisé</a>
  </li>
  <li>
    <span class="mb-xs">IDE : Environnement de développement</span>
    <ul>
      <li>
        <a class="lien-niveau2" href="#phpStorm">PhpStorm</a>
      </li>
      <li>
        <a class="lien-niveau2" href="{{ metadata.siteUrl }}/recueil/gitpod/">Gitpod</a>
      </li>
    </ul>
  </li>
  <li>
    <a class="lien-niveau2" href="#eleventy">Eleventy : Générateur de site statique</a>
  </li>
  <li>
    <a class="lien-niveau2" href="#netlify">Netlify : Plateforme de déploiement</a>
  </li>
</ul>






## <a name="git"></a> Git

Exemple pour [GitHub](https://github.com)

Dans le menu **Repositories**, cliquez sur le bouton  **New**


|Label|Saisie|Remarque|
|-----|------|--------|
|Repository name | mon-projet | un nom simple et court|
|add .gitignore | Node | |
|Choose a license  | GNU General Public License v3.0 | Open source et qui doit le rester |







## <a name="phpStorm"></a> PhpStorm (IDE)

### Mettre en place l'environement

* Menu **Git**
* **clone**
* url : coller le lien du dépot
* Directory : Ajouter un dossier du nom du projet avec un antislash `\mon-projet`
* Dans le terminal :
    * `npm install -y` pour installer npm
    * `npm install -g @11ty/eleventy` pour installer eleventy
    * `npx eleventy --serve` pour lancer la dev/preview

### Coloration syntaxique de Nunjucks

* Go to File -> Settings -> Editor -> File Types
* Find Twig, it's identical template engine but for PHP and add custom extension. click green plus and type *.nunj. Now all *.nunj files are parsed as Twig so in the end - support Nunjucks.






## <a name="eleventy"></a> Eleventy

[Eleventy](https://github.com/11ty/eleventy) est un générateur de site statique, <br>
il fonctionne nativement avec de nombreux moteur de template, comme [Nunjucks](https://mozilla.github.io/nunjucks/templating.html)



### Exclure de Git le site compilé

Dans le fichier _.gitignore_, ajouter

```
# eleventy
_site/
```


### Exclure de la compilation d'Eleventy un dossier/fichier

Modifier ou ajouter le fichier _.eleventyignore_ à la racine du projet

```
dossier/sous-dossier-exclu/
fichier-exclu.md
```


### Principal ligne de commande

|Commande|Effet|
|--------|-----|
|`npx eleventy`|initialisation|
|`npx eleventy --serve`|initialisation + lancement serveur local|




### Compiler du SASS

Merci [Dennis Hagemeier](https://www.d-hagemeier.com/en/sass-compile-11ty/) et [Cassey Lottman](https://github.com/clottman/cassey-on-eleventy/pull/9/files)

Installer les dépendances

|Commande|nom|
|--------|-----|
|`npm install fs-extra`|fs-extra|
|`npm install --save-dev sass`|Sass|
|`npm install postcss postcss-cssnext`|PostCss|
|`npm install postcss-cli autoprefixer`|Autoprefixer|


Dossier et fichier de base : `_sass/style.scss`






### Configuration dans 11ty

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





## <a name="netlify"></a> Netlify

[Netlify](https://app.netlify.com/) est une plateforme de déploiement et de collaboration basé sur Git (GitHub, GitLab, Bitbucket)

* Dans le menu **Sites**, cliquez sur le bouton  **New site from git**
* Continuous Deployment : **GitHub**
* Autorisé le lien entre les 2 plateformes
* Choisir le dépot
* **Deploy site**

<br>

Renommmer l'url :

* Deploy settings
* Change site name
* mon-projet
* save
