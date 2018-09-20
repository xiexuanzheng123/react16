import React from 'react';

function ActionLink() {
    function handleClick(e) {
        //e.preventDefault();
        console.log('click');
    }
    return(
        <a href="#" onClick={handleClick}>Click Me !</a>
    );
}
export default ActionLink;
