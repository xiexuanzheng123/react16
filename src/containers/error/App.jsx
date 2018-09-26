import React from 'react';
import ErrorBoundary from './ErrorBoundary';

class App extends React.Component {
    render() {
        return (
            <ErrorBoundary>
                <table>
                    <td>{123 * undefined }</td>
                </table>
            </ErrorBoundary>
            // <table>
            //     <td>{123 * undefined }</td>
            // </table>
        );
    }
}
export default App;