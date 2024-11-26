import { NextResponse } from "next/server";

// API de números pares: Crea un endpoint que reciba un número por query string y devuelva si es par o impar.
export const GET = (request) => {
  const numero = parseInt(request.nextUrl.searchParams.get("numero"));
  if (numero % 2 === 0) {
    return NextResponse.json("El número es par");
  } else {
    return NextResponse.json("El número es impar");
  }
};
