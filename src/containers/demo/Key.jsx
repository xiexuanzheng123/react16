import React from 'react';

function ListItem(props) {
    const value = props.value;
    return (
        <li>
            {value}
        </li>
    );
}

function NumberList(props) {
    debugger;
    const numbers = props.numbers;
    const ListItems = numbers.map((number) => {
        return <ListItem value={number} key={number.toString()} />
    });
    return (
        <ul>
            {ListItems}
        </ul>
    );
}
export default NumberList;