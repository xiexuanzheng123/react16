import React from 'react';

class CustomTextInput extends React.Component {
    constructor(props) {
        super(props);
        //使用React.createRef()创建refs，然后传给实例的一个属性，存储textInput DOM元素
        this.textInput = React.createRef();
        this.focusTextInput = this.focusTextInput.bind(this);
    }
    focusTextInput() {
        this.textInput.current.focus();
        console.log(this.textInput)
        //可以再组件中任意位置使用这个属性，可以使用this.textInput.current属性对节点的应用进行访问
        //ref的值取决于节点的类型：当ref属性被 用于一个普通的HTML元素时，
        //React.createRef()将接收底层DOM作为它的current属性以创建ref
    }
    render() {
        // 告诉 React 我们想把 <input> ref 关联到构造器里创建的 `textInput` 上
        return (
            <div>
                <input type="text" ref={this.textInput} />
                <input type="button" value="focus the text input" onClick={this.focusTextInput} />
            </div>
        );
    }
}
class AutoFocusTextInput extends React.Component {
    constructor(props) {
        super(props);
        //当ref属性被用于一个自定义类组件时，ref对象将接收该组件已挂载的实例作为current
        this.textInput = React.createRef();
    }
    componentDidMount() {
        this.textInput.current.focusTextInput();
    }
    render() {
        return (
            <CustomTextInput ref={this.textInput} />
        );
    }
}
export {
    CustomTextInput,
    AutoFocusTextInput
}