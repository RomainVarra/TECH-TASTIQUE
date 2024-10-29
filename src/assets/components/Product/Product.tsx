import productStyle from './Product.module.css'

type ProductProps = {
    name: string;
    picture: string;
  };

function Product ({name,picture} : ProductProps){
    return(
        <div className={productStyle.imgSrc}>
        <h3> {name}</h3>
        <img  src={picture} alt={`Presentation d'un ${name}`} />
        </div>

    )
}

export default Product
