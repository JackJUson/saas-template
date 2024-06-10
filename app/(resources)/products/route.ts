import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/database";
import Product from "@/lib/models/product";

export const GET = async (request: Request) => {
  try {
    await connectToDatabase();
    const products = await Product.find();
    return new NextResponse(JSON.stringify(products), { status: 200 });
  } catch (error: any) {
    return new NextResponse("Error in fetching products: " + error.message, {
      status: 500,
    });
  }
};

export const POST = async (request: Request) => {
  try {
    const body = await request.json();
    await connectToDatabase();
    const newProduct = new Product(body);
    await newProduct.save();

    return new NextResponse(
      JSON.stringify({ message: "Product is created", product: newProduct }),
      { status: 200 }
    );
  } catch (error: any) {
    return new NextResponse("Error in creating product: " + error.message, {
      status: 500,
    });
  }
};
