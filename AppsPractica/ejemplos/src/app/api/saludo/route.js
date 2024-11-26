import { NextResponse } from "next/server";
// API de saludo personalizado: Crea una API que reciba un parámetro name por query string y devuelva un mensaje como "Hola, [name]!".

export const GET = async (request) => {
  const nombre = request.nextUrl.searchParams.get("nombre");
  return NextResponse.json(`Hola ${nombre}`);
};
