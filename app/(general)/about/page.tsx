import type {Metadata} from 'next'


export const metadata:Metadata = {
    title: 'Contact page',
    description: "hola",
    keywords: ['ed','soto']
}

export default function AboutPage(){
    return(
        <>
            <span className="text-7xl">about {5*7}</span>
        </>
    )
}