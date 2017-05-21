import React, {Component} from "react";
import "./App.css";
import {connect} from "react-redux";
import Header from "./Header";
import PropTypes from 'prop-types';
import Home from "./Home/Index";
import { Route} from "react-router-dom";
import Login from "./Login";


const mapStateToProps = state => ({
    appName: state.appName
});

class App extends Component {

    render() {
        return (
            <div>
                <Header appName={this.props.appName}/>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
            </div>
        );
    }
}

App.contextTypes = {
    router: PropTypes.object.isRequired
};

export default connect(mapStateToProps, () => ({}))(App);
