import Product from "../Product/Product"
import type { produitsType } from "../../../lib/definitions";
import style from './ProductCatalog.module.css'

type ProductCatalogProps = {
    produit : produitsType[];
    onButtonClick : (product : string) => void,
}

function ProductCatalogue ({produit, onButtonClick}: ProductCatalogProps){
    return(
        <article className={style.container}>
        <h2>Notre catalogue</h2>
        {produit.map((product) => (
            <div>
            <Product
            key={product.name}
            name ={product.name}
            picture ={product.picture}
            />
        <button className={style.buttonArticle} type="button" onClick={() => onButtonClick(product.name)}>En savoir plus</button>
        </div>
        ))}
        </article>
        
    )
}
 
export default ProductCatalogue