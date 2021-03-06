import React, {Component} from "react";
import "./App.css";
import {connect} from "react-redux";
import Header from "./Header";
import Home from "./Home/Index";
import {Route, Switch} from "react-router-dom";
import Login from "./Login";
import agent from "../agent";
import Register from "./Register";
import Settings from "./Settings";


const mapStateToProps = state => ({
    appName: state.common.appName,
    redirectTo: state.common.redirectTo,
    currentUser: state.common.currentUser
});

const mapDispatchToProps = dispatch => ({
    onLoad: (payload,token) =>
        dispatch({type: 'APP_LOAD', payload, token}),
    onRedirect: () =>
        dispatch({type: 'REDIRECT'})
});


class App extends Component {

    componentWillMount() {
        const token = window.localStorage.getItem('jwt');
        if (token) {
            agent.setToken(token);
        }

        this.props.onLoad(token ? agent.Auth.current() : null, token)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.redirectTo) {
            this.props.history.push(nextProps.redirectTo);
            this.props.onRedirect();
        }
    }

    render() {
        return (
            <div>
                <Header appName={this.props.appName} currentUser={this.props.currentUser}/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/register" component={Register}/>
                    <Route exact path="/settings" component={Settings}/>
                </Switch>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
