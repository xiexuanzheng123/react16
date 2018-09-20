import React from 'react';

// class Square extends React.Component {
//     render() {
//         const { value, onClick } = this.props;
//         return (
//             <button className="square" onClick={() => onClick()}>
//                 {value}
//             </button>
//         );
//     }
// }
//onClick可以不用箭头函数，直接写onClick就可以
function Square(props) {
    const { value, onClick } = props;
    return (
        <button className="square" onClick={onClick}>
            {value}
        </button>
    );
}
export default Square;