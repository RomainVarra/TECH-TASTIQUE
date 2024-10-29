import './App.css'
import ProductCatalogue from './assets/components/ProductCatalog/ProductCatalog'
import ProductDetails from './assets/components/ProductDetails/ProductDetails'
import ProductFilter from './assets/components/ProductFilter/ProductFilter'
import data from './assets/Data/data.json'
import type { produitsType } from "./lib/definitions";
import { useState } from 'react'

function App() {
  const produits : produitsType[] = data;
  const [choose,setChoose] = useState("");
  const filtre = choose ? produits.filter((p) => p.category === choose) : produits ;
  const [selectedProduct,setSelectedProduct] = useState ("") ;
  const productDetail : produitsType | undefined = produits.find((product) => product.name === selectedProduct);
  

  return (
    <>
    <header>
      <ProductFilter mysetChoose = {setChoose} />
    </header>
     <main>
    <ProductCatalogue produit = {filtre} onButtonClick = {setSelectedProduct} />
    {productDetail && <ProductDetails  myproduct = {productDetail}/>} 
     </main>
    </>
  )
}
 
export default App
