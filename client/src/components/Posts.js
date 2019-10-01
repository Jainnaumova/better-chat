import React, { Component } from 'react';
import Post from './Post';
import InputMessage from './InputMessage';
import Spinner from '../shared/Spinner';

import './posts.css';

const getAllData = (posts, users) => {
  const data = [];
  posts.forEach(post => {
    let obj = {};
    obj.post = post;
    data.push(obj);
  });
  data.forEach(post => {
    const userObj = users.find(obj => obj.id === post.post.user);
    post.user = userObj;
  })
  return data;
}

const addPost = (allData, post, user) => {
  const newPost = {
    post,
    user
  }
  allData.push(newPost);
  return allData;
}

class Posts extends Component {
  constructor() {
    super();
    this.state = {
      posts: null,
      users: null,
      allData: null,
      spinner: true,
      messageSubmitted: false
    };
    this.handleChangeMessageValue = this.handleChangeMessageValue.bind(this);
    this.addNewPost = this.addNewPost.bind(this);
  }

  componentDidMount() {
    fetch('/api/users')
      .then(res => res.json())
      .then(users => {
        this.setState({ users })
      });
    fetch('/api/posts')
      .then(res => res.json())
      .then(posts => {
        this.setState({ posts })
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.posts && this.state.users && !this.state.allData) {
      this.setState({ allData: getAllData(this.state.posts, this.state.users), spinner: false })
    }
  }

  handleChangeMessageValue(value) {
    const data = { value };
    const payload = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }
    fetch('/api/posts', payload);
    this.setState({ messageSubmitted: true });
  }

  addNewPost(post, user) {
    const allData = [...this.state.allData];
    const updatedData = addPost(allData, post, user);
    this.setState({ allData: updatedData, messageSubmitted: false });
  }

  renderChat() {
    return (
      <div className='posts-container'>
        {this.state.allData.map(data =>
          <div className={data.user.username === 'CurrentUser' ? 'current-post-wrapper' : 'post-wrapper'} key={data.post.id}>
            <Post data={data} />
          </div>
        )}
      </div>
    );
  }

  renderEmptyChat() {
    return (
      <div className='empty-chat'>
        No Messages Found
      </div>
    );
  }

  displayContent() {
    if (this.state.spinner) {
      return <Spinner />;
    } else if (!this.state.spinner && !this.state.allData.length) {
      return this.renderEmptyChat();
    } else {
      return this.renderChat();
    }
  }

  render() {
    return (
      <div>
        {this.displayContent()}

        <div className='input-block'>
          <InputMessage
            addNewPost={this.addNewPost}
            handleChangeMessageValue={this.handleChangeMessageValue}
          />
        </div>
      </div>
    );
  }
}

export default Posts;
