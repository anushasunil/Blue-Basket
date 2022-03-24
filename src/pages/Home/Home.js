import { useEffect } from "react"


export function Home() {
    useEffect(()=>{
        document.title = "Home | BlueBasket"
    })
    return (
        <div>
            <h1>
                This is HomePage
            </h1>
        </div>
    )
}