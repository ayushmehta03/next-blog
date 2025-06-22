"use server"

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import { prisma } from "./utilis/db"
import { redirect } from "next/navigation";

export default async function handleSubmission(formData: FormData) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const title = formData.get("title");
  const content = formData.get("content");
  const url = formData.get("url");

  if (!user?.id || !user?.picture|| !user?.given_name) {
    throw new Error("User info missing from session");
  }

  try {
    const data = await prisma.blogPost.create({
      data: {
        title: title as string,
        content: content as string,
        imageUrl: url as string,
        authorId: user.id,
        authorName:user.given_name,
        authorImage: user.picture,
      }
    });
    return redirect('/dashboard');
  } catch (error) {
    console.error(" Error creating blog post:", error);
    throw error;
  }
}
