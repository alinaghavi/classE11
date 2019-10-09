import React, {Component} from 'react';
import Switch from "./Switch/Switch";

const ToggleContext = React.createContext();

class Toggle extends Component {
    state = {
        on: false
    };

    static OnLabel = (props) => {
        return <ToggleContext.Consumer>
            {(value) => (value.on ? props.children : null)}
        </ToggleContext.Consumer>
    };

    static OffLabel = (props) => {
        return <ToggleContext.Consumer>
            {(value) => (!value.on ? props.children : null)}
        </ToggleContext.Consumer>
    };
    // static OffLabel = (props) => !props.on ? props.children : null;

    // static Button = ({on, toggle, ...props}) => (
    //     <Switch on={on} onClick={toggle} {...props} />
    // );

    static Button = (props) => {
        return <ToggleContext.Consumer>
            {(value) => <Switch  on={value.on} onClick={value.toggle} {...props}/>}
        </ToggleContext.Consumer>
    };

    toggle = () => {
        this.setState((prevState) => {
            return {
                on: !prevState.on
            }
        })
    };

    render() {
        console.log(this.props.children);
        return <ToggleContext.Provider value={{on: this.state.on, toggle: this.toggle}}>
            {this.props.children}
        </ToggleContext.Provider>
        // return  this.props.children.map(child =>
        //     React.cloneElement(child, {
        //         on: this.state.on,
        //         toggle: this.toggle
        //     })
        // );
    }
}

export default Toggle;