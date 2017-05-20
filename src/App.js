import React, {Component} from "react";
import "./App.css";
import {connect} from "react-redux";
import Header from "./component/Header";
import Home from "./component/Home/Index";


const mapStateToProps = state => ({
    appName: state.appName
});

class App extends Component {

    render() {
        return (
            <div>
                <Header appName={this.props.appName}/>
                <Home />
            </div>
        );
    }
}

export default connect(mapStateToProps, () => ({}))(App);
