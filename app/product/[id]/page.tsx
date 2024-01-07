"use client"

import ProductImage from "@/components/ProductImage";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { notFound } from "next/navigation";

type Props = {
  params: {
    id:string,
  }
}

async function ProductPage({params:{id}}: Props) {
    try {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`)
    const product: Product = await res.json();
    return (
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 px-4 mt-48 pb-10 w-full">
        <ProductImage product={product}/>

        <div className="divide-y">
          <div className="space-y-2 pb-8 ">
            <h1 className="text-2xl md:text-4xl font-bold">{product.title}</h1>
            <h2 className="text-gray-500 font-bold text-xl md:text-3xl">${product.price}</h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>DETAILS</AccordionTrigger>
        <AccordionContent>
          <p className="text-xs md:text-sm ">{product.description}</p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>SHIPMENT</AccordionTrigger>
        <AccordionContent>
            <h3 className="font-semibold text-black">Info:</h3>
            <p>Shipping takes place in Germany and the EU. From 100 € we ship free of charge.</p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>RETURN</AccordionTrigger>
        <AccordionContent>
            <h3 className="font-semibold text-black">Info:</h3>
            <p>To submit a return, simply write us a short message.</p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
        </div>
      </div>


      
    )
    } catch (error) {
      notFound()
    }

    
  }
  
  export default ProductPage
  