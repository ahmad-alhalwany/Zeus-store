import Link from "next/link";

export default  function NotFound() {
    return(
        <div className="divide-y items-center flex flex-col gap-8 px-4 mt-48 pb-10">
            <h1 className="font-bold text-2xl md:text-4xl text-center"> Not Found </h1>
            <p>Could  not find requested resource Please <Link href={"/"} className="text-blue-700">click here</Link></p>
        </div>
    )
}