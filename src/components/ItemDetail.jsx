import ItemCount from "../components/ItemCount"



const ItemDetail =({item}) => {

    const onAdd = (qty) => {
        alert("Usted a comprado "+ qty + "productos")
    } 

    return(
        <>
            <div className="productoDesc">
                <div className="imgDescripcion"><img src={item.img} alt="" /></div>
                <div className="textoDescripcion">
                    <h2>{item.name}</h2>
                    <p>{item.description}</p>
                    <p className=""> Stock en la web: {item.stock}</p>
                    <p className="titulo">$ {item.price}</p>
                    <ItemCount stock={item.stock} initial = {1} onAdd = {onAdd}></ItemCount>
                </div>
            </div>

        </>
    )
}

export default ItemDetail