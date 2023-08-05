import { getShoppingCart } from "../utilities/fakedb";

const loadCardData = async () => {
    const loadProduct = await fetch("products.json")

    const proiducts = await loadProduct.json()
    //    async
    const saveCart = []
    const storedCart = getShoppingCart()
    for (const id in storedCart) {
        const addProduct = proiducts.find(product => product.id === id)
        if (addProduct) {
            let quantity = storedCart[id];
            addProduct.quantity = quantity;
            saveCart.push(addProduct)
        }
    }
    console.log(storedCart)

    return saveCart;


}

export default loadCardData