"use server";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { prisma } from "../../utilis/db";
import { redirect } from "next/navigation";

export default async function handleSubmission(formData: FormData) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  console.log("🧪 Kinde user in server action:", user);

  if (!user?.id || !user?.given_name) {
    throw new Error("User info missing from session");
  }

  const title = formData.get("title") as string | null;
  const content = formData.get("content") as string | null;
  const url = formData.get("url") as string | null;

  if (!title || !content || !url) {
    throw new Error("Missing form fields");
  }

  await prisma.blogPost.create({
    data: {
      title,
      content,
      imageUrl: url,
      authorId: user.id,
      authorImage: user.picture ?? "", // fallback
      authorName: user.given_name,
    },
  });

  redirect("/dashboard");
}
