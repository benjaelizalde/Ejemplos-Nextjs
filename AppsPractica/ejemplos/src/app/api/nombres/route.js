import { NextResponse } from "next/server";
// Api que retorne una lista de nombres(get)
const nombres = ["Juan", "Pedro", "Luis", "Carlos", "Jorge"];

export const GET = async () => {
  return NextResponse.json({nombres});
};