import Son from './Son'

export default props => 
    <div>
        <h1>{props.name} {props.surname}</h1>
        <h2>Children</h2>
        <ul>
            <Son name="Mike" surname={props.surname}/>
            <Son {...props}/>
            <Son {...props} name ="Charlie"/>
        </ul>
    </div>