import { useEffect } from "react"


export function Cart() {
    useEffect(()=>{
        document.title = "MyCart | BlueBasket"
    })
    
    return (
        <div>
            <h1>
                This is Cart
            </h1>
        </div>
    )
}