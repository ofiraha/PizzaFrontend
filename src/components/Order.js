import React from 'react'
import Pizza from './Pizza'
import Location from "./Location";
import {Button, Grid} from "@material-ui/core";
import connect from "react-redux/es/connect/connect";
import store from "../store";
import orderProgressUpdated from "../actions/orderProgressUpdated";
import ProgressBar from "./ProgressBar";


class Order extends React.Component {

    constructor(){
        super();
        this.state = {payment: 'cash'};
        this.handleOptionChange = this.handleOptionChange.bind(this)
    }

    handleOptionChange (changeEvent) {
        this.setState({
            payment: changeEvent.target.value
        });
        console.log("pay with: " + this.state.payment )
    }

    render() {
        return (
            <div>
                <h1 id={'primaryTitle'}>Please choose your desired type of pizza:</h1>
                <Pizza store={store} />
                <br></br>
                <Location store={store}/>
                <br></br>
                <Grid
                    direction={'column'}
                    alignContent={'center'}
                    alignItems={'center'}
                >
                    <div className="radio">
                                    <label>
                                        <input type="radio" value="cash"
                                               checked={this.state.payment === 'cash'}
                                               onChange={this.handleOptionChange} />                                        Cash
                                    </label>
                                </div>
                    <div className="radio">
                                    <label>
                                        <input type="radio" value="credit"
                                               checked={this.state.payment === 'credit'}
                                               onChange={this.handleOptionChange} />
                                        Credit
                                    </label>
                                </div>
                    </Grid>
                <br></br>
                <Button variant={'raised'} size={"large"} onClick={() => this.sendOrder()}>
                    ORDER
                </Button>
                <ProgressBar store={store}/>
            </div>
        );
    }

    sendOrder(){
        if(this.props.orderStatus === 0) {
            this.startOrder();
            let intervalId = setInterval(this.checkOrderProgress.bind(this), 1000);
            this.setState({ intervalId: intervalId })
        }
        else {
            alert("Order has already been sent!")
        }
    }

    startOrder = async () => {
        const response = await fetch('http://localhost:8082/startOrder', {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "username" : this.props.username,
                "isLoggedIn" : this.props.isLoggedIn,
                "token": this.props.token,
                "orderStatus" : this.props.orderStatus,
                "pizzaType" : this.props.pizzaType,
                "location" : this.props.location
            })
        });
        const body = await response.json();

        if (response.status !== 200) {
            throw Error(body.message)
        }
        //return body;
    };


    getProgressStatusFromServer = async () => {
        const response = await fetch('http://localhost:8082/checkProgress', {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "username" : this.props.username,
                "isLoggedIn" : this.props.isLoggedIn,
                "token": this.props.token,
                "orderStatus" : this.props.orderStatus
            })
        });
        const body = await response.json();

        if (response.status !== 200) {
            throw Error(body.message)
        }
        return body;
    };

    checkOrderProgress(){
        if(this.props.orderStatus > 5)
            clearInterval(this.state.intervalId);
        else if (this.props.isLoggedIn === true) {
            this.getProgressStatusFromServer().then(res => {
                console.log("res.orderStatus:" + res.orderStatus + ", this.props.orderStatus: " + this.props.orderStatus);
                if (res.orderStatus !== this.props.orderStatus) {
                    // console.log('updating to the new status');
                    this.props.updateOrderProgress(res.orderStatus);
                }
            })
        }
    }
}


function mapStateToProps(state) {
    return {
        username: state.username,
        isLoggedIn : state.isLoggedIn,
        token: state.token,
        orderStatus: state.orderStatus,
        pizzaType: state.pizzaType,
        location: state.location
    }
}

function mapDispatchToProps(dispatch) {
    return {
        updateOrderProgress: (newStatus) => {
             dispatch(orderProgressUpdated(newStatus));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Order)