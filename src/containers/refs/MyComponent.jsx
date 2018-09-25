import React from 'react';

class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        //React.createRef创建refs，构建组件时，refs通常被赋值给实例的一个属性
        this.myRef = React.createRef();
    }
    render() {
        return(
            <div ref={this.myRef}>123</div>
        );
    }
}
export default MyComponent;