// Crear Librería matemática y usar en web api
import { sumar, restar, multiplicar, dividir } from "@/components/libMath";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  const numeros = request.nextUrl.searchParams.get("numeros");
  const operacion = request.nextUrl.searchParams.get("operacion");

  const numerosArray = numeros.split(",").map((num) => parseFloat(num));

  let resultado;

  switch (operacion) {
    case "suma":
      resultado = numerosArray.reduce((acc, num) => sumar(acc, num), 0);
      break;
    case "resta":
      resultado = numerosArray.reduce((acc, num) => restar(acc, num));
      break;
    case "producto":
      resultado = numerosArray.reduce((acc, num) => multiplicar(acc, num), 1);
      break;
    case "division":
      resultado = numerosArray.reduce((acc, num) => dividir(acc, num));
      break;
    default:
      return NextResponse.json(
        { error: "Operación no válida." },
        { status: 400 }
      );
  }

  return NextResponse.json({ resultado });
};
