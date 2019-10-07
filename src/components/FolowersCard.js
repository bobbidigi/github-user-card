import React, { Component } from 'react'
import axios from 'axios'

export default class FolowersCard extends Component {

    constructor(){
        super();
        this.state = {
          user: [],
          followers: []
        }
      }


      componentDidMount(){
        this.fetchUserData() 
        this.fetchFollowers()
      }
    
    
    
    fetchUserData = () => {
      axios.get(`https://api.github.com/users/${this.props.user.login}`)
          .then(res => {
          console.log(res.data)
          this.setState({user: res.data})   
        })
        .catch(error => {
          console.log(error)
        })
    } 
    
    
    fetchFollowers = () => {
      axios.get(`https://api.github.com/users/${this.props.user.login}/followers`)
          .then(res => {
          console.log(res.data)
          this.setState({followers: res.data})   
        })
        .catch(error => {
          console.log(error)
        })
    }


    render() {
        console.log('fcard', this.props)
        return (
            <div>
            <div className="card">
                <img src={this.state.user.avatar_url} />
                <div className="card-info">
                    <h3 className="name">{this.state.user.name}</h3>
                    <p class="username">{this.state.user.login}</p>
                    <p>Location: {this.state.user.location}</p>
                    <p>Profile:  
                        <a href={this.state.user.html_url}> github page</a>
                    </p>
                    <p>Followers: {this.state.user.followers}</p>
                    <p>Following: {this.state.user.following}</p>
                    <p>Bio: {this.state.user.bio}</p>
                </div>
             </div>
            </div>
        )
    }
}
