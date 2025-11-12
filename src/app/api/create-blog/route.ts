// Currently disabled - blog feature not integrated yet
import { NextResponse } from "next/server";
// import { v2 as cloudinary } from 'cloudinary';
// import { prisma } from '@/lib/prisma'
// import { getServerSession } from "next-auth/next";

// cloudinary.config({
//     cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
//     api_key: process.env.CLOUDINARY_API_KEY,
//     api_secret: process.env.CLOUDINARY_API_SECRET
// });

// interface CloudinaryUploadResult {
//     public_id: string;
//     [key: string]: unknown
// }

export async function POST() {
  return NextResponse.json(
    { success: false, message: "Blog feature is currently disabled" },
    { status: 503 }
  );
}
