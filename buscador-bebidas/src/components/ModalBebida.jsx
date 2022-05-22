import React from 'react';
import {Image, Modal} from 'react-bootstrap';
import {useBebidas} from '../hooks/useBebidas';

export const ModalBebida = () => {
  const {modal, handleModalClick, receta, cargando} = useBebidas();
  console.log(receta);
  const mostrarIngredientes = () => {
    let ingredientes = [];
    for (let i = 1; i < 16; i++) {
      const ingredient = receta[`strIngredient${i}`];
      const measure = receta[`strMeasure${i}`];
      if (ingredient) {
        ingredientes.push(
          <li key={i}>
            {' '}
            {ingredient} {measure}
          </li>
        );
      }
    }
    return ingredientes;
  };
  return (
    !cargando && (
      <Modal show={modal} onHide={handleModalClick}>
        <Image src={receta.strDrinkThumb} alt={`Imagen receta ${receta.strDrink}`} />
        <Modal.Header>
          <Modal.Title>{receta.strDrink}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="p-3">
            <h2>Instrucciones</h2>
            {receta.strInstrictions}
            <h2>Ingredientes y cantidades</h2>
            {mostrarIngredientes()}
          </div>
        </Modal.Body>
      </Modal>
    )
  );
};
