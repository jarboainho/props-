import React from 'react'
import PropTypes from 'prop-types';


const Profil = (props) => {
 return (
    <div>
        FullName: {props.FullName} <br/>
        Bio:      {props.Bio} <br/>
        Profession : {props.Profession} <br/>
        {props.children}
        <button onClick={props.handleName}>click</button>

    </div>
)
}

export default Profil

Profil.defaultProps = {
    FullName: "samehe",
    Bio: "very good",
    Profession: "engineer"

}

Profil.propTypes = {
    FullName: PropTypes.string,
    Bio: PropTypes.string,
    Profession: PropTypes.string
}

