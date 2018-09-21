import React from 'react';
import FancyBorder from './FancyBorder';

function WelcomeDialog() {
    const props = {color: 'blue', font: '15px'};
    const messages = [1];
    return (
        <FancyBorder {...props}>
            <h1 className="Dialog-title">Welcome</h1>
            <p className="Dialog-message">
                Thank you for visiting our spacecraft!
            </p>
            {
                messages.length > 0 && <div>123</div>
            }
            <div>
                This is {false.valueOf()};
            </div>
        </FancyBorder>
    );
}
export default WelcomeDialog;