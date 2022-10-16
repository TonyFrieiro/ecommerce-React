
import Item from "./Item"

const ItemList =({items}) =>{
    // const titulo = ()=>{
    //     let t = items.map(item =>item.categoryId)
    //     const ti = new Set(t);
    //     return ti
    // }
    
    // const titulo2 = ()=>{
    //     let titu
    //     if (titulo == 1){
    //         titu = "Tote bags"
    //     }

    //     return (titu)
    // }

    
    return(
        <>  
            {/* <div><h1>Productos{titulo2()}</h1></div> */}
            <div className="tituloProductos"><h1>Productos</h1></div>
            {
                items.map(item => (
                    <Item 
                        key = {item.id}
                        id = {item.id}
                        name = {item.name}
                        price = {item.price}
                        stock = {item.stock}
                        img = {item.img}>
                    </Item>
                ))
            }
        </>
    )
}

export default ItemList;