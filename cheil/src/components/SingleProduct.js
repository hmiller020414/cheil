import ColorOptions from './ColorOptions'

const SingleProduct = ({product}) => {
    return (
        <div>
            <img src={product.modelList[0].thumbUrl} alt={product.modelList[0].thumbUrlAlt} />
            <p>{product.fmyMarketingName}</p>
            <ColorOptions colors={product.chipOptions[0]} />
            <p>Starting at {product.modelList[0].priceDisplay}</p>
        </div>
    )
}

export default SingleProduct;