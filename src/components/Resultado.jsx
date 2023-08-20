import styled from "@emotion/styled";

const Contenedor = styled.div`
  color: #fff;
  font-family: Noto Sans mono, monospace;
  
  display: flex;
  align-items: center;
  gap: 3rem;
  margin-top: 2rem;
`;

const Texto = styled.p`
  font-size: 18px;
  span {
    font-weight: bold;
  }
`;

const Price = styled.p`
  font-size: 24px;
  span {
    font-weight: bold;
  }
`;

const Imagen = styled.img`
    width: 120px;
    display: block;
`;

const Resultado = ({ cotizacion }) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
    cotizacion;

  return (
    <Contenedor>
      <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt="imagen cripto" />
      <div>
        <Price>
            El precio es de: <span>{PRICE}</span>
        </Price>
        <Texto>
            Precio más alto del día: <span>{HIGHDAY}</span>
        </Texto>
        <Texto>
            Precio más bajo del día: <span>{LOWDAY}</span>
        </Texto>
        <Texto>
            Variación últimas 24 horas: <span>{CHANGEPCT24HOUR}</span>
        </Texto>
        <Texto>
            Última actualización: <span>{LASTUPDATE}</span>
        </Texto>
      </div>
    </Contenedor>
  );
};

export default Resultado;
