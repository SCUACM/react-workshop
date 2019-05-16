import React, { Component } from 'react';

class FeedItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            votes: props.post.ups - props.post.downs,
            comments: props.post.comments,
            commentText: ''
        }

        this.handleUpvote = this.handleUpvote.bind(this);
        this.handleDownvote = this.handleDownvote.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
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

    handleChange(event) {
        this.setState({ commentText: event.target.value });
    }

    handleKeyDown(event) {
        const { commentText, comments } = this.state;

        if (event.key === 'Enter') {
            event.preventDefault();
            this.setState({
                commentText: '',
                comments: [
                    ...comments,
                    commentText
                ]
            });
        }
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
                    <img src={post.thumbnail}></img>

                    {/* {comments.map((comment, index) =>
                        <div key={index}>
                            {comment}
                        </div>
                    )}
                    <textarea
                        value={commentText}
                        onChange={this.handleChange}
                        onKeyDown={this.handleKeyDown}
                    /> */}
                </div>
            </div>
        );
    }
}

export default FeedItem;