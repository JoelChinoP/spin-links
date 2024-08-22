import { useEffect } from 'react';
import './App.css';

const numbers = [
  '923404271',
  '968456626'
];

function App() {

  useEffect(() => {
    const now = new Date();
    const seconds = now.getSeconds();
    const arraySize = numbers.length;
    
    const index = Math.floor((seconds / 2) % arraySize); //El 2 representa el intervalo de cambio en seg
    const message = encodeURIComponent("Hola, me pueden ayudar en ");
    const whatsappLink = `https://wa.me/51${numbers[index]}?text=${message}`;

    window.location.replace(whatsappLink);
  }, []);

  return (
    <>
      <h1>Rediccionanding...</h1>
      <p> @Todos los derechos reservados </p>
    </>
  );
}

export default App;
