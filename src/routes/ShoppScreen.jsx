import { NavLink } from "react-router-dom";
import { Spinner } from "../components/Spinner.jsx"
import { useFetchProducts } from "../hooks/useFetchProducts.js"
import "../styles/shoppScreen.css"

export const ShoppScreen = () => {
    const {products, errors, isLoading} = useFetchProducts();

    return (
        <section className="shopp-section container">
            <h2 className="shopp-title">Products</h2>
            {isLoading 
                ? <Spinner />
                : products 
                    ? (
                    <div className="container-products">
                        {products.map(item => {
                            const {id, title, price, image} = item;

                            return (
                                <div className="card-product" key={id}>
                                    <h3>{title}</h3>
                                    <img src={image} alt={title} />
                                    <button className="card-price">${price}</button>
                                    <NavLink 
                                        to={`/${id}`}
                                        className="card-info">More info</NavLink>
                                </div>
                            )
                        })};
                    </div>)
                    : <p>No se hallaron resultados</p>
            }
        </section>
    )
}