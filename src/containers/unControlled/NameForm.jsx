import React from 'react';

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        //使用ref从DOM获取表单值this.input
        //不用state也不用props
        alert('A name was submitted: ' + this.input.value);
        event.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name: 
                    <input type="text" defaultValue="bpob" ref={(input) => this.input = input} />
                </label>
                <input type="submit" value="Submit"/>
            </form>
        );
    }
}
export default NameForm;