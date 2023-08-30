import { getShoppingCart } from "../utilities/fakedb";

const loadCardData = async () => {
    const storedCart = getShoppingCart()
    const loadProduct = await fetch(`http://localhost:4000/products?page=0&limit=1000`)

    const proiducts = await loadProduct.json()
    //    async
    const saveCart = []

    for (const id in storedCart) {
        const addProduct = proiducts.find(product => product._id === id)
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