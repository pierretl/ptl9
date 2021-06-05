# ptl9

Site personnel de Pierre Tampon-Lajarriette, version 9 : [https://ptl9.netlify.app/](https://ptl9.netlify.app/)

Utilise [GitHub](https://github.com), [Eleventy](https://github.com/11ty/eleventy) et [Netlify](https://app.netlify.com/)

## Installation

### 1. Cloné le dépot

```
git clone https://github.com/pierretl/ptl9.git
```

### 2. Allez dans le répertoire du projet

```
cd ptl9
```

### 3. Installer les dépendances du projet

```
npm install -y
```


### 4. Ligne de commande Eleventy

|Commande|Effet|
|--------|-----|
|`npx eleventy`|initialisation|
|`npx eleventy --serve`|initialisation + lancement serveur local|

### 5. Exclure de git le site compilé

Dans le fichier _.gitignore_, ajouter


```
# eleventy
_site/
```

### 7. Exclure un dossier ou un fichier de la compilation de Eleventy

Modifier ou ajouter le fichier _.eleventyignore_ à la racine du projet


```
dossier/sous-dossier-exclu/
fichier-exclu.md
```
