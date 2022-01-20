import { useEffect, useState } from 'react'
import SingleProduct from '../SingleProduct/SingleProduct'

import ProductData from '../../services/ProductData';

const ProductGallery = () => {

    const [products, setProducts] = useState()

    useEffect( async () => {
        const results = await ProductData.getProducts()
        setProducts(results)
    }, []);

    if (!products) {return <h2>No products</h2>}

    const filteredProducts = products.filter(product => product.modelList.every(model => model.pviSubtypeName == 'Smartphone'))
    const prodGal = filteredProducts.length ? filteredProducts.map( p => <SingleProduct key={p.familyId} product={p} />) : null;

    return (
        <div>
            <h2>This is where my product gallery will be</h2>
            <div>
                {prodGal}
            </div>
        </div>
    )
}

export default ProductGallery;