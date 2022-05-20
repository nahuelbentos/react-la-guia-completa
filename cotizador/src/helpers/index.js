export const obtenerDiferenciaYear = (year) => new Date().getFullYear() - year;

export const calcularMarca = (marca) => {
  // Americano 15%
  // Europeo 30%
  // Asiatico 5%
  let incremento;
  switch (marca) {
    case '1':
      incremento = 1.3;
      break;
    case '2':
      incremento = 1.15;
      break;
    case '3':
      incremento = 1.05;
      break;
    default:
      break;
  }

  return incremento;
};

// Basico 20%
// Completo 50%
export const calcularPlan = (plan) =>  plan === '1' ? 1.2 : 1.5;

export const formatearDinero = (cantidad= 0) =>  cantidad.toLocaleString('en-US', {
  style: 'currency',
  currency: 'USD'
});
