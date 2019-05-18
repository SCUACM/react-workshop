import React from 'react';
import axios from 'axios';

import FeedItem from './FeedItem';

class Feed extends React.Component {
    state = {
        posts: [],
        value: 'aww',
        error: ''
    }

    getData() {
        const { value } = this.state;

        axios.get(`https://www.reddit.com/r/${value}/top.json`)
            .then(result => {
                this.setState({
                    posts: result.data.data.children,
                    error: ''
                });
            })
            .catch(error => {
                console.log(error);
                this.setState({
                    posts: [],
                    error: true
                });
            });
    }

    componentDidMount() {
        this.getData();
    }

    handleChange = event => {
        this.setState({
            value: event.target.value
        });
    }

    handleKeyDown = event => {
        const { value } = this.state;

        if (value === '')
            return;

        if (event.key === 'Enter')
            this.getData();
    }

    renderFeed() {
        const { posts } = this.state;

        return (
            <div className='feed'>
                {posts.map((post, index) => <FeedItem post={post.data} key={index} />)}
            </div>
        );
    }

    renderError() {
        return (
            <div className='error'>
                Error: Subreddit doesn't exist or something went wrong!
            </div>
        );
    }

    render() {
        const { value, error } = this.state;

        return (
            <div className='container'>
                <div className='header'>
                    <h1 className='feed-title'>React Reddit Feed</h1>
                    <div className='subreddit-prefix'>/r/</div>
                    <input
                        className='subreddit-input'
                        placeholder='enter a subreddit'
                        value={value}
                        onChange={this.handleChange}
                        onKeyDown={this.handleKeyDown}
                    />
                </div>

                {error ? this.renderError() : this.renderFeed()}
            </div>
        );
    }
}

export default Feed;
