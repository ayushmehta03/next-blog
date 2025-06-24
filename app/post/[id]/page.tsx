import { prisma } from "@/app/utilis/db";
import { notFound } from "next/navigation";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
async function getData(id:string){
    const data= await prisma.blogPost.findUnique({
        where:{
            id:id,
        }
    })
    if(!data){
        return notFound
    }
    return data
}
 
type Params= Promise<{id:string}>

export default  async function IdPage({params}:{params:Params}){
  const{id}= await params
 const data= await getData(id)
 return (
    <div className="max-w-3xl mx-auto py-8 px-4 ">
        <Link href="/dashboard" className={buttonVariants({variant:"secondary"})}>
        Back to Posts
        </Link>
        <div className="mb-8 mt-6">
        <h1 className="text-3xl font-bold tracking-tight mb-4">{}</h1>

        </div>
    </div>
 )
}