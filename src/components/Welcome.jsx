import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import "./Welcome.css";
import Quiz from "../img/chef.png";

const Welcome = () => {
const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id="welcome">
      <h2>Seja bem-vindo</h2>
      <p>Clique no botão abaixo para começar:</p>
      <img src={Quiz} alt="" />
      <button onClick={() => dispatch({ type: "CHANGE_STAGE" })}>
        Iniciar
      </button>
    </div>
  )
}

export default Welcome;