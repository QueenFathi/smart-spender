import { sql } from '@vercel/postgres';

import { Chapter } from "@/interfaces/chapter";
// import fs from "fs/promises"; // <-- use promises API
// import matter from "gray-matter";
// import { join } from "path";

// const postsDirectory = join(process.cwd(), "_chapters");

// export async function getChapterBySlug(slug: string): Promise<Chapter> {
//   const realSlug = slug.replace(/\.md$/, "");
//   const fullPath = join(postsDirectory, `${realSlug}.md`);

//   const fileContents = await fs.readFile(fullPath, "utf8");
//   const { data, content } = matter(fileContents);

//   const sections = content.split (/^---$/m).map((section) => section.trim());

//   return { ...data, slug: realSlug, content, sections } as Chapter;
// }

// export async function getAllChapters(): Promise<Chapter[]> {
//   const slugs = await fs.readdir(postsDirectory);

//   const posts = await Promise.all(slugs.map((slug) => getChapterBySlug(slug)));
//   // .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));

//   return posts;
// }


export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
}

export async function getChapterData(slug: string): Promise<Chapter | null> {
  try {
    const response = await fetch(`/api/chapters/${slug}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const result: ApiResponse<Chapter> = await response.json()

    if (result.success && result.data) {
      return result.data
    }

    return null
  } catch (error) {
    console.error("Error fetching chapter data:", error)
    return null
  }
}

export async function getAllChapters() {
  try {
    const response = await fetch("/api/chapters/all", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ action: "getAllChapters" }),
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const result = await response.json()

    if (result.success && result.data) {
      return result.data
    }

    return []
  } catch (error) {
    console.error("Error fetching all chapters:", error)
    return []
  }
}

export async function updateLessonProgress(
  slug: string,
  lessonId: string,
  isCompleted: boolean,
): Promise<boolean> {
  try {
    const response = await fetch(`/api/chapters/${slug}/lessons/${lessonId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isCompleted }),
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const result = await response.json()
    return result.success
  } catch (error) {
    console.error("Error updating lesson progress:", error)
    return false
  }
}



