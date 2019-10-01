import React, { Component } from 'react';
import Calendar from '../shared/Calendar';

import './posts.css';

const getDate= timestamp => {
  var a = new Date(timestamp * 1000);
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
  return time;
}

class Post extends Component {
  constructor() {
    super();
    this.state = {
      flipped: false
    }
    this.handleMouse = this.handleMouse.bind(this);
  }

  componentDidMount() {
    this[`post-${this.props.data.post.id}`].scrollIntoView({ behavior: "smooth" });
  }

  handleMouse() {
    this.setState(prevState => ({flipped: !prevState.flipped}));
  }

  displayContent() {
    if (this.props.data.user.username === 'CurrentUser') {
      return (
        <div ref={post => this[`post-${this.props.data.post.id}`] = post} className='post-item'>
          <div className='post-container'>
            <div className='post-info'>
              <div>{getDate(this.props.data.post.ts)}</div>
            </div>
            <div className='current-message-container'>
              {this.props.data.post.message}
            </div>
          </div>
          <div className='current-image'>
            {this.props.data.user.avatar}
          </div>
        </div>
      )
    } else {
      return (
        <div ref={post => this[`post-${this.props.data.post.id}`] = post} className='post-item'>
          <div>
            <img
              className='image'
              src={this.props.data.user.avatar}
              alt='UserPhoto'
            />
          </div>
          <div className='post-container'>
            <div className='post-info'>
              <div>
                {`${this.props.data.user.real_name}
                - @${this.props.data.user.username}`}
              </div>
              <div>{getDate(this.props.data.post.ts)}</div>
            </div>
            <div className='scene'>
              <div className={this.state.flipped ? 'card is-flipped' : 'card'}
                onMouseOver={this.handleMouse}
                onMouseOut={this.handleMouse}
              >
                <div className='card__face card__face--back'>
                  <Calendar width={20} />
                  {`active since ${getDate(this.props.data.post.ts)}`}
                </div>
                <div className='card__face card__face--front'>
                  {this.props.data.post.message}
                </div>

              </div>
            </div>
          </div>
        </div>
      )
    }
  }

  render() {
      if (this.props.data) {
        return this.displayContent()
        } else {
         return null;
     }
   }
}

export default Post;
