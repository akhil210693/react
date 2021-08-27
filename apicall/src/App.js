
import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);
    this.state={posts:[]};
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
   // .then(json => console.log(json))
   .then(response=>this.setState({posts:response}))
  }
  render() {
    return (
      <div>
        {this.state.posts.map(post=><div key={post.id}>{post.id} {post.title}</div>)}
      </div>
    );
  }
}

export default App;

