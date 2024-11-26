// enpoint metodo put

import { NextResponse } from "next/server";

let lista = [
  {
    id: "1",
    nombre: "Benjamín",
    apellido: "Gonzales",
  },
  {
    id: "2",
    nombre: "Juan",
    apellido: "Perez",
  }
];
export const PUT = async (request, { params }) => {
  const { id } = await params;
  const data = await request.json();
  const index = lista.findIndex((item) => item.id === id);
  console.log(index);
  lista[index] = { ...lista[index], ...data };
  return NextResponse.json(lista);
};
