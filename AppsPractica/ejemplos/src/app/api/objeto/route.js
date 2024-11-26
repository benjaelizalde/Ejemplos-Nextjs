// Api que reciba un objeto y se agregue a una lista.(post)
import { NextResponse } from "next/server";

const listaObjetos = [];

export const POST = async (request) => {
  const data = await request.json();
  listaObjetos.push(data);
  return NextResponse.json(listaObjetos);
};
