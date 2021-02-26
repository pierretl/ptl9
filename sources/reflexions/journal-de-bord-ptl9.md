---
layout: layout-standard.njk
date: 2021-02-26
titre: "Journal de bord de la réalisation de PTL9"
tags: "reflexions"
md: 'true'
---

## Avant propos

Tous les deux ans en moyenne, je [réalise](page réalisation) une nouvelle version de mon [portfolio](projet portfolio).
Le site étant en lui-même le projet le plus récent que j'ai à présenter, il me permet surtout d'expérimenter des méthodologies, d'appliquer des idées de conception et d'utiliser des technologies.

J'ai été surpris du résultat de l'outil d'estimation d'empreinte carbon : [Website Carbon Calculator](https://www.websitecarbon.com/website/pierre-tl/) en soumettant mon portfolio en version 8
Un très mauvais résultat et d'autant plus comparer au site pour lequel je travaille.
A peine 1% moins sale alors que l'on est sur deux sites de taille et d'audience qui n'ont absolument rien à avoir, mais ceci est une autre [réflexions](article sur le ce site que je trouve biaiser )

Ça fait un moment que je vois passer des articles sur les générateurs de site statique, imbattable niveau performance.
Idéal aussi, comme je suis bien plus à l'aise les mains dans le code plutôt que d'utiliser un outil en [WYSIWYG](https://www.linternaute.fr/dictionnaire/fr/definition/wysiwyg/)

## 12 et 13 février 2021
Mise en place du projet grâce au super [tutoriel de Kyle Mitofsky](https://www.youtube.com/watch?v=ozTesGh0l7)
Contenu de démo et déploiement automatique sur Netlify

## 14 février
Ajout de la compilation de SASS dans 11ty, merci [Dennis Hagemeier](https://www.d-hagemeier.com/en/sass-compile-11ty/) et [Cassey Lottman](https://github.com/clottman/cassey-on-eleventy/pull/9/files)

## 17 février
Mise en place de la méthode [BUSES](articles) et d'un switch de thème sombre/clair

## 20 février
Ajout du design de base

## 22 février
Durant ma recherche d'inspiration je suis tombé sur une site qui avait animé un texte façon machine à écrire.
Super effet pour introduire mon [intitulé de poste si controverser](article). Création d'un [script Javascript Vanilla pour reproduire l'effet](https://codepen.io/pierre_tl/pen/oNYeXJd)

## 25 février
Dynamisation des menus en [Nunjucks](https://mozilla.github.io/nunjucks/templating.html) et réorganisation des fichiers, merci [Bryan Robinson](https://www.youtube.com/watch?v=xzH2XZubgEk)
Dans mes sources d'inspiration je suis tombée sur un site qui afficher un texte et le corriger façon machine à écrire j'ai beaucoup aimé le style ne pas la façon de faire donc j'ai recréé un code JavaScript permettant de faire le même résultat mettre un un codeoen. Je compte l'utiliser pour l'intitulé de mon job qui est quelque chose de très controversée dans le métier français faire un lien vers l'article en question

## 26 février
Ajout du journal de bord, repasse design menu