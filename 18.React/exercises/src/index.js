import React from 'react'
import ReactDOM from 'react-dom'

import GM from './components/GoodMorning'

const element = <h1>React</h1>

ReactDOM.render(element, document.getElementById('root'))
ReactDOM.render(<GM name="Mike" />, document.getElementById('root'))
//Only one will be rendered