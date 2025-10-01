import { useState } from "react";
import { 
  sumar, 
  saludar, 
  restar, 
  multiplicar, 
  dividir, 
  numeroAleatorio 
} from "../Backend/funciones";
import "./../Style/Funciones.css";

export default function Funciones() {
  const [resultado, setResultado] = useState("");
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [nombre, setNombre] = useState("");

  const handleSumar = () => {
    const total = sumar(Number(num1), Number(num2));
    setResultado(`Resultado de ${num1} + ${num2} = ${total}`);
  };

  const handleRestar = () => {
    const total = restar(Number(num1), Number(num2));
    setResultado(`Resultado de ${num1} - ${num2} = ${total}`);
  };

  const handleMultiplicar = () => {
    const total = multiplicar(Number(num1), Number(num2));
    setResultado(`Resultado de ${num1} × ${num2} = ${total}`);
  };

  const handleDividir = () => {
    const total = dividir(Number(num1), Number(num2));
    setResultado(`Resultado de ${num1} ÷ ${num2} = ${total}`);
  };

  const handleAleatorio = () => {
    const num = numeroAleatorio();
    setResultado("Número aleatorio generado: " + num);
  };

  const handleSaludar = () => {
    setResultado(saludar(nombre));
  };

  return (
    <div className="funciones-container">
      <h1 className="titulo">Funciones</h1>

      {/* Inputs para operaciones */}
      <div className="inputs-operaciones">
        <input 
          type="number" 
          placeholder="Número 1" 
          value={num1} 
          onChange={(e) => setNum1(e.target.value)} 
          className="input-numero"
        />
        <input 
          type="number" 
          placeholder="Número 2" 
          value={num2} 
          onChange={(e) => setNum2(e.target.value)} 
          className="input-numero"
        />
      </div>

      <div className="botones-operaciones">
        <button onClick={handleSumar}>Sumar</button>
        <button onClick={handleRestar}>Restar</button>
        <button onClick={handleMultiplicar}>Multiplicar</button>
        <button onClick={handleDividir}>Dividir</button>
        <button onClick={handleAleatorio}>Número Aleatorio</button>
      </div>

      {/* Input para saludo */}
      <div className="saludo-container">
        <input 
          type="text" 
          placeholder="Escribe tu nombre" 
          value={nombre} 
          onChange={(e) => setNombre(e.target.value)} 
          className="input-nombre"
        />
        <button onClick={handleSaludar}>Saludar</button>
      </div>

      <p className="resultado"><b>Resultado:</b> {resultado}</p>
    </div>
  );
}
