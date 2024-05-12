import Image from "next/image"

const Page = () => {
  return (
    <main className=" relative lg:min-h-full">
        <div className=" h-80 overflow-hidden lg:absolute lg:h-full lg:w-1/2 lg:pr-4 xl:pr-12">
            <Image
            src="/checkout-thank-you.jpg"
            fill
            className=" h-full w-full object-cover object-center"
            alt="thank you"
            />
           
        </div>
    </main>
  )
}

export default Page