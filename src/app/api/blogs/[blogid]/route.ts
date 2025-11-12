// Currently disabled - blog feature not integrated yet
// import { prisma } from '@/lib/prisma'
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    { success: false, message: "Blog feature is currently disabled" },
    { status: 503 }
  );

  // try {
  //     const blog = await prisma.blog.findUnique({
  //         where: {
  //             id: blogid,
  //         },
  //     });

  //     return NextResponse.json(
  //         { success: true, message: blog },
  //         { status: 200 }
  //     );
  // } catch (error) {
  //     return NextResponse.json(
  //         { success: false, message: `Error while fetching blog: ${error}` },
  //         { status: 500 }
  //     );
  // }
}
