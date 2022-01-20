import './SingleProduct.scss'
import ColorOptions from '../ColorOptions/ColorOptions'

const SingleProduct = ({product}) => {

    const colors = product.chipOptions.filter(op => op.fmyChipType == 'COLOR').flatMap(c => c.optionList)

    return (
        <div className="singleProduct">
            <div className="singleProductContent">
                <div className="singleProductImg">
                    <img src={product.modelList[0].thumbUrl} alt={product.modelList[0].thumbUrlAlt} />
                </div>
                <div className="singleProductCopy">
                    <h2>{product.fmyMarketingName}</h2>
                    <ColorOptions colors={colors} />
                    <p>Starting at {product.modelList[0].priceDisplay}</p>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct;