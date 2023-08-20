/* eslint-disable react-refresh/only-export-components */
import styled from "@emotion/styled";
import { useState } from "react";

const Label = styled.label`
    font-family: "Noto Sans mono", monospace;
    color: #fff;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 24px;
    margin: 15px 0
    display: block;
`;

const Select = styled.select`
  width: 100%;
  display: block;
  padding: 12px;
  margin-top: 10px;
  font-size: 18px;
  border-radius: 10px;
`;

/**
 *
 * @param {string} label
 * @param {Array<string>} opciones
 * @returns
 */
export const useSelectMonedas = (label, opciones) => {
  const [state, setState] = useState("");

  const SelectMonedas = () => (
    <>
      <Label htmlFor="">{label}</Label>
      <Select value={state} onChange={(e) => setState(e.target.value)}>
        <option value="">- Seleccione -</option>
        {opciones.map((opcion) => (
          <option key={opcion.id} value={opcion.id}>
            {opcion.nombre}
          </option>
        ))}
      </Select>
    </>
  );

  return [state, SelectMonedas];
};
