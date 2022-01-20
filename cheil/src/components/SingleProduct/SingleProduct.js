import ColorOptions from '../ColorOptions/ColorOptions'

const SingleProduct = ({product}) => {

    const colors = product.chipOptions.filter(op => op.fmyChipType == 'COLOR').flatMap(c => c.optionList)

    return (
        <div>
            <img src={product.modelList[0].thumbUrl} alt={product.modelList[0].thumbUrlAlt} />
            <p>{product.fmyMarketingName}</p>
            <ColorOptions colors={colors} />
            <p>Starting at {product.modelList[0].priceDisplay}</p>
        </div>
    )
}

export default SingleProduct;