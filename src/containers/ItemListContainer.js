import ItemCount from "../components/ItemCount"
function ItemListContainer(props) {
    return (
        <>
            <h1>{props.greeting}</h1>
            <ItemCount 
                stock={5}
                initial = {0}
                
            />
        </>
    )


}

export default ItemListContainer