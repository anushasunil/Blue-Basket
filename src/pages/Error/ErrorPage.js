import { useEffect } from "react"


export function ErrorPage() {
    useEffect(()=>{
        document.title = "Page not found"
    })
    
    return (
        <div>
            <h1>
                404 page not found
            </h1>
        </div>
    )
}