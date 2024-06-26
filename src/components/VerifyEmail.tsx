"use client"

import { trpc } from "@/trpc/client"
import { Loader2, LoaderCircle, XCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { buttonVariants } from "./ui/button"


interface VerifyEmailProps {
    token: string
}


const VerifyEmail = ({token}:VerifyEmailProps) => {
  const {data, isLoading, isError} = trpc.auth.verifyEmail.useQuery({
    token,
  })


  if(isError){
    return (
    <div className=" flex flex-col items-center gap-2">
        <XCircle className=" h-8 w-8 text-red-600" />
        <h3 className=" font-semibold text-xl">There was a problem</h3>
        <p className=" text-muted-foreground text-sm">
            this token is not valid
        </p>
    </div>
    )
  }

  if(data?.success){
    return (
        <div className=" flex flex-col h-full items-center justify-center">
            <div className=" relative mb-4 h-60 w-60 text-muted-foreground">
                <Image
                src="/hippo-email-sent.png"
                fill
                alt="sent"
                />
            </div>
            <h1 className="font-semibold text-2xl">
              You&apos;re all set
             </h1>
             <p className=" text-muted-foreground text-center mt-1">Thank you For Verifying your email</p>
             <Link className={buttonVariants({className: "mt-4"})} href="/sign-in">Sign In</Link>
        </div>
    )
  }

  if(isLoading){
    return(
        <div className=" flex flex-col items-center gap-2">
        <Loader2 className=" animate-spin h-8 w-8 text-zinc-300" />
        <h3 className=" font-semibold text-xl">Verifying...</h3>
        <p className=" text-muted-foreground text-sm">
            This will take seconds
        </p>
    </div>
    )
  }
}

export default VerifyEmail