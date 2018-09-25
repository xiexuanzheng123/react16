import React from 'react';

function CustomerRef(props) {
    //这里必须声明textInput，这样ref回调才可以使用它
    let textInput = null;

    function handleClick() {
        textInput.focus();
    }
    //指向一个DOM元素或者class组件
    return (
        <div>
            <input type="text" ref={(input) => {textInput = input;}} />
            <input type="button" value="focus" onClick={handleClick}/>
        </div>
    );
}
export default CustomerRef;