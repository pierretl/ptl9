---
layout: layout-standard.njk
titre: "Journal de bord"
tags: "recueil"
markdown: "true"
---

## Avant propos

Tous les deux ans en moyenne, je réalise une nouvelle version de mon [portfolio](/realisations/historique-portfolio).
Le site étant en lui-même le projet le plus récent que j'ai à présenter, il me permet surtout d'expérimenter des méthodologies, d'appliquer des idées de conception et d'utiliser des technologies.

J'ai été surpris du résultat de l'outil d'estimation d'empreinte carbon : [Website Carbon Calculator](https://www.websitecarbon.com/website/pierre-tl/) en soumettant mon portfolio en version 8
Un très mauvais résultat et d'autant plus comparer au site pour lequel je travaille, mais ceci est une autre [sujet](/recueil/empreinte-carbone)

Ça fait un moment que je vois passer des articles sur les générateurs de site statique, imbattable niveau performance.
Idéal aussi, comme je suis bien plus à l'aise les mains dans le code plutôt que d'utiliser un outil en [WYSIWYG](https://www.linternaute.fr/dictionnaire/fr/definition/wysiwyg/)


## A faire
1. design
    1. amélioré en small (réduire taille texte et revoir alignement)
    2. revoir la liste des recueil
    3. commencer a rédigé le styleguide
    4. faire la mosaïque des réalisations sur la page d'accueil
2. head layout
    1. complété ``<meta property="og:image" content="">``
    2. ajouté les icons et favicon
    3. vérifier le canonical en prod
3. page tag
4. mettre en place le script machine à écrire et le lien vers l'écris
5. Recueil 
   1. date de création vs date de mise à jour
   2. ordre de la liste des recueils selon date de mise à jour ?
7. Styleguide
   1. structure, element


## 01 mars
Ajout de metadata, amélioration du layout standard, ajout d'une todolist, styleguide, repasse sur les styles


## 26 février
Ajout du journal de bord, repasse design menu


## 25 février
Dynamisation des menus en [Nunjucks](https://mozilla.github.io/nunjucks/templating.html) et réorganisation des fichiers, merci [Bryan Robinson](https://www.youtube.com/watch?v=xzH2XZubgEk)
Dans mes sources d'inspiration je suis tombée sur un site qui afficher un texte et le corriger façon machine à écrire j'ai beaucoup aimé le style ne pas la façon de faire donc j'ai recréé un code JavaScript permettant de faire le même résultat mettre un un codeoen. Je compte l'utiliser pour l'intitulé de mon job qui est quelque chose de très controversée dans le métier français faire un lien vers l'article en question


## 22 février
Durant ma recherche d'inspiration je suis tombé sur une site qui avait animé un texte façon machine à écrire.
Super effet pour introduire mon [intitulé de poste si controverser](article). Création d'un [script Javascript Vanilla pour reproduire l'effet](https://codepen.io/pierre_tl/pen/oNYeXJd)


## 20 février
Ajout du design de base


## 17 février
Mise en place de la méthode [BUSES](articles) et d'un switch de thème sombre/clair


## 14 février
Ajout de la compilation de SASS dans 11ty, merci [Dennis Hagemeier](https://www.d-hagemeier.com/en/sass-compile-11ty/) et [Cassey Lottman](https://github.com/clottman/cassey-on-eleventy/pull/9/files)


## 12 et 13 février 2021
Mise en place du projet grâce au super [tutoriel de Kyle Mitofsky](https://www.youtube.com/watch?v=ozTesGh0l7)
Contenu de démo et déploiement automatique sur Netlify
