/**
 * Created by Aliaksandr on 20.05.2017.
 */
import * as React from "react";
class Header extends React.Component {

    render() {
        return (
            <nav className="navbar navbar-light">
                <div className="container">

                    <a className="navbar-brand">
                        {this.props.appName.toLowerCase()}
                    </a>
                </div>
            </nav>
        )
    }
}

export default Header;