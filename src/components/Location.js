import React from 'react'
import connect from "react-redux/es/connect/connect";
import chooseLocation from "../actions/chooseLocation";
import locations from "../helpers/locations"
import {Button} from "@material-ui/core";

class Location extends React.Component{

    render() {
        return(
            <section>
                <h2 id={'secondaryTitle'}>Please choose you're location</h2>
                <div className='locations'>
                    {locations.map(location => {
                        return (
                            <Button id={'orderButtonId'}
                                variant={'raised'} size={'large'} color={'primary'}
                                onClick={() => this.props.chooseOrderLocation(location)}
                                key={location.toString()}
                            >
                                <p>{location}</p>
                            </Button>
                        )
                    })}
                </div>
                <div>
                    <p>Chosen location to order: {this.props.location}</p>
                </div>
            </section>
        );
    } //render

}

function mapDispatchToProps (dispatch) {
    return {
        chooseOrderLocation: location => {
            dispatch(chooseLocation(location))
        }
    }
}

function mapStateToProps(state) {
    return {
        location: state.location
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Location)
