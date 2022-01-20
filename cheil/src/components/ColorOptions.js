const ColorOptions = ({colors}) => {

    if (!colors) {return <h2>It's invisible</h2>}
    const colorCircles = colors.length 
        ? colors.map((c, idx) => 
            <div 
                key={idx}
                style={{
                    backgroundColor: `${c.optionCode}`,
                    width: '20px',
                    height: '20px',
                    borderRadius: '100%',
                }}
                className={`colorCircle ${c.optionName}`}
            />) 
        : null;

    return (
        <div>
            {colorCircles}
        </div>
    )
}

export default ColorOptions;