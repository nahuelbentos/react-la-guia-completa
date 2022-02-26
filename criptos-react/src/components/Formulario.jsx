import {useEffect, useState} from 'react';

import styled from '@emotion/styled';
import {useSelectMonedas} from '../hooks/useSelectMonedas';
import {monedas} from '../data/monedas';
import {Error} from './Error';

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
  margin-top: 20px;

  &:hover {
    background-color: #7a7dfe;
    cursor: pointer;
  }
`;

export const Formulario = ({setMonedas}) => {
  const [moneda, SelectMonedas] = useSelectMonedas('Elige tu Moneda', monedas);
  const [criptos, setCriptos] = useState([]);
  const [error, setError] = useState(false);
  const [criptomoneda, SelectCriptomonedas] = useSelectMonedas('Elige tu CriptoMoneda', criptos);

  useEffect(() => {
    console.log('otro ');
    const consultarAPI = async () => {
      const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=${moneda}`;
      const respuesta = await fetch(url);
      const result = await respuesta.json();
      console.log(result.Data);
      const arrayCriptos = result.Data.map((cripto) => ({
        id: cripto.CoinInfo.Name,
        nombre: cripto.CoinInfo.FullName,
      }));
      setCriptos(arrayCriptos);
    };
    consultarAPI();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({moneda, criptomoneda});
    if ([moneda, criptomoneda].includes('')) {
      return setError(true);
    }
    setError(false);
    setMonedas({moneda, criptomoneda})
  };

  return (
    <>
      {error && <Error>Todos los campos son obligatorios</Error>}
      <form onSubmit={handleSubmit}>
        <SelectMonedas />
        <SelectCriptomonedas />
        <InputSubmit type="submit" value="Cotizar" />
      </form>
    </>
  );
};
