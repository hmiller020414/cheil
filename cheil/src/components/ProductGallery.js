import { useEffect, useState } from 'react'
import SingleProduct from './SingleProduct'

import ProductData from '../services/ProductData';

const ProductGallery = () => {

    const [products, setProducts] = useState()

    useEffect( async () => {
        const results = await ProductData.getProducts()
        setProducts(results)
    }, []);

    if (!products) {return <h2>No products</h2>}
    const prodGal = products.length ? products.map( p => <SingleProduct key={p.familyId} product={p} />) : null;

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