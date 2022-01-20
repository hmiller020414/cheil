import './SingleProduct.scss'
import ColorOptions from '../ColorOptions/ColorOptions'

const SingleProduct = ({product}) => {

    const firstModel = product.modelList[0];

    const {thumbUrl, thumbUrlAlt, priceDisplay} = firstModel

    const colors = product.chipOptions.filter(op => op.fmyChipType == 'COLOR').flatMap(c => c.optionList)

    return (
        <div className="singleProduct">
            <div className="singleProductContent">
                <div className="singleProductImg">
                    <img src={thumbUrl} alt={thumbUrlAlt} />
                </div>
                <div className="singleProductCopy">
                    <h2>{product.fmyMarketingName}</h2>
                    <ColorOptions colors={colors} />
                    <p>Starting at {priceDisplay}</p>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct;