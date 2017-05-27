/**
 * Created by Aliaksandr on 27.05.2017.
 */
import React from "react";

class ListErrors extends React.Component {
    render() {
        const errors = this.props.errors;
        if (errors) {
            return (
                <ul className="error-messages">
                    {
                        Object.keys(errors).map(key => {
                            return (
                                <li key={key}>
                                    {key} {errors[key]}
                                </li>
                            );
                        })
                    }
                </ul>
            );
        } else {
            return null;
        }
    }
}

export default ListErrors;
