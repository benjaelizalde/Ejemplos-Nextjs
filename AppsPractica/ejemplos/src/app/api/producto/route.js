// Hacer una producto con service (get)

import { NextResponse } from "next/server";

export const GET = async (request) => {
  const numeros = await request.nextUrl.searchParams.get("numeros");
  console.log(numeros);
  const numerosArray = numeros.split(",").map((num) => num);
  console.log(numerosArray);
  const producto = numerosArray.reduce((acc, num) => acc * num, 1);
  return NextResponse.json({ producto });
};
