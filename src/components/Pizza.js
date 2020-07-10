import React from 'react'
import connect from "react-redux/es/connect/connect";
import chooseType from "../actions/chooseType";
import pizzaTypes from "../helpers/pizzaTypes";
import {Button} from "@material-ui/core";
import './input.css'

class Pizza extends React.Component {

    constructor() {
        super();
        this.state = {
            types: pizzaTypes,
            pizzaType: pizzaTypes[0]
        }
    }

    render() {
        return (
            <section>
                <h2 id={'secondaryTitle'}>Please choose your desired pizza type</h2>
                <div className='types'>
                    {pizzaTypes.map(type => {
                        return (
                            <Button id={'orderButtonId'}
                                variant={'raised'} size={'large'} color={'primary'}
                                onClick={() => this.props.choosePizzaType(type)}
                                    key={type.toString()}
                            >
                                <p>{type}</p>
                            </Button>
                        )
                    })}
                </div>
                <div>
                    <p>Chosen Pizza Type: {this.props.pizzaType}</p>
                </div>
            </section>
        );
    }
}

    function mapDispatchToProps(dispatch) {
        return {
            choosePizzaType: type => {
                dispatch(chooseType(type))
            }
        }
    }


    function mapStateToProps(state) {
        return {
            pizzaType: state.pizzaType
        }
    }


export default connect(mapStateToProps, mapDispatchToProps)(Pizza)
