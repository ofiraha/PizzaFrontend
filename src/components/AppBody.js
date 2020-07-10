import React from 'react'
import LoginPage from './LoginPage';
import Order from './Order';
import store from '../store'
import connect from "react-redux/es/connect/connect";

//check if user authenticated before going to order page
function AppBody(props){
    if(props.isLoggedIn)
        return <Order store={store}/>;
    else
        return <LoginPage store={store}/>;
}

const mapStateToProps = (state) => {
    return{
        isLoggedIn: state.isLoggedIn
    }
}

export default connect(mapStateToProps)(AppBody)