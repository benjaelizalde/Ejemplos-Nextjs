import { NextResponse } from "next/server";
// Web api que liste países(get)
const paises = ["Argentina", "Brasil", "Chile", "Uruguay", "Paraguay"];

export const GET = async () => {
  return NextResponse.json({paises});
};