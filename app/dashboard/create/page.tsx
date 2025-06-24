import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import handleSubmission from "./action";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Sumbitbutton from "@/components/general/Sumbitbutton";

export default async function CreateBlogPost() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    redirect("/auth/login");
  }

  return (
    <div>
      <Card className="max-w-lg mx-auto py-8">
        <CardHeader>
          <CardTitle>Create Post</CardTitle>
          <CardDescription>Create a new post to share with the world</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col gap-4" action={handleSubmission}>
            <div className="flex flex-col gap-2">
              <Label>Title</Label>
              <Input name="title" required type="text" placeholder="Title" />
            </div>

            <div className="flex flex-col gap-2">
              <Label>Content</Label>
              <Textarea name="content" required placeholder="Content" />
            </div>

            <div className="flex flex-col gap-2">
              <Label>Image Url</Label>
              <Input name="url" required type="url" placeholder="Image URL" />
            </div>
        <Sumbitbutton />
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
