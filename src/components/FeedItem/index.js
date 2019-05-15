import React, { Component } from 'react';

class FeedItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            votes: props.post.votes,
            comments: props.post.comments,
            commentText: ''
        }

        this.handleUpvote = this.handleUpvote.bind(this);
        this.handleDownvote = this.handleDownvote.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
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

    render() {
        const { votes, comments, commentText } = this.state;

        return (
            <div className='feed-item card'>
                <div className='votes'>
                    <div className='vote upvote' onClick={this.handleUpvote}>+</div>
                    <div>{votes}</div>
                    <div className='vote downvote' onClick={this.handleDownvote}>-</div>
                </div>
                <div className='post'>
                    <div className='post-info'>r/shurthings</div>
                    <div className='title'>Hello world! This might be a post ~</div>
                    {comments.map((comment, index) =>
                        <div key={index}>
                            {comment}
                        </div>
                    )}
                    <textarea
                        value={commentText}
                        onChange={this.handleChange}
                        onKeyDown={this.handleKeyDown}
                    />
                </div>
            </div>
        );
    }
}

export default FeedItem;