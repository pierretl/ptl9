---
layout: layout/standard.njk
titre: "Journal de bord"
tags: "recueil"
markdown: "true"
createdDate: 2021-02-12
date: 2022-01-11
description: "Détails sur l'évolution de la nouvelle version de mon site personnel"
---

## Avant propos

Tous les deux ans en moyenne, je réalise une nouvelle version de mon [portfolio](/realisations/site-perso).
Le site étant en lui-même le projet le plus récent que j'ai à présenter, il me permet surtout d'expérimenter des méthodologies, d'appliquer des idées de conception et d'utiliser des technologies.

Ce qui ma pousser à faire une nouvelle version, c'est le [résultat](/recueil/performance-du-site) que j'ai obtenu sur [Website Carbon Calculator](https://www.websitecarbon.com/) et comme cela faisait un moment que je vois passer des articles sur les générateurs de site statique, je me suis dit que l'heure était venu


## A faire

* Image
    * Compression
    * Ajouter les images en webp article
    * Réduction des images à partir d'image retina
    * Conversion en format &laquo; webP &raquo; et &laquo; avif &raquo;
* Tag

## 11 janvier 2022
* Mise à jour des informations de licence et d'auteur sur package.json du site
* Passage du suivi de l'avancement du projet  &laquo; [Liste de lecture](/recueil/suivi-liste-de-lecture/) &raquo; directement sur le domaine dédié : [lecture.pierre.tl](https://lecture.pierre.tl)

## 03 janvier 2022
* Prise en compte des caractères spéciaux dans les titres, la liste des &laquo; Recueil &raquo;, le fil d'Ariane et titre de page

## 21 octobre 2021
* Passage en revus des règles 6 à 24 de la [Checklist qualité Web](/recueil/checklist-qualite-web)
* Debug de l'affichage des messages de la recherche

## 19 octobre 2021
* Mise en place du re-design de mon avatar en guise de [logo](/realisations/site-perso/#logo-2021)

## 12 octobre 2021
* Correction du lien du footer


## 11 octobre 2021
* Repasse microtypographie
* Date en français et en toutes lettres sur la page exhaustive des [recueils](/recueil/)
* Ajout d'une page [mentions légales](/mention-legales/)
* Passage en revus de la [Checklist qualité Web](/recueil/checklist-qualite-web) pour ce site


## 03 octobre 2021
* Ajout de la [palette de couleur](/recueil/styleguide/#palette-de-couleur) au styleguide
* Position sticky du champ de recherche sur le [styleguide](/recueil/styleguide/)


## 11 septembre 2021
* Repasse mise en forme [Liste](/recueil/styleguide/#liste), [Titre](/recueil/styleguide/#titre), [Marge](/recueil/styleguide/#marge), [Caractères spéciaux sur Safari mobile](/recueil/caracteres-speciaux-safari-mobile/)
* Ajout des [sites et services](/realisations/site-perso/#2021-:-generateur-site-statique) qui ont participé à l'élaboration du ce site
* Passage du menu *Recherche* en pictogramme

## 10 septembre 2021
* Couleur bordure rouge si le champ mail du formulaire de contact n'est pas valide

## 8 septembre 2021
* [Formulaire de contact](/contact/) et sa [page de succès](/contact/sucess/)
* Ajout d'ancre sur les titres des éléments du [styleguide](/recueil/styleguide/)
* Ajout des nouveaux éléments de formulaire au styleguide

## 7 septembre 2021
* Harmonisation des espacements
* Refonte du menu principal pour ordonner manuellement les liens

## 6 septembre 2021
* Coloration syntaxique des balises de code sur le [styleguide](/recueil/styleguide/)<br>
Personnalisation des couleurs sur une base [monokai](http://www.monokai.nl/)
* Correction des liens pointant sur le styleguide à partir d'une recherche
* Remplacement de la police *raleway* pour *OpenSans* car les chiffre ne font pas tous la même taille :<br>
  ![](/images/site-perso/font-raleway.png)<br>
  Mais quelle idée franchement !?!
* Affichage du focus des liens et boutons au clavier uniquement
* Harmonisation des bordures arrondis + changement de style les inputs type text et search

## 5 septembre 2021
[Refonte styleguide](/recueil/styleguide/) + ajout recherche

## 29 aout 2021
* Correction duplication de contenu dans le <abbr title="really simple syndication">RSS</abbr>
* Premier jet de design de [pagination](/recueil/styleguide/#pagination) pour la recherche
* Ajout de la [recherche](/recherche/) et de la functionnalité sur la [page 404](/404.html)
* Ajout de la taille des images sur la mosaïque pour améliorer les perf

## 28 aout 2021
* [Test d'outils pour utiliser google Sheets en base de données](/recueil/google-sheets-database/)
* Ajout de l'année pour chaque ligne du journal de bord
* Suppression de l'url [Radiophonix](/realisations/radiophonix/), car le site a brulé avec OVH le 11 mars 2021
* Ajout de mon logo au header
* Repasse alignement du header suite à l'ajout du logo
* Ajout [flux RSS](/rss.xml)

## 17 aout 2021
* Correction du design des liens suite au passage du site en ``https://``
* Ajout d'un meta description par défaut
* ~~Ajout d'une Content Security Policy~~ ``<meta http-equiv="Content-Security-Policy" content="default-src 'self';">`` annulé car cela désactive les styles et scripts inline
* Écris [Performance du site](/recueil/performance-du-site/) 
* Mise à jour du [styleguide](/recueil/styleguide/#bloc)


## 15 Aout 2021
* Repasse graphique sur les titres, la graisse des textes et les couleurs des composants
* Correction coquille sur la page 404


## 24 juillet  2021
* Passage de la police en local pour améliorer les performances du site
* Correction lien en 404 sur [gitpod](../gitpod/)
* Ajout des images de l'accueil en webp et avif quand elles ne sont pas vectoriel

## 21 juin 2021
* [Liaison de mon nom de domaine à Netlify](/recueil/lier-netlify-ovh/)

## 13 juin 2021
* Ajout de la balise ``<desciption>`` pour chaque page
* On affiche la balise ``<meta name="date"`` seulement pour les réalisations et articles
* Ajout [page de maintenance](../../maintenance/)
* Passage du script de changement de thème sombre/clair en &laquo;in line&raquo;
* Utilisation du logo en ascii pour la page de maintenance
  
## 06 juin 2021
* Suppression de l'intitulé de poste dans le header
* Changement de taille, couleur et d'espacement dans le header
* Repasse sur le menu principal et le sous-menu du styleguide
* Repasse [Intitulé de poste](/recueil/intitule-poste/)
* Écris [Machine à écrire](/recueil/machine-a-ecrire/)
* Mise à jour du [styleguide](/recueil/styleguide/)
  
## 05 juin 2021
* Retropixel : mise en forme du reste à faire + repasse logo
* Pixel-art : ajout des concours Retropixel + mise en forme du vrac/reste à faire
* Mise à jour mosaique pour Retropixel et Pixelart
  
## 04 juin 2021
* Rédaction [Poweo, page de maintenance](/realisations/poweo/)
* Suite de la rédaction de [Retropixel](/realisations/retropixel/) (en cours)
* Rédaction [Mangatheque](/realisations/mangatheque/)
* Rédaction [Kinematik](/realisations/kinematik/)
  
## 24 mai 2021
* Mise a jour des lien
* Galerie d’image en full HTML/CSS style lightbox, voir [pixels en vrac](/realisations/pixel-art/#pixel-en-vrac)
      
## 22 mai 2021
* [Correction affichage du caractères spécial](../caracteres-speciaux-safari-mobile/) "↗" sur Safari mobile
* Ajout macro "code", "titre h2" et "sommaire"

## 19 mai 2021
* Rédaction article
* Ajout de média
  
## 02 mai 2021
* [Conversion automatique](../conversion-image/) en format "webP" et "avif" pour les images en .png .jpg et .jpeg
* Correction focus theme switch
* Retire les recueils en brouillon


## 25 avril 2021
* Ajuste des styles pour les balise `<code>` `<pre>`
* passage de la citation en html dans le markdown pour respecter la charte
* Rédaction suite et fin : site statique
* Changement du style pour les `<figcaptions>` dans un lien
* Correctif espacement liste
* Correctif style liste sommaire
* Ajout fil Ariane
* Ajout du sitemap.xml


## 21 avril 2021
* 1er commit via [Gitpod](gitpod.io)
* Coloration des listes ordonnée
* Ajout de "créer un site statique" au recueil (wip)

## 20 avril 2021
* Rédaction suite et fin : site perso

## 18 avril 2021
* Changement de style de base des listes non ordonnée
* Modification graisse style de base
* Ajout style de lien secondaire
* Ajout style liste sommaire  
* Script pour scroll horizontalement avec un molette normal
* Suite de la rédaction : site perso
* Repasse styleguide


## 17 avril 2021
* Rédaction en cours : ~~historique portfolio~~ site perso 
* Ajout d'un composant qui scroll horizontalement

## 16 avril 2021
* Amélioration du rendu des images en pixel art
* Ajout des vignettes de concours
* Ajout projet wet

## 15 avril 2021
* Optimisation des images de la mosaïque

## 13 avril 2021
* Test image responsive

## 11 avril 2021
Changement de la mosaïque :
* Améliore l'affichage en mobile
* Diminution du code
* Changement d'aspect au survol

## 10 avril 2021
* Repasse rédactionnel sur Metalfest et Kirby 
* Rédaction et mise en forme pour Radiophonix, Aux délices d'Ahmed, Formz et Faire part mariage
* Rédaction et mise en forme en cours pour Pixel Art

## 05 avril 2021
* Design citation
* Couleur de fond clair pour les images sombre dans le thème sombre
* Ajout de 2 tailles pour faire des mises en pages en large
* Ajout intro facultatif au macro du styleguide
* Rédaction et mise en forme : Cuyz, Kirby, Norder's Meat

## 21 mars 2021
* Script machine à écrire sur la page d'accueil uniquement
* Mise en place lien d'évitement
* Repasse rédactionnel sur la réalisation t-shirt Metalfest

## 20 mars 2021
* Ajout des pages de réalisation pour la mosaïque, contenu rédiger
* Simplification de l'organisation des couleurs
* Mise en forme des éléments de mosaïques s'il n'y a pas d'image
* Dynamisation de la taille d'un élément de mosaïque
* Mise en place du script machine à écrire
   
## 17 mars 2021
* Article "intitulé de poste" + lien caché dans le header
* Ajout d'un [mailto crypté](https://www.nicolas-hoffmann.net/utilitaires/crypteur.php) pour le contact au lieu d'une page avec un formulaire.
* Ajoute "↗" apres les liens ne provenant pas [pierre.tl](http://www.pierre.tl/), [ptl9.netlify.app](https://ptl9.netlify.app/) ou étant local. <br>
C'est pas idéal mais ca fonctionne pour les pages écrite en markdown

## 10 mars 2021
* Réorganisation des couleurs
* Ajout des styles pour le focus des liens/label
* Ajout de la mosaïque des realisation (en cours)
* Ajustement des listes non ordonnée
* Ajout d'élément dans la liste des choses à faire
* Ajout de 3 réalisations pour la mosaïque (rédaction et dynamisation en cours)

## 06 mars 2021
* Refonte des couleurs de l'ascii art
* Ajout page 404
* Correction des menus en small 

## 05 mars 2021
* Passage du switch de thème en icone
* Découpage des layouts en include
* Ajouts des icons & favicons (génération via [Favicon Generator](https://realfavicongenerator.net))
* Amélioration de l'affichage en mobile


## 01 mars 2021
Ajout de metadata, amélioration du layout standard, ajout d'une todolist, styleguide, repasse sur les styles


## 26 février 2021
Ajout du journal de bord, repasse design menu


## 25 février 2021
Dynamisation des menus en [Nunjucks](https://mozilla.github.io/nunjucks/templating.html) et réorganisation des fichiers, merci [Bryan Robinson](https://www.youtube.com/watch?v=xzH2XZubgEk)
Dans mes sources d'inspiration je suis tombée sur un site qui afficher un texte et le corriger façon machine à écrire j'ai beaucoup aimé le style ne pas la façon de faire donc j'ai recréé un code JavaScript permettant de faire le même résultat mettre un un codeoen. Je compte l'utiliser pour l'intitulé de mon job qui est quelque chose de très controversée dans le métier français faire un lien vers l'article en question


## 22 février 2021
Durant ma recherche d'inspiration je suis tombé sur une site qui avait animé un texte façon machine à écrire.
Super effet pour introduire mon [intitulé de poste si controverser](/recueil/intitule-poste/). Création d'un [script Javascript Vanilla pour reproduire l'effet](https://codepen.io/pierre_tl/pen/oNYeXJd)


## 20 février 2021
Ajout du design de base


## 17 février 2021
Mise en place de la méthode [BUSES](/recueil/methode-buses/) et d'un switch de thème sombre/clair


## 14 février 2021
Ajout de la compilation de SASS dans 11ty, merci [Dennis Hagemeier](https://www.d-hagemeier.com/en/sass-compile-11ty/) et [Cassey Lottman](https://github.com/clottman/cassey-on-eleventy/pull/9/files)


## 12 et 13 février 2021
Mise en place du projet grâce au super [tutoriel de Kyle Mitofsky](https://www.youtube.com/watch?v=ozTesGh0l7)
Contenu de démo et déploiement automatique sur Netlify
