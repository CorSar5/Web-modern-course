import React from 'react'

/*export default props =>
    <React.Fragment>
        <h1>Good Morning {props.name}</h1>
        <h2>See you soon</h2>
    </React.Fragment>
*/

/*export default props =>
    <div>
        <h1>Good Morning {props.name}</h1>
        <h2>See you soon</h2>
    </div>
*/

export default props => [
    <h1 key='h1'>Good Morning {props.name}</h1>,
    <h2 key='h2'>See you soon</h2>
]