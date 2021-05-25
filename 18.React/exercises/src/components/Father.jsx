import React from "react"
import {childrenWithProps} from '../utils/reactClone'


export default props => 
    <div>
        <h1>{props.name} {props.surname}</h1>
        <h2>Children</h2>
        <ul>
            {childrenWithProps(props)}
            {/*Does only work with 1 element*/}
        </ul>
    </div>