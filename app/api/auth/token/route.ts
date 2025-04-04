import { getToken } from "next-auth/jwt";
import { NextRequest } from "next/server";
import React from "react";

export async function GET(request: NextRequest) {
  const token = await getToken({ req: request });
  return token;
}
