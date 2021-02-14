# Tuto : créer un site statique avec déploiement continue de démo

A chaque push sur Github, le site sera déployer sur la platefrome netlify

* [GitHub](https://github.com) : hébergement et gestion git
* [Eleventy](https://github.com/11ty/eleventy) : générateur de site statique
* [Netlify](https://app.netlify.com/) : intégration continue, service de déploiement auto (GitHub, GitLab, Bitbucket)

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

### 2.2 Installer Eleventy

installer npm
```
npm install -y
```

installer eleventy
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