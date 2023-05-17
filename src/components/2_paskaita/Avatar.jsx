import './Style.css'
import PropTypes from 'prop-types'

const Avatar =(props) =>{

    const nameArr = props.name.split(" ")
    const nameLetter = nameArr[0].charAt(0).toUpperCase()
    const surnameLetter = nameArr[1].charAt(0).toUpperCase()

    return (
        <div className="avatarCircle margin-10" style={{backgroundColor: props.color}}>
            <span>{nameLetter} {surnameLetter}</span>
        </div>
    )
}

Avatar.propTypes = {
    name: PropTypes.string
}



export default Avatar