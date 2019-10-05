import React, { Component } from 'react'

export default class Followers extends Component {
    render() {
        return (
            <div>
                {this.props.followers.map((user)=>{
                 return   <div className="card">
                 <img src={user.avatar_url} />
                 <div className="card-info">
                     <p class="username">{user.login}</p>
                     <p>Profile:  
                        <a href={user.html_url}> github page</a>
                    </p>
                 </div>
             </div>
                })}
            </div>
        )
    }
}
