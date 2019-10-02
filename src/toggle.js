import React, {Component} from 'react';
import Switch from "./Switch/Switch";

class Toggle extends Component {
    state = {
        on: false
    };
    static On = (props) => props.on ? props.children : null;

    static Off = (props) => !props.on ? props.children : null;

    static Button = ({on, toggle, ...props}) => (
        <Switch on={on} onClick={toggle} {...props} />
    );

    toggle = () => {
        this.setState((prevState) => {
            return {
                on: !prevState.on
            }
        })
    };

    render() {
        console.log(this.props.children);
        return  this.props.children.map(child =>
            React.cloneElement(child, {
                on: this.state.on,
                toggle: this.toggle
            })
        );
    }
}

export default Toggle;