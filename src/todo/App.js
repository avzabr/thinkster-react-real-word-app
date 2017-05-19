/**
 * Created by Aliaksandr on 19.05.2017.
 */
import React from "react";
import store from "./store";

class App extends React.Component {

    constructor() {
        super();
        this.state = {};
    }

    componentWillMount() {
        store.subscribe(() => this.setState(store.getState()));
    }

    onClick = () => {
        store.dispatch({type: 'TOGGLE'});
    };

    render() {
        return (
            <div>
                <h1>To-dos</h1>
                <div>
                    Learn Redux&nbsp;
                    <input type="checkbox"
                           checked={!!this.state.checked}
                           onClick={this.onClick}
                    />
                </div>
                {
                    this.state.checked ? (<h2> Done!</h2>) : null
                }
            </div>
        )
    }

}

export default App;
