import ClassButton from "./ClassButton";
import React from "react";


class ClassDiv extends React.Component {
    render(){
        return (
            <div>
                <h3>{this.props.title}</h3>
                <p>{this.props.paragraph}</p>
                <ClassButton title="Join" />
            </div>
        )
    }
}

export default ClassDiv