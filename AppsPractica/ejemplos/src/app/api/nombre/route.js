// Api web que retorne/ingrese un nombre de/a una lista (get post)

import { NextResponse } from "next/server";

const nombres = ["Juan", "Pedro", "Maria"];

export const GET = async (request) => {
  const nombre = await request.nextUrl.searchParams.get("nombre");
  if (nombre) {
    if (nombres.includes(nombre)) {
      return NextResponse.json(`El nombre ${nombre} SE encuentra en la lista`);
    }
    return NextResponse.json(`El nombre ${nombre} NO se encuentra en la lista`);
  }
};

export const POST = async (request) => {
  const nombre = await request.json();
  nombres.push(nombre);
  return NextResponse.json(`El nombre ${nombre} fue agregado a la lista: ${nombres}`);
};
