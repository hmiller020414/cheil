const ColorOptions = ({colors}) => {

    if (!colors) {return <h2>It's invisible</h2>}
    const colorCircles = colors.length ? colors.map((c, idx) => <div key={idx}>{c.optionCode}</div>) : null;

    return (
        <div>
            {colorCircles}
        </div>
    )
}

export default ColorOptions;