import React from 'react';

class FeedItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div className='feed-item card'>
        <div className='votes'>
          <div className='vote upvote'>+</div>
          <div></div>
          <div className='vote downvote'>-</div>
        </div>
        <div className='post'>
          <div className='post-info'>r/aww</div>
          <div className='title'>Hello world!</div>
          <img src='https://bit.ly/2W9oYlO' alt=''></img>
        </div>
      </div>
    );
  }
}

export default FeedItem;
