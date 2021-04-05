import React, { Component } from "react";
import { connect } from "react-redux";

class Post extends Component {
  componentWillMount() {
    // this.props.fetchPosts();
  }
  render() {
    console.log(this.props);
    const postItems = this.props.posts.map((post) => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ));
    return (
      <div>
        <h1>Posts</h1>
        <h3>{this.props.newpost.title}</h3>
        <h3>{this.props.newpost.body}</h3>
        {postItems}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  posts: state.posts.items,
  newpost: state.posts.item,
});
export default connect(mapStateToProps, null)(Post);
