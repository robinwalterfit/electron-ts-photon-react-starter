
/**
 *
 */

import * as React from 'react'
import * as ReactDOM from 'react-dom'

class App extends React.Component {

    render() {

        return (

            <div className="window-content">

                <div className="padded-more">

                    <h2>Welcome to React with Typescript!</h2>

                </div>

            </div>

        )

    }

}

ReactDOM.render( <App />, document.getElementById( 'root' ) )
