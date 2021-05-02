---
layout: layout/standard.njk
markdown: "true"
titre: "Gitpod"
tags: "recueil"
date: 2021-04-21
---

[gitpod.io](gitpod.io) un éditeur de code dans le cloud ou un IDE Online<br><br>

<blockquote>
    <p>
        C'est une version rafraîchissante des éditeurs de code cloud (ou des IDE, si vous voulez) qui vise à garder votre code toujours testé et à jour. En d'autres termes, il est profondément intégré à GitHub et chaque fois que vous ajoutez du code, il exécute vos tests et vos pipelines CI / CD pour s'assurer que le code est toujours à 100% d'intégrité. <br>Vaut le détour si vous aimez l'expérience VSCode et que vous voulez quelque chose qui prend en charge tous les principaux langages et frameworks back-end / front-end (Django, Rails, Revel, vous l'appelez).
    </p>
    <cite>
        <a href="https://geekflare.com/fr/online-code-editors/" rel="external">geekflare</a>
    </cite>
</blockquote>


## Utilisation

Pour lancer ce site, il suffit de

1. Etre connecté à Gitpod via GitHub
2. Préfixer de `gitpod.io/#` un répertoire GitHub, exemple : [gitpod.io/#https://github.com/pierretl/ptl9](gitpod.io/#https://github.com/pierretl/ptl9)
3. Attendre un peu et c'est bon !

<br><br>

Il restera plus qu'à aller dans le terminal :

* `npm install -y` pour installer npm
* `npm install -g @11ty/eleventy` pour installer eleventy
* `npx eleventy --serve` pour lancer la dev/preview
