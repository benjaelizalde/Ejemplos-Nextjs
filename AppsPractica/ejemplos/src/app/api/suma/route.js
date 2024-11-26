// Hacer una suma con service (get)

import { NextResponse } from "next/server";

export const GET = async (request) => {
  const numeros = request.nextUrl.searchParams.getAll("numero");
  console.log(numeros);
  // const numerosArray = numeros.map(num => parseInt(num));
  // console.log(numerosArray);
  const resultado = numeros.reduce((acc, num) => acc + parseInt(num), 0);
  return NextResponse.json({ resultado });
};
