import React, { Component } from 'react';

class Blog extends Component {
    constructor(){
        super();
        this.state=({
            posts:[]
        })
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response=>response.json())
        // .then(json => console.log(json))
    .then(response=>this.setState({posts:response}))
    }
    render() {
        return (
            <div className="container">
               
                <div className="row mt-4">
                {this.state.posts.map(post=>
                <div className="col-sm-3">
                    <div class="border mt-3">
                <div key={post.id}>{post.id}) {post.title}</div>
                </div>
                </div>
                )}
                </div>
            </div>
        );
    }
}

export default Blog;