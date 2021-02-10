import './App.css';
import React, {useState} from 'react';

export default function App() {
  const [text, smallText] = useState("React Marathon");
  return <div onClick={() => smallText(text.toLowerCase())}> {text} </div>;
}
