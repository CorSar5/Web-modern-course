import React from 'react'
import ReactDOM from 'react-dom'

import First from './components/first'

const element = <h1>React</h1>

ReactDOM.render(element, document.getElementById('root'))
ReactDOM.render(<First/>, document.getElementById('root'))//Only one will be rendered