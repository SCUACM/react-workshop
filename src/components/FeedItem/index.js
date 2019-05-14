import React, { Component } from 'react';

class FeedItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            numClicks: 0,
            comments: ['comment1', 'also comment', 'more comment'],
            commentText: ''
        }

        this.handleUpvote = this.handleUpvote.bind(this);
        this.handleDownvote = this.handleDownvote.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    handleUpvote() {
        const { numClicks } = this.state;
        this.setState({
            numClicks: numClicks + 1
        });
    }

    handleDownvote() {
        const { numClicks } = this.state;
        this.setState({
            numClicks: numClicks - 1
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
        const { numClicks, comments, commentText } = this.state;

        return (
            <div className='feed'>
                <div>Hello world! This might be a post ~</div>
                <div>Votes: {numClicks}
                    <button onClick={this.handleUpvote}>Upvote</button>
                    <button onClick={this.handleDownvote}>Downvote</button>
                </div>
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
        );
    }
}

export default FeedItem;