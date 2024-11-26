import { NextResponse } from "next/server";

const lista = [
  { id: 1, nombre: "Juan" },
  { id: 2, nombre: "Pedro" },
  { id: 3, nombre: "Luis" },
  { id: 4, nombre: "Carlos" },
  { id: 5, nombre: "Jorge" },
];
export const DELETE = async (request, { params }) => {
  console.log(params);
  const { id } = await params;
  const index = lista.findIndex((item) => item.id == id);
  if (index >= 0) {
    const elim = lista.splice(index, 1);
    return NextResponse.json(
      `DELETE: id=${elim[0].id}, nombre=${elim[0].nombre}`
    );
  }
  return NextResponse.json("No se encontro el id");
};
