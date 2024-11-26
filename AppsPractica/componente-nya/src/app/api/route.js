import { NextResponse } from "next/server";

let lista = [
    {
        id:'1',
        nombre:'juan',
        apellido:'perez'
    }
  ]

export const GET = async () => {
  return NextResponse.json(lista);
};

export const POST = async (request) => {
  const objeto = await request.json();
  lista.push(objeto);
  console.log(lista);
  return NextResponse.json(lista);
};
