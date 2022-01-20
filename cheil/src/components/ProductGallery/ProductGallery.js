import { useEffect, useState } from 'react'
import './ProductGallery.scss'
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
    const prodGal = filteredProducts.length 
        ? filteredProducts.map( p => 
            <SingleProduct 
                key={p.familyId}
                product={p}
            />) 
        : null;

    return (
        <div className="productGallery">
            <div className="productGalleryInner">
                {prodGal}
            </div>
        </div>
    )
}

export default ProductGallery;