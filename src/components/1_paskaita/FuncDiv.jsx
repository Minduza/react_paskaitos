import FuncButton from "./FuncButton"
import PropTypes from 'prop-types'

const FuncDiv = (props) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <p>{props.paragraph}</p>
            <FuncButton title={props.btnName}/>
        </div>
    )
}

FuncDiv.propTypes = {
    title: PropTypes.string,
    paragraph: PropTypes.string
}

export default FuncDiv