import { NextResponse } from "next/server";
import { Types } from "mongoose";
import connectToDatabase from "@/lib/database";
import Entity from "@/lib/models/entity";

export const GET = async (request: Request, context: { params: any }) => {
  const entityId = context.params.id;
  try {
    if (!entityId || !Types.ObjectId.isValid(entityId)) {
      return new NextResponse(
        JSON.stringify({ message: "Invalid or missing entityId" }),
        { status: 400 }
      );
    }

    await connectToDatabase();
    const entity = await Entity.findById(entityId);

    if (!entity) {
      return new NextResponse(JSON.stringify({ message: "Entity not found" }), {
        status: 404,
      });
    }

    return new NextResponse(JSON.stringify({ entity }), {
      status: 200,
    });
  } catch (error: any) {
    return new NextResponse("Error in fetching entity: " + error.message, {
      status: 500,
    });
  }
};

export const PATCH = async (request: Request, context: { params: any }) => {
  const entityId = context.params.id;
  try {
    const body = await request.json();

    if (!entityId || !Types.ObjectId.isValid(entityId)) {
      return new NextResponse(
        JSON.stringify({ message: "Invalid or missing entityId" }),
        { status: 400 }
      );
    }

    await connectToDatabase();

    const updatedEntity = await Entity.findByIdAndUpdate(entityId, body, {
      new: true,
    });

    if (!updatedEntity) {
      return new NextResponse(
        JSON.stringify({ message: "Entity not found in the database" }),
        { status: 404 }
      );
    }

    return new NextResponse(
      JSON.stringify({ message: "Entity is updated", entity: updatedEntity }),
      { status: 200 }
    );
  } catch (error: any) {
    return new NextResponse("Error in updating entity: " + error.message, {
      status: 500,
    });
  }
};

export const DELETE = async (request: Request, context: { params: any }) => {
  const entityId = context.params.id;
  try {
    if (!entityId || !Types.ObjectId.isValid(entityId)) {
      return new NextResponse(
        JSON.stringify({ message: "Invalid or missing entityId" }),
        { status: 400 }
      );
    }

    await connectToDatabase();

    const deletedEntity = await Entity.findByIdAndDelete(entityId);

    if (!deletedEntity) {
      return new NextResponse(
        JSON.stringify({ message: "Entity not found in the database" }),
        { status: 404 }
      );
    }

    return new NextResponse(
      JSON.stringify({ message: "Entity is deleted", entity: deletedEntity }),
      { status: 200 }
    );
  } catch (error: any) {
    return new NextResponse("Error in deleting entity: " + error.message, {
      status: 500,
    });
  }
};
