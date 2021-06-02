import React, { Component } from 'react'
import Main from '../template/Main'

const headerProps ={
    icon: 'users',
    title: 'Users',
    subtitle:' User Login: Include, List, Change, Exclude'
}

export default class UserCrud extends Component {
    render() {
        return(
            <Main {...headerProps}>
                User Login
            </Main>
        )
    }
}