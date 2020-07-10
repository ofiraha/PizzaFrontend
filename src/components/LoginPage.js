import React from 'react';
import {connect} from 'react-redux';
import './input.css'
import {Button, TextField, Grid} from '@material-ui/core'
import loginUser from "../actions/loginUser";
import passwordChanged from "../actions/passwordChanged";
import usernameChanged from "../actions/usernameChanged";

class LoginPage extends React.Component {

    render() {
        return (
            <div id={'loginPage'}>
                <Grid
                    spacing={24}
                    direction={'column'}
                    alignContent={'center'}
                    alignItems={'center'}
                >
                    <Grid item lg={6}>
                        <TextField autoFocus={true} helperText={'User Name'}
                                   label={'User Name'} margin={'dense'}
                                   placeholder={'Enter user name...'} required={true}
                                   type="text" name="username" value={this.props.username}
                                   onChange={this.props.handleUsernameChange}/>
                    </Grid>

                    <Grid item lg={6}>
                        <TextField helperText={'Password'}
                                   label={'Password'} margin={'dense'}
                                   placeholder={'Enter password...'} required={true}
                                   type="password" name="password" value={this.props.password}
                                   onChange={this.props.handlePasswordChange}/>
                    </Grid>
                    <Grid item lg={6}>
                        <Button style={{marginTop: '35px'}} variant={'raised'}
                                size={"large"} color={'secondary'}
                                onClick={event => this.handleLogin(event)}>
                            Login
                        </Button>
                    </Grid>
                </Grid>
            </div>
        );
    }

    handleLogin(event){
        this.userAuthentication().then(res => {
            if(res.isLoggedIn === "true"){
                this.props.loginTheUser(res.token);
            }
            else{
                alert('Incorrect username or password, please try again')
            }
        })
            .catch(err => console.log(err));
        event.preventDefault();
    }

    userAuthentication = async () => {
        const response = await fetch('http://localhost:8082/auth', {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "username": this.props.username,
                "password": this.props.password
            })
        });
        const body = await response.json();

        if (response.status !== 200) {
            throw Error(body.message)
        }
        return body;
    }
}

function mapStateToProps(state) {
    return {
        username: state.username,
        password: state.password,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        handleUsernameChange: (event) => {
            dispatch(usernameChanged(event.target.value));
        },
        handlePasswordChange: (event) => {
            dispatch(passwordChanged(event.target.value));
        },
        loginTheUser: (token) => {
            dispatch(loginUser(token))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)