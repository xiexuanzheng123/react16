import React from 'react';

class Toggle extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isToggleOn: true
        };
        //this bind is necessary这里使用bind或者在回调中使用箭头函数
        //this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return (
            <button onClick={() => this.handleClick()}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }
}
export default Toggle;