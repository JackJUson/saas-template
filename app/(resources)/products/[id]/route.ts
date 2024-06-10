import { NextResponse } from "next/server";
import { Types } from "mongoose";
import connectToDatabase from "@/lib/database";
import Product from "@/lib/models/product";

export const GET = async (request: Request, context: { params: any }) => {
  const productId = context.params.id;
  try {
    if (!productId || !Types.ObjectId.isValid(productId)) {
      return new NextResponse(
        JSON.stringify({ message: "Invalid or missing productId" }),
        { status: 400 }
      );
    }

    await connectToDatabase();
    const product = await Product.findById(productId);

    if (!product) {
      return new NextResponse(
        JSON.stringify({ message: "Product not found" }),
        {
          status: 404,
        }
      );
    }

    return new NextResponse(JSON.stringify({ product }), {
      status: 200,
    });
  } catch (error: any) {
    return new NextResponse("Error in fetching product: " + error.message, {
      status: 500,
    });
  }
};

export const PATCH = async (request: Request, context: { params: any }) => {
  const productId = context.params.id;
  try {
    const body = await request.json();

    if (!productId || !Types.ObjectId.isValid(productId)) {
      return new NextResponse(
        JSON.stringify({ message: "Invalid or missing productId" }),
        { status: 400 }
      );
    }

    await connectToDatabase();

    const updatedProduct = await Product.findByIdAndUpdate(productId, body, {
      new: true,
    });

    if (!updatedProduct) {
      return new NextResponse(
        JSON.stringify({ message: "Product not found in the database" }),
        { status: 404 }
      );
    }

    return new NextResponse(
      JSON.stringify({
        message: "Product is updated",
        product: updatedProduct,
      }),
      { status: 200 }
    );
  } catch (error: any) {
    return new NextResponse("Error in updating product: " + error.message, {
      status: 500,
    });
  }
};

export const DELETE = async (request: Request, context: { params: any }) => {
  const productId = context.params.id;
  try {
    if (!productId || !Types.ObjectId.isValid(productId)) {
      return new NextResponse(
        JSON.stringify({ message: "Invalid or missing productId" }),
        { status: 400 }
      );
    }

    await connectToDatabase();

    const deletedProduct = await Product.findByIdAndDelete(productId);

    if (!deletedProduct) {
      return new NextResponse(
        JSON.stringify({ message: "Product not found in the database" }),
        { status: 404 }
      );
    }

    return new NextResponse(
      JSON.stringify({
        message: "Product is deleted",
        product: deletedProduct,
      }),
      { status: 200 }
    );
  } catch (error: any) {
    return new NextResponse("Error in deleting product: " + error.message, {
      status: 500,
    });
  }
};
