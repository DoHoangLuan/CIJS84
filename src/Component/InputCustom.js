const InputCustom = ({ type, checked, label, name, value, handleName, dataRadio }) => {
    const styleInput = {
        inputContainer: {
            width: "100%",
            height: 40,
            borderRadius: 5,
            borderColor: "GrayText",


        }
    }
    return type == "text" ? (
        <input
            type={type}
            name={name}
            value={value}
            style={styleInput.inputContainer}
            onChange={handleName}


        />
    ) : (
        <>
            <input
                id={label}
                type={type}
                name={name}
                style={{ width: 15, height: 15 }}
                value={value}
                onChange={handleName}
                dataRadio={dataRadio}
                checked={checked}
            />
            <label htmlFor={label}>{label}</label>
        </>


    )
}
export default InputCustom