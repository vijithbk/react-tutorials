import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username: '',
             comments: '',
             topic: 'vue'
        }
    }

    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handleCommentsChange = (event) => {
        this.setState({
            comments: event.target.value
        })
    }

    handleTopicChange = (event) => {
        this.state({
            topic: event.target.value
        })
    }

    handleFormSubmit = (event) => {
        console.log(this.state.username, this.state.comments, this.state.topic)
        event.preventDefault();
    }
    
    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
                <div>
                    <h1>Form</h1>
                </div>
                <div>
                    <label>Username</label>
                    <input type="text" value={this.state.username} onChange={this.handleUsernameChange} />
                </div>
                <div>
                    <label>Comments</label>
                    <textarea value={this.state.comments} onChange={this.handleCommentsChange} ></textarea>
                </div>
                <div>
                    <label>Topic</label>
                    <select value={this.state.topic} onChange={this.handleTopicChange} >
                        <option>react</option>
                        <option>angular</option>
                        <option>vue</option>
                    </select>
                </div>
                <button type="submit">Save</button>
            </form>
        )
    }
}

export default Form
