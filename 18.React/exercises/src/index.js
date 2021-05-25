import React from 'react'
import ReactDOM from 'react-dom'

import Father from './components/Father'
import Son from './components/Son'

const element = <h1>React</h1>

ReactDOM.render(element, document.getElementById('root'))
ReactDOM.render(
<div>
    <Father name="Peter" surname="Brooks">
        <Son name="Charlie" />
        <Son name="Skie" />
        <Son name="Mike" />
    </Father>

    </div>, document.getElementById('root'))
//Only one will be rendered