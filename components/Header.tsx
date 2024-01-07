"use client"




import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger
} from "@/components/ui/navigation-menu"
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
import Link from "next/link"

async function Header() {
   

  return (
    <header className="flex items-center justify-between fixed h-auto top-0 w-full bg-white z-50 shadow grid-cols-2 ">
        <Link href="/">
            <Image
                src="https://www.svgrepo.com/show/440775/market-purchase.svg"
                alt="Logo"
                width={75}
                height={75}
                className="m-10"
            />
        </Link>

        <div className='justify-center items-center gap-2'>
            <form className='w-full flex-center flex text-sm text-gray-500 outline-0'>
                <div className="relative flex items-center">
                <input
                    type='text'
                    placeholder='Finde deinen Artikel'
                    className='block w-full border border-gray-200 bg-white py-3 font-satoshi  text-center text-sm font-medium hover:border-black focus:border-black focus:outline-none focus:ring-0 peer' 
                    />
                    <MagnifyingGlassIcon className="w-6 h-6 absolute pointer-events-none right-0"/>
                </div>
                
            </form>
        </div>


        <div className="flex items-center space-x-2.5 text-sm">
        <button className="button bg-blue-600 text-white border-transparent hover:border-blue-600 hover:bg-transparent hover:text-black">
          Log in
        </button>
        <button className="button bg-transparent border-blue-600 hover:bg-blue-600 hover:text-white hover:border-transparent">
          Sign up
        </button>
      </div>
        
        <div className="absolute object-center bottom-0 justify-end item-center ml-auto mr-auto ">
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>NEW</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                            <li className="row-span-3">
                                <NavigationMenuLink asChild>
                                <a
                                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                    href="/"
                                >
                                
                                    <div className="mb-2 mt-4 text-lg font-medium">
                                    Click here for new
                                    </div>
                                    <p className="text-sm leading-tight text-muted-foreground">
                                    New products add for database and have nice items 
                                    </p>
                                </a>
                                </NavigationMenuLink>
                            </li>
                            <p>The best products</p>
                            <Link className="text-blue-700" href={"http://localhost:3000/product/11"}>Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5</Link>
                            <Link className="text-blue-700" href={"http://localhost:3000/product/12"}>WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive</Link>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>ABOUT</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                    <p>Ahmad Alhalwany</p>
                                    <p>+963936383264</p>
                                    
                                    <Link className="flex object-center" href={"https://zeus-v851-8wlmcxt7r-ahmad-alhalwany.vercel.app/"}> <p className="text-blue-800 underline">Visit another website</p> </Link>
                                </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>   
        </div>
        
       
    </header>
  )
}

export default Header
