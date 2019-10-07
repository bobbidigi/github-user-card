import React, { Component } from 'react'
import axios from 'axios'
import FollowersCard from './FolowersCard'


export default class Followers extends Component {
    
    render() {
        return (
            <div>
                {this.props.followers.map((user)=>{
                 return   <FollowersCard user={user}/>
                })}
            </div>
        )
    }
}
