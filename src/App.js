import React, {Component} from "react";
import "./App.css";
import {connect} from "react-redux";
import Header from "./component/Header";
import Home from "./component/Home/Home";
import {Articles} from "./agent";


const mapStateToProps = state => ({
    appName: state.appName
});

class App extends Component {

    componentWillMount() {
        Articles.all(1).then(jsn => console.log(jsn))
    }

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
