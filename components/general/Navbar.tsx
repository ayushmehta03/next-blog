import Link from "next/link";
import {  buttonVariants } from "../ui/button";
import { ModeToggle } from "../ui/ModeToggle";;
 import {LoginLink,LogoutLink,RegisterLink}from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Divide } from "lucide-react";

export default async function Navbar(){
    const {getUser}= getKindeServerSession();
    const user= await getUser();
    return(
        <nav className="py-5 flex items-center justify-between">
            <div className="flex items-center gap-6">
        <Link href="/">
<h1 className="text-3xl font-semibold">UPES <span className="text-blue-500">Blog</span></h1>
        </Link>
        <div  className="  hidden sm:flex items-center gap-6 ">
            <Link className="text-1.5xl font-medium hover:text-blue-500 transition-colors " href="/">
            Home
            </Link>
            <Link className="text-1.5xl font-medium hover:text-blue-500 transition-colors " href="/dashboard">
            Dashboard
            </Link>


        </div>
                    </div>
    
            {user?(
                <div className="flex items-center gap-4 ">
                   <p>{user.given_name}</p> 
                   <LogoutLink className={buttonVariants({variant:"ghost"})}>Logout</LogoutLink>
                  < ModeToggle />

                </div>
            ):(
                <div className="flex items-center gap-4">
                <RegisterLink className={buttonVariants({variant:"ghost"})}>Register </RegisterLink>
                <LoginLink className={buttonVariants({variant:"ghost"})}>Login</LoginLink>
                <ModeToggle />
                </div>
            )}

        </nav>
    )
}