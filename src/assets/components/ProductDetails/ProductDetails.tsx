import { produitsType } from "../../../lib/definitions"
import style from "./ProductDetails.module.css"

type detailProps = {
    myproduct : produitsType,
}


function ProductDetails ({myproduct} : detailProps){
    return(
        <article className={style.details}>  
        <h2>Détail du produit</h2>
        <img className={style.detailsIMG} src={myproduct.picture} alt={myproduct.name} />
        <p>{myproduct.description}</p>
        <aside>{`Le prix du produit est de ${myproduct.price} euros`}</aside>

        </article>
    )
}

export default ProductDetails 