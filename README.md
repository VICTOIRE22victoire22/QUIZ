# Quiz Simple React

## Description

Ce projet est une petite application **React** qui affiche une question de quiz.
Lorsque l'utilisateur clique sur la question, les réponses apparaissent.
L'utilisateur peut sélectionner une réponse et voir immédiatement si elle est **correcte ou incorrecte**.

## Fonctionnalités

* Affichage d'une question
* Affichage des réponses au clic
* Sélection d'une réponse
* Indication visuelle :

  * **Bonne réponse** en vert
  * **Mauvaise réponse** en rouge

## Technologies utilisées

* React
* JavaScript
* CSS
* Hook `useState`
* Yarn

## Structure du projet

```
src/
 ├── App.jsx
 ├── App.css
 └── main.jsx
```

## Installation

1. Cloner le projet

```bash
git clone https://github.com/votre-utilisateur/quiz-react.git
```

2. Aller dans le dossier du projet

```bash
cd quiz-react
```

3. Installer les dépendances

```bash
yarn
```

4. Lancer le projet

```bash
yarn dev
```

## Fonctionnement du code

* `useState` est utilisé pour gérer l'état de l'application.
* `showAnswers` permet d'afficher ou non les réponses.
* `answer1`, `answer2`, `answer3` permettent de savoir quelle réponse est sélectionnée.
* Un message apparaît pour indiquer si la réponse est correcte.

## Améliorations possibles

* Ajouter plusieurs questions
* Ajouter un score
* Mélanger les réponses automatiquement
* Ajouter un bouton **question suivante**
* Améliorer le design

## Auteur

Projet réalisé dans le cadre d'un apprentissage de **React**.
