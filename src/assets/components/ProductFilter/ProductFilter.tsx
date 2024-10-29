import style from './productFilter.module.css'
type filterProps = {
    mysetChoose: (category:string) => void,
}
function ProductFilter ({mysetChoose} : filterProps){
    
    return (
        <nav>
        <h1 className={style.siteTitle}>Tech'tastique</h1>
        <h2 className={style.subTitle}>Les trouvailles qui vous rendent fantastique !</h2>
        <div className={style.buttonStyle}>
            <button className={style.button1} onClick={()=> mysetChoose("")}>Tout afficher</button>
            <button className={style.button2} onClick={() => mysetChoose("objet connecté")}>Objet connecté </button>
            <button className={style.button3} onClick={() => mysetChoose("vetement connecté")}>Vêtement connecté</button>
            <button className={style.button4} onClick={() => mysetChoose("Capteur")}>Capteur</button>
        </div>

        </nav>
    )
}

export default ProductFilter 
