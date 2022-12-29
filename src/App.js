import './App.css';
import React from 'react';
import Card from './Card';

const unresolvetWords = [
  {
    name: "cat",
    description: "small animal"
  },
  {
    name: "dog",
    description: "big animal"
  },
  {
    name: "bird",
    description: "not animal"
  }
]
const resolvedWords = [

]

const knownWords = [

]

const element = unresolvetWords[0]

function App() {
  return (
    <div className="App">
      <Card word={element.name} description={element.description} />
    </div>
  );
}

export default App;
