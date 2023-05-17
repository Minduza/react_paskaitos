import FuncButton from "./FuncButton"

const FuncDiv = (props) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <p>{props.paragraph}</p>
            <FuncButton title={props.btnName}/>
        </div>
    )
}

export default FuncDiv