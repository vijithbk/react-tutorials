import React, { Component } from 'react'
import axios from 'axios'

class HttpGet extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts: []
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
            this.setState({
                posts: response.data
            })
            console.log(response);
        }).catch((error) => {
            console.log(error);
        })
    }
    
    render() {
        return (
            <div>
                {
                    this.state.posts.map((item, index) => (
                        <div>{item.title}</div>
                    ))
                }
            </div>
        )
    }
}

export default HttpGet
