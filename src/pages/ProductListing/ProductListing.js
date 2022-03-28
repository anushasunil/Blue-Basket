import { Filter } from "../../components/Filter/Filter"
import { useProduct } from "../../contexts/product-context"
import "./ProductListing.css"
import { useAxios } from "../../utility/hooks/useAxios";

export function ProductListing() {
    const {filteredList, getRatingBadge} = useProduct();
    return (
        <div className="display-justify-center product-page">
            <Filter/>
             <div className="product-display display-justify-center flex-grow">
                {
                    filteredList.map(product => {
                        return (
                            <div className="card with-badge">
                                <div className="image-container display-justify-center display-align-center">
                                    <img src={product.image} alt="image" className="card-img"/>
                                    <p className="badge text">Limited offer </p>
                                </div>
                                <div className="content">
                                    <h3>{product.productName}</h3>
                                    <p>{product.brandName}<small><i> 
                                        {product.collectionName}</i></small></p>
                                    <div className="ratings display-align-center">
                                        {getRatingBadge(product.ratings)}
                                        <small className="count">{product.reviewNumber}</small>
                                    </div>
                                    <h4 className="price display-align-center display-justify-flex-end">
                                        <p className="strike-off">${product.oldPrice}</p>${product.newPrice}
                                    </h4>
                                    <div className="action-tab">
                                        <div className="actions display-align-center  display-justify-flex-end">
                                            <button className="solid-secondary display-align-center">
                                                ADD TO WISHLIST
                                                <i className="fa-solid fa-cart-shopping button-icons"></i>
                                            </button>
                                            <button className="solid-primary display-align-center">
                                               ADD TO CART
                                                <i className="fa-solid fa-basket-shopping button-icons"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                {
                    filteredList.length === 0 && (
                        <div className="empty-message display-align-center display-justify-center">
                            No products to display
                        </div>
                    )
                }
            </div>
        </div>
    )
}