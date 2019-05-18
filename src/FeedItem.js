import React from 'react';

class FeedItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      votes: props.post.ups
    };

    this.handleUpvote = this.handleUpvote.bind(this);
    this.handleDownvote = this.handleDownvote.bind(this);
    this.handlePostClick = this.handlePostClick.bind(this);
  }

  handleUpvote() {
    const { votes } = this.state;

    this.setState({
      votes: votes + 1
    });
  }

  handleDownvote() {
    const { votes } = this.state;

    this.setState({
      votes: votes - 1
    });
  }

  handlePostClick(event) {
    const { post } = this.props;

    event.preventDefault();
    window.open('https://www.reddit.com' + post.permalink, '_blank');
  }

  render() {
    const { votes } = this.state;
    const { post } = this.props;

    return (
      <div className='feed-item card'>
        <div className='votes'>
          <div className='vote upvote' onClick={this.handleUpvote}>+</div>
          <div>{votes}</div>
          <div className='vote downvote' onClick={this.handleDownvote}>-</div>
        </div>
        <div className='post' onClick={this.handlePostClick}>
          <div className='post-info'>r/{post.subreddit}</div>
          <div className='title'>{post.title}</div>
          <img src={post.thumbnail} alt=''></img>
        </div>
      </div>
    );
  }
}

export default FeedItem;
