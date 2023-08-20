import styled from "@emotion/styled";
import ImagenCripto from "./img/imagen-criptos.png";
import { Formulario } from "./components/Formulario";
import { useEffect, useState } from "react";
import Resultado from "./components/Resultado";
import Spinner  from "./components/Spinner";

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Heading = styled.h1`
  font-family: 'Noto Sans mono', monospace;
  color: #FFF;
  text-align: center;
  font-weight: 700;
  margin-top 80px;
  margin-bottom: 50px;
  font-size: 34px;

  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display: block;
    margin: 0 auto;
  }
`;
const Imagen = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`;

function App() {
  /**
   * State para guardar las monedas seleccionadas
   * @param {object} monedas
   * @param {string} monedas.moneda
   * @param {string} monedas.criptomoneda
   * @param {function} setMonedas
   */
  const [monedas, setMonedas] = useState({});
  const [cotizacion, setCotizacion] = useState({});
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    if (Object.keys(monedas).length === 0) return;
    const cotizarCripto = async () => {
      setCargando(true);
      setCotizacion({});
      const { moneda, criptomoneda } = monedas;
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      const data = resultado.DISPLAY[criptomoneda][moneda];
      setCotizacion(data);
      setCargando(false);
    };
    cotizarCripto();
  }, [monedas]);

  return (
    <Contenedor>
      <Imagen src={ImagenCripto} alt="Imagen Cripto" />
      <div>
        <Heading>Cotiza criptomonedas al instante</Heading>
        <Formulario setMonedas={setMonedas} />
        {cargando && <Spinner />}
        {cotizacion.PRICE && <Resultado cotizacion={cotizacion} />}
      </div>
    </Contenedor>
  );
}

export default App;
