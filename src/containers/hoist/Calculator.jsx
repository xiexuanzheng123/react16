import React from 'react';
import BoilingVerdict from './BoilingVerdict';
import TemperatureInput from './TemperatureInput';

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            temperature: ''
        }
    }
    handleChange(e) {
        this.setState({
            temperature: e.target.value
        });
    }

    render() {
        const temperature = this.state.temperature;
        return (
            // <fieldset>
            //     <legend>输入一个摄氏温度</legend>
            //     <input
            //         value={this.state.temperature}
            //         onChange={this.handleChange}
            //     />

            //     <BoilingVerdict 
            //         celsius={parseFloat(temperature)}
            //     />    
            // </fieldset>
            <div>
                <TemperatureInput scale="c" />
                <TemperatureInput scale="f" />
            </div>
        )
    }
}
export default Calculator;