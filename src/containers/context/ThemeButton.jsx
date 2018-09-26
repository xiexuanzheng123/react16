import React from 'react';
const ThemeContext = React.createContext('light');
const {Provider, Consumer} = React.createContext();
function Button(props) {
    return <button color={props.theme} style={{backgroundColor: props.theme}}>123</button>
}
function ThemedButton(props) {
    return (
        <Consumer>
            {theme => <button {...props} theme={theme}>1230</button>}
        </Consumer>
    );
}

function Toolbar(props) {
    return (
        <div>
            <ThemedButton />
        </div>
    );
}
class App extends React.Component {
    render() {
        return (
            <Provider value={'dark'}>
                <Toolbar />
            </Provider>
        );
    }
}
export default App;