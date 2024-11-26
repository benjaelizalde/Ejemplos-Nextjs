import { NextResponse } from "next/server";

// Contador en memoria: Implementa un endpoint que permita incrementar, decrementar o consultar un contador almacenado en memoria usando métodos GET y POST.
let contador = 0;
export const GET = () => {
  return NextResponse.json({ contador });
};

export const POST = async (request) => {
  const numero = parseInt(await request.json());
  contador += numero;
  return NextResponse.json(
    `Se modifico el contador en ${numero}, contador actual: ${contador}`
  );
};
