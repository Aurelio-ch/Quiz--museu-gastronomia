import { useContext } from "react";

import { QuizContext } from "../context/quiz";


import "./GameOver.css";

const GameOver = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id="gameover">
      <h2>Fim de jogo!</h2>
      <p>Pontuação: {quizState.score}</p>
      <p>
        Você acertou {quizState.score} de {quizState.questions.length}{" "}
        perguntas.
      </p>
      <img src="" alt="Fim do Quiz" />
      {quizState.score === 3 ? (<button className="button-congratulation" onClick={() => dispatch({ type: "CONGRATULATION" })}>Receba seu premio</button>) : ""}
      <button onClick={() => dispatch({ type: "NEW_GAME" })}>Reiniciar</button>
    </div>
  );
};

export default GameOver;