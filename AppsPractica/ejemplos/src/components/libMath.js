// Crear Librería matemática y usar en web api
export const sumar = (a, b) => a + b;

export const restar = (a, b) => a - b;

export const multiplicar = (a, b) => a * b;

export const dividir = (a, b) => {
  if (b === 0) throw new Error("La división por cero no está permitida.");
  return a / b;
};