import React, { Component } from 'react';
import shortid from 'shortid';
import BetterIcon from '../shared/BetterIcon'

import './posts.css';

const MESSAGE_MAX_LENGTH = 140;

export default class InputMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ message: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = {
      "id": 4,
      "username": "CurrentUser",
      "real_name": "Jain",
      "verified": true,
      "avatar": <BetterIcon width={36} fill='#291842'/>
    }
    const post = {
      id: shortid.generate(),
      user: 4,
      message: this.state.message,
      ts: Date.now()/1000
    }
    const dataObj = { post, user}
    this.props.handleChangeMessageValue(dataObj);
    this.props.addNewPost(post, user);
    this.setState({message: ''})
  }

  countUpdate() {
    return MESSAGE_MAX_LENGTH - this.state.message.length;
  }

  inError() {
    return MESSAGE_MAX_LENGTH - this.state.message.length <= 0;
  }

  render() {
    return (
      <div className={this.inError() ? 'input-container-error' : 'input-container'}>
        <form onSubmit={this.handleSubmit}>
          <div className='counter'>{this.countUpdate()}</div>
          <input
            type='text'
            className='inputForm'
            placeholder="what's happening?"
            maxLength={MESSAGE_MAX_LENGTH}
            value={this.state.message}
            onChange={this.handleChange}
          />
        <button type='submit' className='button'><i className="material-icons lighter">send</i></button>
        </form>
      </div>
    );
  }
}
