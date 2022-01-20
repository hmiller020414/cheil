import './ColorOptions.scss'

const ColorOptions = ({colors}) => {

    if (!colors) {return null}
    const colorCircles = colors.length 
        ? colors.map((c, idx) => 
            <div 
                key={idx}
                style={{ backgroundColor: `${c.optionCode}` }}
                className={`colorCircle ${c.optionName}`}
            />) 
        : null;

    return (
        <div className="colorOptions">
            {colorCircles}
        </div>
    )
}

export default ColorOptions;