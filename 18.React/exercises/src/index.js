import React from 'react'
import ReactDOM from 'react-dom'

import Multi, {GAfternoon} from './components/Mutiple'

const element = <h1>React</h1>

ReactDOM.render(element, document.getElementById('root'))
ReactDOM.render(
<div>
    <GAfternoon name="Rachel"/> 
    <Multi.GEnvening name="John"/>
    </div>, document.getElementById('root'))
//Only one will be rendered