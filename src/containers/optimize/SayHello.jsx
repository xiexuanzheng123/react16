import React from 'react';

class SayHello extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: 'hello'
        };
    }

    // handleClick = () => {
    //     alert(this.state.message);
    // }
    handleClick() {
        alert(this.state.message);
    }

    render() {
        return (
            <button onClick={this.handleClick} >
                Say Hello
            </button>
        )
    }
}

export default SayHello;