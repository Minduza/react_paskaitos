import PropTypes from 'prop-types'

const FuncButton = (props) =>{

    return (
        <div>
            <button>{props.title}</button>
        </div>
    )
}

FuncButton.propTypes = {
    title: PropTypes.string
}

export default FuncButton