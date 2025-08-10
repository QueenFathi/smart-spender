import { type NextRequest, NextResponse } from "next/server"
import { chaptersData } from "@/lib/chapter-data"

export async function GET(request: NextRequest, { params }: { params: { slug: string } }) {
  try {
    // Simulate API delay for realistic experience
    await new Promise((resolve) => setTimeout(resolve, 100))

    const slug = params.slug
    const chapter = chaptersData[slug]

    if (!chapter) {
      return NextResponse.json({ error: "Chapter not found" }, { status: 404 })
    }

    return NextResponse.json({
      success: true,
      data: chapter,
    })
  } catch (error) {
    console.error("Error fetching chapter:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

// Get all chapters
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    if (body.action === "getAllChapters") {
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 150))

      const allChapters = Object.values(chaptersData).map((chapter) => ({
        slug: chapter.slug,
        title: chapter.title,
        description: chapter.description,
        icon: chapter.icon,
        difficulty: chapter.difficulty,
        duration: chapter.duration,
        color: chapter.color,
        lessonCount: chapter.lessons.length,
      }))

      return NextResponse.json({
        success: true,
        data: allChapters,
      })
    }

    return NextResponse.json({ error: "Invalid action" }, { status: 400 })
  } catch (error) {
    console.error("Error in POST request:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
