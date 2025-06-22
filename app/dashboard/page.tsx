import { buttonVariants } from "@/components/ui/button"
import Link from "next/link"

export default function Dashboard(){
 
    return (
        <div >
            <div className="flex items-center justify-between mb-8">
        <h2 className="text-xl font-medium">Your Blog Articles</h2>
        <Link href='/dashboard/create'  className={buttonVariants()}>
        Create Blog
        </Link>
            </div>
        </div>

    )
}