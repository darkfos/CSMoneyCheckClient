import "../../index.css"

function CustomBtn({text, icon="", style=""}) {
    return <button className={style}>{text}</button>
}

export default CustomBtn;