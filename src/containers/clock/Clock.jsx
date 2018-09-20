import React from 'react';

// function Clock(props) {
//     return (
//         <div>
//             <h1>Hello world!</h1>
//             <h2>It is { props.date.toLocaleTimeString() }.</h2>
//         </div>
//     );
// }
class Clock extends React.Component {
    constructor() {//render时调用构造函数
        super();
        this.state = {
            date: new Date()
        }
    }
    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    tick() {
        this.setState({
            date: new Date()
        });
    }
    render() {
        return (
            <div>
                <h1>Hello world!</h1>
                <h2>It is { this.state.date.toLocaleTimeString() }.</h2>
            </div>
        );
    }
}
export default Clock;