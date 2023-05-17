import PropTypes from "prop-types"

const Greetings = (props) => {
    return (
        <div>
            <h1>Hello {props.name}! How are you?</h1>
        </div>
    )
} 

Greetings.propTypes = {
    name: PropTypes.string
}

Greetings.defaultProps = {
    name: "User"
}

export default Greetings