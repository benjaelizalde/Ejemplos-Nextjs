import { NextResponse } from "next/server";

// hacer un Endpoint que devuelva la cantidad de valores pasados por parámetro.
export const GET = async (request) => {
  const params = request.nextUrl.searchParams.getAll("value");
  console.log(params);
  const count = Array.from(params.keys()).length;
  return NextResponse.json(`Cantidad de parametros: ${count}`);
};

// Calcular la longitud de un string con una api con servicio 
export const POST = async (request) => {
  // Leer el cuerpo de la solicitud
  const string = await request.json();

  // Calcular la longitud del string
  const length = string.length;

  return NextResponse.json(`Longitud del string: ${ length }`);
};
