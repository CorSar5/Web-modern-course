import React from 'react'
import ReactDOM from 'react-dom'

import Salute from './components/Salute'

const element = <h1>React</h1>

ReactDOM.render(element, document.getElementById('root'))
ReactDOM.render(
<div>
    <Salute type="Good Moorning" name="Peter"/>
    </div>, document.getElementById('root'))
//Only one will be rendered