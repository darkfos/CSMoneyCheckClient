import "../../index.css"

function CustomBtn({text, icon="", style="", onclick=""}) {
    return <button className={style} onClick={onclick}>{text}</button>
}

export default CustomBtn;