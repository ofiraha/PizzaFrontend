import React from 'react'
import connect from "react-redux/es/connect/connect";
import './progressBar.css'

class ProgressBar extends React.Component {

    render() {
        switch (this.props.orderStatus) {
            case 0:
                return (
                    <div className = "progress" >
                        <div className = "circle" >
                            <span className = "label" > 1 </span>
                            <span className="title">Processing</span>
                        </div>
                        <span className="bar done"></span>
                        <div className = "circle" >
                            <span className = "label" > 2 </span>
                            <span className="title">Preparing</span>
                        </div>
                        <span className="bar half"></span>
                        <div className = "circle" >
                            <span className = "label" > 3 </span>
                            <span className="title">Baking</span>
                        </div>
                        <span className="bar"></span>
                        <div className = "circle" >
                            <span className = "label" > 4 </span>
                            <span className="title">Packaging</span>
                        </div>
                        <span className="bar"></span>
                        <div className = "circle" >
                            <span className = "label" > 5 </span>
                            <span className="title">Delivering</span>
                        </div>
                    </div>
                );
            case 1:
                return (
                    <div className = "progress" >
                        <div className = "circle active" >
                            <span className = "label" > 1 </span>
                            <span className="title">Processing</span>
                        </div>
                        <span className="bar done"></span>
                        <div className = "circle" >
                            <span className = "label" > 2 </span>
                            <span className="title">Preparing</span>
                        </div>
                        <span className="bar half"></span>
                        <div className = "circle" >
                            <span className = "label" > 3 </span>
                            <span className="title">Baking</span>
                        </div>
                        <span className="bar"></span>
                        <div className = "circle" >
                            <span className = "label" > 4 </span>
                            <span className="title">Packaging</span>
                        </div>
                        <span className="bar"></span>
                        <div className = "circle" >
                            <span className = "label" > 5 </span>
                            <span className="title">Delivering</span>
                        </div>
                    </div>
                );
            case 2:
                return (
                    <div className = "progress" >
                        <div className = "circle done" >
                            <span className = "label" > 1 </span>
                            <span className="title">Processing</span>
                        </div>
                        <span className="bar done"></span>
                        <div className = "circle active" >
                            <span className = "label" > 2 </span>
                            <span className="title">Preparing</span>
                        </div>
                        <span className="bar half"></span>
                        <div className = "circle" >
                            <span className = "label" > 3 </span>
                            <span className="title">Baking</span>
                        </div>
                        <span className="bar"></span>
                        <div className = "circle" >
                            <span className = "label" > 4 </span>
                            <span className="title">Packaging</span>
                        </div>
                        <span className="bar"></span>
                        <div className = "circle" >
                            <span className = "label" > 5 </span>
                            <span className="title">Delivering</span>
                        </div>
                    </div>
                );
            case 3:
                return (
                    <div className = "progress" >
                        <div className = "circle done" >
                            <span className = "label" > 1 </span>
                            <span className="title">Processing</span>
                        </div>
                        <span className="bar done"></span>
                        <div className = "circle done" >
                            <span className = "label" > 2 </span>
                            <span className="title">Preparing</span>
                        </div>
                        <span className="bar half"></span>
                        <div className = "circle active" >
                        <span className = "label" > 3 </span>
                            <span className="title">Baking</span>
                        </div>
                        <span className="bar"></span>
                        <div className = "circle" >
                        <span className = "label" > 4 </span>
                            <span className="title">Packaging</span>
                        </div>
                        <span className="bar"></span>
                        <div className = "circle" >
                        <span className = "label" > 5 </span>
                            <span className="title">Delivering</span>
                        </div>
                    </div>
                );
            case 4:
                return (
                    <div className = "progress" >
                        <div className = "circle done" >
                            <span className = "label" > 1 </span>
                            <span className="title">Processing</span>
                        </div>
                        <span className="bar done"></span>
                        <div className = "circle done" >
                            <span className = "label" > 2 </span>
                            <span className="title">Preparing</span>
                        </div>
                        <span className="bar half"></span>
                        <div className = "circle done" >
                            <span className = "label" > 3 </span>
                            <span className="title">Baking</span>
                        </div>
                        <span className="bar"></span>
                        <div className = "circle active" >
                            <span className = "label" > 4 </span>
                            <span className="title">Packaging</span>
                        </div>
                        <span className="bar"></span>
                        <div className = "circle" >
                            <span className = "label" > 5 </span>
                            <span className="title">Delivering</span>
                        </div>
                    </div>
                );
            case 5:
                return (
                    <div className = "progress" >
                        <div className = "circle done" >
                            <span className = "label" > 1 </span>
                            <span className="title">Processing</span>
                        </div>
                        <span className="bar done"></span>
                        <div className = "circle done" >
                            <span className = "label" > 2 </span>
                            <span className="title">Preparing</span>
                        </div>
                        <span className="bar half"></span>
                        <div className = "circle done" >
                            <span className = "label" > 3 </span>
                            <span className="title">Baking</span>
                        </div>
                        <span className="bar"></span>
                        <div className = "circle done" >
                            <span className = "label" > 4 </span>
                            <span className="title">Packaging</span>
                        </div>
                        <span className="bar"></span>
                        <div className = "circle active" >
                            <span className = "label" > 5 </span>
                            <span className="title">Delivering</span>
                        </div>
                    </div>
                );
            default:
                return (
                    <div className = "progress" >
                        <div className = "circle done" >
                            <span className = "label" > 1 </span>
                            <span className="title">Processing</span>
                        </div>
                        <span className="bar done"></span>
                        <div className = "circle done" >
                            <span className = "label" > 2 </span>
                            <span className="title">Preparing</span>
                        </div>
                        <span className="bar half"></span>
                        <div className = "circle done" >
                            <span className = "label" > 3 </span>
                            <span className="title">Baking</span>
                        </div>
                        <span className="bar"></span>
                        <div className = "circle done" >
                            <span className = "label" > 4 </span>
                            <span className="title">Packaging</span>
                        </div>
                        <span className="bar"></span>
                        <div className = "circle done" >
                            <span className = "label" > 5 </span>
                            <span className="title">Delivering</span>
                        </div>
                    </div>
                );
        }

    }
}

function mapDispatchToProps(dispatch) {
    return {
        // choosePizzaType: type => {
        //     dispatch(chooseType(type))
        }
}


function mapStateToProps(state) {
    return {
        orderStatus: state.orderStatus
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProgressBar)
