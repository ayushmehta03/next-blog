import Image from "next/image";
import Link from "next/link";

interface IAppProps {
  data: {
    id: string;
    title: string;
    content: string;
    imageUrl: string;
    authorId: string;
    authorName: string | null;
    authorImage: string;
    createdAt: Date;
    updatedAt: Date;
  };
}
;

export default function BlogpostCard({ data }: IAppProps) {
  const formattedDate = new Date(data.createdAt).toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
})
  
  
  
  return (
    <div className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md transition-all hover:shadow-lg">
      <Link href={`/post/${data.id}`} className="block w-full h-full">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={data.imageUrl}
            alt="image for blog"
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        <div className="p-4">
          <h3 className="mb-2 text-lg font-semibold text-gray-900">{data.title}</h3>
          <p className="mb-4 text-sm text-gray-600 line-clamp-3">{data.content}</p>
        </div>
        <div className="flex items-center justify-between">
    <div className="flex items-center space-x-2 p-4">
      <p className="text-xl text-gray-600">{data.authorName}</p>
      <p className="text-gray-600">Posted on {formattedDate}</p>
    </div>
        </div>
      </Link>
    </div>
  );
}
