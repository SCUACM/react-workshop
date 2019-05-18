import React from 'react';

class FeedItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      votes: props.post.ups
    };
  }

  handleVote(delta) {
    const { votes } = this.state;

    this.setState({
      votes: votes + delta
    });
  }

  handlePostClick = event => {
    const { post } = this.props;

    event.preventDefault();
    window.open(`https://www.reddit.com${post.permalink}`, '_blank');
  }

  render() {
    const { votes } = this.state;
    const { post } = this.props;

    return (
      <div className='feed-item card'>
        <div className='votes'>
          <div className='vote upvote' onClick={() => this.handleVote(1)}>+</div>
          <div>{votes}</div>
          <div className='vote downvote' onClick={() => this.handleVote(-1)}>-</div>
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
