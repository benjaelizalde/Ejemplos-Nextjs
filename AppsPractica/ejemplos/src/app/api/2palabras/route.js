// Web api concatenar dos palabras (get)
import { NextResponse } from "next/server";

export const GET = async (request) => {
    const palabra1 = await request.nextUrl.searchParams.get("pal1");
    const palabra2 = await request.nextUrl.searchParams.get("pal2");

    const concatenar = palabra1 + ' ' + palabra2;
  return NextResponse.json(concatenar);
};
