import React from 'react'
import ReactDOM from 'react-dom'

import Father from './components/Father'

const element = <h1>React</h1>

ReactDOM.render(element, document.getElementById('root'))
ReactDOM.render(
<div>
    <Father name="Peter" surname="Brooks">
        {/*How can I get my children names by here?*/}
    </Father>

    </div>, document.getElementById('root'))
//Only one will be rendered