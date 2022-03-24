import { useEffect } from "react"


export function Auth() {
    useEffect(()=>{
        document.title = "Authentication | BlueBasket"
    })
    
    return (
        <div>
            <h1>
                Auth
            </h1>
        </div>
    )
}