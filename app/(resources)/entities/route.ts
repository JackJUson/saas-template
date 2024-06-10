import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/database";
import Entity from "@/lib/models/entity";

export const GET = async (request: Request) => {
  try {
    await connectToDatabase();
    const entities = await Entity.find();
    return new NextResponse(JSON.stringify(entities), { status: 200 });
  } catch (error: any) {
    return new NextResponse("Error in fetching entities: " + error.message, {
      status: 500,
    });
  }
};

export const POST = async (request: Request) => {
  try {
    const body = await request.json();
    await connectToDatabase();
    const newEntity = new Entity(body);
    await newEntity.save();

    return new NextResponse(
      JSON.stringify({ message: "Entity is created", entity: newEntity }),
      { status: 200 }
    );
  } catch (error: any) {
    return new NextResponse("Error in creating entity: " + error.message, {
      status: 500,
    });
  }
};
