import { useEffect } from "react"


export function Wishlist() {
    useEffect(()=>{
        document.title = "MyWishlist | BlueBasket"
    })
    return (
        <div>
            <h1>
                This is Wishlist
            </h1>
        </div>
    )
}