---
layout: layout/standard.njk
titre: "Comment lier son nom de domaine OVH Cloud à son hébergement Netlify"
tags: "recueil"
markdown: "true"
date: 2021-06-21
description: "Tutoriel : Lier Netlify et OVH Cloud"
---

## Récupération des Serveurs DNS de votre projet coté Netlify

* Allez sur le projet Netlify
* Cliquer sur le bouton sur &laquo; Domain settings &raquo;
* &laquo; Options &raquo;
* &laquo; Edit domain &raquo;
* Trouver la liste de 4 dns commencent par ``dnsx.``
    - ``dns1.riri.fifi.loulou``
    - ``dns2.riri.fifi.loulou``
    - ``dns3.riri.fifi.loulou``
    - ``dns4.riri.fifi.loulou``

## Renseigner les quatre DNS trouvé dans OVH Cloud

* Menu &laquo; Web cloud &raquo;
* Menu &laquo;Nom de domaine &raquo;
* Cliquer sur votre nom de domaine 
* Menu &laquo; Serveur DNS &raquo;
* Bouton &laquo; Modifier les serveurs DNS &raquo;
* Saisis les quatre DNS trouvé précédemment
* Bouton &laquo; Appliquer la configuration &raquo;


*Un délai de 48h est nécessaire pour la propagation aux autres DNS*

<br><br>

Tutoriel rédiger d'apès la vidéo de [Cloé Coupris](https://www.youtube.com/watch?v=gcHCQIGGp7c)
