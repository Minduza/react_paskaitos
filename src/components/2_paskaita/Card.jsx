import PropTypes from "prop-types"
import "./Style.css"

const Card = (props) => {
    return (
        <div className="card margin-10">
            <img src={props.imageUrl} alt={props.alt}/>
            <div className="textBox">
                <h1>{props.title}</h1>
                <p>{props.subtitle}</p>
            </div>

        </div>
    )
}

Card.propTypes = {
    imageUrl: PropTypes.string,
    alt: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
}

export default Card