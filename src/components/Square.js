import React from 'react';

class Square extends React.Component {
    render() {
        const { value } = this.props;
        return (
            <button className="square">
                {`这是第${value}个`}
            </button>
        );
    }
}
export default Square;