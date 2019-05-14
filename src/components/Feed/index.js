import React, { Component } from 'react';

class Feed extends Component {
    constructor(props) {
        super(props);

        this.state = {
            numClicks: 0
        }

        this.handleUpvote = this.handleUpvote.bind(this);
        this.handleDownvote = this.handleDownvote.bind(this);
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

    render() {
        const { numClicks } = this.state;

        return (
            <div>
                <div>Hello world! This might be a post ~</div>
                <div>Votes: {numClicks}
                    <button onClick={this.handleUpvote}>Upvote</button>
                    <button onClick={this.handleDownvote}>Downvote</button>
                </div>
            </div>
        );
    }
}

export default Feed;