import React from 'react'
import './pagetwo.css'
import {connect} from 'react-redux'


const PageTwo = props => {
    let {id}= props.match.params 
    return (
        <div className="page" id="page-two-wrapper">
        <h1>Match This: {id}</h1>
        <p>Your Information: </p>
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        <p>Email: {props.email}</p>
        <p>Phone Number: {props.phoneNumber}</p>
        <button>Confirm</button>
        {console.log(props)}
        </div>
    )
}
function mapStateToProps(state){
    return {
        name: state.name,
        age: state.age,
        email: state.email,
        phoneNumber: state.phoneNumber
    }
}

export default connect(null, mapStateToProps)(PageTwo)