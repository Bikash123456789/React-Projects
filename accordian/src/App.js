import questions from "./data";
import styled from 'styled-components';
import Question from "./Question";

function App() {
  console.log(questions)
  return (
    <div className="App">
      <h1>Questions</h1>
      {questions.map((question)=>{
        return <Question key={question.id} question={question}></Question>
      })}
    </div>
  );
}

export default App;
