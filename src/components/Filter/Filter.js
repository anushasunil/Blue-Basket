import "./Filter.css";
import {useProduct} from "../../contexts/product-context"


export function Filter() {

    const { productState, productDispatch } = useProduct();
   
    return (
        <div>
            <input type="checkbox" className="hamburger-checkbox clickable-image"/>
            <button className="plain-text-button filter-responsive"><p>Filter by</p></button>
            <div className="aside-film"></div>
            <aside className="filter display-flex-column"> 
                <div className="filter-contents">
                    <section className="heading display-justify-space-between display-align-center">
                        <h6 className="responsive-header">Filters</h6>
                        <button 
                            className="plain-text-button clickable-image"
                            onClick={()=>{
                                productDispatch({type: "CLEAR_ALL"});
                            }}
                        >
                            Clear All
                        </button>
                    </section>
                    <section className="price-filter">
                        <h6>Price</h6>
                        <input 
                            type="range" 
                            name="price-range"
                            min="0"
                            max="50"
                            step="10"
                            value={productState.price}
                            onChange={(e)=>{
                                productDispatch({type: "PRICE", payload: e.target.value})
                            }}
                        />
                    </section>
                    <section className="category">
                        <h6>Material</h6>
                            <div className="category-list">
                                <input 
                                    type="checkbox" 
                                    name="category1"
                                    onChange={(e) => {
                                        productDispatch(
                                        {
                                            type : "MATERIAL", payload: "COTTON", value: e.target.checked
                                        })
                                    }}
                                    checked={productState.material.cotton}
                                />
                                <label for="category-1">Cotton</label>
                            </div>
                            <div className="category-list">
                                <input 
                                    type="checkbox" 
                                    name="category2"
                                    onChange={(e) => {
                                        productDispatch(
                                            {
                                                type : "MATERIAL", payload: "RAYON", value: e.target.checked
                                            })
                                    }}
                                    checked={productState.material.rayon}
                                />
                                <label for="category-2">Rayon</label>
                            </div>
                            <div className="category-list">
                                <input 
                                    type="checkbox" 
                                    name="category3"
                                    onChange={(e) => {
                                        productDispatch(
                                            {
                                                type : "MATERIAL", payload: "SYNTHETIC", value: e.target.checked
                                            })
                                    }}
                                    checked={productState.material.synthetic}
                                />
                                <label for="category-3">Synthetic</label>
                            </div>
                            <div className="category-list">
                                <input 
                                    type="checkbox" 
                                    name="category4"
                                    onChange={(e) => {
                                        productDispatch(
                                            {
                                                type : "MATERIAL", payload: "WOOL", value: e.target.checked
                                            })
                                    }}
                                    checked={productState.material.wool}
                                
                                />
                                <label for="category-4">Wool</label>
                            </div>
                    </section>
                    <section className="rating">
                        <h6>Rating</h6>
                        <div className="rating-list">
                            <input 
                                type="radio" 
                                name="filter-ratings"
                                onChange={(e)=>{
                                    e.target.checked? productDispatch({
                                        type: "RATING" , payload:"4"
                                    }): console.error("RATING FILTER BROKEN");

                                }}
                                checked={productState.rating === "4"}
                            />
                            <label for="category-1">4 stars & above</label>
                        </div>
                        <div className="rating-list">
                            <input 
                                type="radio" 
                                name="filter-ratings"
                                onChange={(e)=>{
                                    e.target.checked? productDispatch({
                                        type: "RATING" , payload:"3"
                                    }): console.error("RATING FILTER BROKEN");
                                }}
                                checked={productState.rating === "3"}
                            />
                            <label for="category-1">3 stars & above</label>
                        </div>
                        <div className="rating-list">
                            <input 
                                type="radio" 
                                name="filter-ratings"

                                onChange={(e)=>{
                                    e.target.checked? productDispatch({
                                        type: "RATING" , payload:"2"
                                    }): console.error("RATING FILTER BROKEN");
                                }}
                                checked={productState.rating === "2"}
                            />
                            <label for="category-1">2 stars & above</label>
                        </div>
                        <div className="rating-list">
                            <input 
                                type="radio" 
                                name="filter-ratings"
                                onChange={(e)=>{
                                    e.target.checked? productDispatch({
                                        type: "RATING" , payload:"1"
                                    }): console.error("RATING FILTER BROKEN");
                                }}
                                checked={productState.rating === "1"}
                            />
                            <label for="category-1">1 stars & above</label>
                        </div>
                    </section>
                    
                    <section className="sort-by">
                        <h6>Sort by</h6>
                        <div className="sorting-options">
                            <input 
                                type="radio" 
                                name="sorting-option"
                                onChange={(e)=>{
                                    e.target.checked? productDispatch({
                                        type: "SORT_BY" , payload:"LOW_TO_HIGH"
                                    }): console.error("SORT FILTER BROKEN");
                                }}
                                checked={productState.sortBy === "LOW_TO_HIGH"}
                            />
                            <label for="sorting-option-1">Price - Low to High</label>
                        </div>
                        <div className="sorting-options">
                            <input 
                                type="radio" 
                                name="sorting-option"
                                onChange={(e)=>{
                                    e.target.checked? productDispatch({
                                        type: "SORT_BY" , payload:"HIGH_TO_LOW"
                                    }): console.error("SORT FILTER BROKEN");
                                }}
                                checked={productState.sortBy === "HIGH_TO_LOW"}
                            />
                            <label for="sorting-option-2">Price - High to Low</label>
                        </div>
                    </section>
                </div>
            </aside>
        </div>
    )
}