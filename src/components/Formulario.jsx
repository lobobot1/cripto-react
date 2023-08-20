import styled from "@emotion/styled";
import { useSelectMonedas } from "../hooks/useSelectMonedas";
import { monedas } from "../data/monedas";
import { useEffect, useState } from "react";
import Error from "./Error";

const InputSubmit = styled.input`
  background-color: #9497ff;
  border: none;
  width: 100%;
  padding: 10px;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  margin-top: 30px;
  &:hover {
    background-color: #7a7dfe;
    cursor: pointer;
  }
`;

export const Formulario = ({ setMonedas }) => {
  const [listadoCripto, setListadoCripto] = useState([]);
  const [error, setError] = useState(false);
  const [moneda, SelectMonedas] = useSelectMonedas("Elige tu moneda", monedas);
  const [criptomoneda, SelectCripto] = useSelectMonedas(
    "Elige tu criptomoneda",
    listadoCripto
  );

  useEffect(() => {
    const consultarApi = async () => {
      const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=15&tsym=${moneda}`;
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      const data = resultado.Data.map((cripto) => ({
        id: cripto.CoinInfo.Name,
        nombre: cripto.CoinInfo.FullName,
      }));
      setListadoCripto(data);
    };
    if (moneda === "") return;

    consultarApi();
  }, [moneda]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([moneda, criptomoneda].includes("")) {
      setError(true);
      return;
    }
    setError(false);
    setMonedas({
      moneda,
      criptomoneda,
    });
  };

  return (
    <>
      {error && <Error>Todos los campos son obligatorios</Error>}
      <form onSubmit={handleSubmit}>
        <SelectMonedas />
        <SelectCripto />
        <InputSubmit type="submit" value="cotizar" />
      </form>
    </>
  );
};
