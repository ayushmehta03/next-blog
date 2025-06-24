"use client"
import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";

export default function Sumbitbutton(){
    const {pending}=useFormStatus()
    return(
        <Button className="w-fit" type="submit" disabled={pending}>{pending?"Sumbitting": "Sumbit"}</Button>
    )
}