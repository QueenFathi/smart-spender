// import { NextResponse } from "next/server";
// import { auth } from "auth";

// export async function POST(req: Request) {
//   const session = await auth();
//   if (!session)
//     return NextResponse.json({ error: "Not logged in" }, { status: 401 });

//   const { slug }: { slug: string } = await req.json();

//   await db.progress.upsert({
//     where: { userId_slug: { userId: session.user.id, slug } },
//     create: { userId: session.user.id, slug },
//     update: {},
//   });

//   return NextResponse.json({ success: true });
// }
