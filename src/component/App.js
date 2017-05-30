import React, {Component} from "react";
import "./App.css";
import {connect} from "react-redux";
import Header from "./Header";
import Home from "./Home/Index";
import {Route, Switch} from "react-router-dom";
import Login from "./Login";


const mapStateToProps = state => ({
    appName: state.common.appName,
    redirectTo: state.common.redirectTo
});

const mapDispatchToProps = dispatch => ({
    onRedirect: () =>
        dispatch({type: 'REDIRECT'})
});


class App extends Component {

    componentWillReceiveProps(nextProps) {
        if (nextProps.redirectTo) {
            this.context.router.replace(nextProps.redirectTo);
            this.props.onRedirect();
        }
    }

    render() {
        return (
            <div>
                <Header appName={this.props.appName}/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/login" component={Login}/>
                </Switch>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
