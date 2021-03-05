---
layout: layout-styleguide.njk
titre: "Marge"
tags: "styleguidev9"
markdown: "true"
---


## Element

| - | Haut | Droite | Bas | Gauche | Haut et Base | Droite et Gauche |
| - | - | - | - | - | - | - |
| 120px |  |  | `mb-xl` |  |  |  |
| 60px |  |  | `mb-l` |  |  |  |
| 30px | `pt-m` | `mr-m` | `mb-m` |  |  |  |
| 15px |  |  | `mb-s` |  | `py-s` |  |
|  |  |  |  |  |  |  |
| 45px |  |  |  |  |  | `px-tranche` |




## Enfant d'un conteneur

### Espace à droite ou à gauche

S'applique aux enfants direct, quelle que soit la balise, mais **pas au premier enfant**

<br>

`` mr-m__enfant ``

`` ml-s__enfant ``


### Espace en dessous

S'applique aux enfants direct, quelle que soit la balise

<br>

`` mb-m__enfant ``

`` mb-s__enfant ``




## Conteneur

`` px-tranche ``

header, footer, main du styleguide
