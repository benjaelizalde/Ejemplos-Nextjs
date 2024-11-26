// a mi me pidieron hacer un endpoint que reciba datos de usuario y los guarde en una lista en formato objeto y los muestre en pantalla
import { NextResponse, userAgent } from "next/server";

const users = [];
export const GET = async (request) => {
  const id = await request.nextUrl.searchParams.get("id");
  const user = await request.nextUrl.searchParams.get("user");
  const email = await request.nextUrl.searchParams.get("email");
  const pwd = await request.nextUrl.searchParams.get("pwd");

  users.push({ id, user, email, pwd });
  return NextResponse.json(users);
};
