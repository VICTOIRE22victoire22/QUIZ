// Import du hook useState de React et du fichier CSS
import { useState } from "react";
import "./App.css";

function App() {

  // Objet contenant la question, les réponses possibles et l'index de la bonne réponse
  const question = {
    question: "Quelle est la capitale de la France ?",
    answers: ["Londres", "Paris", "Berlin"],
    correctAnswer: 1,
  };

  // État pour afficher ou non les réponses
  const [showAnswers, setShowAnswers] = useState(false);

  // États pour savoir quel bouton réponse est sélectionné
  const [answer1, setAnswer1] = useState(false);
  const [answer2, setAnswer2] = useState(false);
  const [answer3, setAnswer3] = useState(false);

  return (
    <main>
      {/* Titre principal du quiz */}
      <h1>Quiz Simple</h1>

      {/* Question cliquable pour afficher les réponses */}
      <h2 onClick={() => setShowAnswers(true)} style={{ cursor: "pointer" }}>
        {question.question}
      </h2>

      {/* Section affichée uniquement si showAnswers est true */}
      {showAnswers && (
        <section>

          {/* Bouton réponse 1 : active answer1 et désactive les autres */}
          <button
            onClick={() => {
              setAnswer1(true);
              setAnswer2(false);
              setAnswer3(false);
            }}
          >
            {question.answers[0]}
          </button>

          {/* Bouton réponse 2 : active answer2 et désactive les autres */}
          <button
            onClick={() => {
              setAnswer1(false);
              setAnswer2(true);
              setAnswer3(false);
            }}
          >
            {question.answers[1]}
          </button>

          {/* Bouton réponse 3 : active answer3 et désactive les autres */}
          <button
            onClick={() => {
              setAnswer1(false);
              setAnswer2(false);
              setAnswer3(true);
            }}
          >
            {question.answers[2]}
          </button>

        </section>
      )}

      {/* Affichage du résultat selon la réponse sélectionnée */}
      {showAnswers &&
        (answer2 ? (
          <p className="green">Bonne réponse !</p>
        ) : answer1 || answer3 ? (
          <p className="red">Mauvaise réponse</p>
        ) : null)}
    </main>
  );
}

// Export du composant App
export default App;