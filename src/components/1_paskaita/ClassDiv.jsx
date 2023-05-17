import ClassButton from "./ClassButton";
import React from "react";
import PropTypes from "prop-types"

class ClassDiv extends React.Component {
    render(){
        return (
            <div>
                <h3>{this.props.title}</h3>
                <p>{this.props.paragraph}</p>
                <ClassButton title={this.props.btnName} />
            </div>
        )
    }
}

ClassDiv.propTypes = {
    title: PropTypes.string,
    paragraph: PropTypes.string,
    btnName: PropTypes.string
}



export default ClassDiv