import { useState } from 'react'
import './App.css'

function App() {

  const [inputText, setInputText] = useState("");
  const [resultText, setResultText] = useState("");
  

  function handleChange(e) {
    // console.log(e.target.value);
    setInputText(e.target.value);
  }

  function transformToLowerCase() {
    setResultText(inputText.toLowerCase());
  }

  function transformToUpperCase() {
    setResultText(inputText.toUpperCase());
  }

  function transformToCamelCase() {
    const wordArr = inputText.split(' ');
    const CamelCase = wordArr.map((word, index) => {
      if (index === 0) {
        return word.toLowerCase();
      } else {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      }
    }).join('');
    setResultText(CamelCase);
  }

  function transformToPascalCase() {
    const wordArr = inputText.split(' ');
    const PascalCase = wordArr.map((word,i) => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join('');
    setResultText(PascalCase);
  }

  function transformToSnakeCase() {
    const SnakeCase = inputText.split(' ').join('_').toLowerCase();
    setResultText(SnakeCase);
  }

  function transformToKebabCase() {
    const KebabCase = inputText.split(' ').join('-').toLowerCase();
    setResultText(KebabCase);
  }

  function TrimText() {
    const trimmedText = inputText.trim();
    setResultText(trimmedText);
  }
  

  return (
    <div className='app'>
      <h1>⭐String Transformers🎹🌈</h1>
      <label htmlFor="userInput"></label>
      <textarea type="text" placeholder="Enter Sentence..." name='userInput' value={inputText} onChange={handleChange} className='textInp'/>
      <div className="btn-section">
        <button onClick={transformToLowerCase}>lower case</button>
        <button onClick={transformToUpperCase}>UPPER CASE</button>
        <button onClick={transformToCamelCase}>camelCase</button>
        <button onClick={transformToPascalCase}>PascalCase</button>
        <button onClick={transformToSnakeCase}>Snake_Case</button>
        <button onClick={transformToKebabCase}>Kebab-Case</button>
        <button onClick={TrimText}>Trim</button>
      </div>
      <section className="result-section">
        <h3>Transformed String 👇</h3>
        <h2>{resultText}</h2>
      </section>
    </div>
  )
}

export default App
