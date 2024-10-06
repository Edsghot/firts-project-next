import type {Metadata} from 'next'

export const metadata:Metadata ={
    title: 'pricing',
    description: 'estos son los precios de la pagina',
    keywords:['hola','inicio']
} 

export default function PricingPage(){
    return(
        <>
            <span>pricing </span>
        </>
    )
}