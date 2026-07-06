import { useState } from 'react'
import EntradaCoordenadas from './components/EntradaCoordenadas'
import PanelResultados from './components/PanelResultados'

function App() {
  // 1. Estado para almacenar las coordenadas
  const [x1, setX1] = useState("");
  const [y1, setY1] = useState("");
  const [x2, setX2] = useState("");
  const [y2, setY2] = useState("");

  // 2. Lógica y Cálculos
  const nX1 = Number(x1);
  const nY1 = Number(y1);
  const nX2 = Number(x2);
  const nY2 = Number(y2);

  const difX = x2 - x1;
  const difY = y2 - y1;

  const distancia = Math.sqrt(difX * difX + difY * difY).toFixed(2);
  const puntoIntermedioX = (nX1 + nX2) / 2;
  const puntoIntermedioY = (nY1 + nY2) / 2;
  const pendiente = difX === 0 ? "Indefinida (Línea vertical)" : (difY / difX).toFixed(2);

  // 3. Renderizado ensamblando los componentes
  return (
    <div>
      <h2>Calculadora</h2>
      <EntradaCoordenadas titulo="Punto A" x={x1} setX={setX1} y={y1} setY={setY1} />
      <EntradaCoordenadas titulo="Punto B" x={x2} setX={setX2} y={y2} setY={setY2} />

      <PanelResultados
        distancia={distancia} 
        puntoIntermedioX={puntoIntermedioX} 
        puntoIntermedioY={puntoIntermedioY} 
        pendiente={pendiente}
      />
    </div>
  );
}

export default App
