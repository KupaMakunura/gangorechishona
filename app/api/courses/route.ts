import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: Request) => {
  

  return NextResponse.json({key:"Kups"});
};

export const GET = async(request:Request)=>{
    return NextResponse.json({"key":"Hello world"})
}