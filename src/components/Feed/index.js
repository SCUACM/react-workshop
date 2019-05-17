import React, { Component } from 'react';
import axios from 'axios';

import FeedItem from '../FeedItem';


class Feed extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: [],
            subreddit: '/r/aww',
            error: ''
        };

        this.handleSubredditChange = this.handleSubredditChange.bind(this);
        this.handleSubredditSubmit = this.handleSubredditSubmit.bind(this);
    }

    componentDidMount() {
        axios.get('https://www.reddit.com/r/aww/hot.json?')
            .then(result => {
                this.setState({
                    posts: result.data.data.children
                });
            })
            .catch(error => {
                console.log(error);
            });
    }

    handleSubredditChange(event) {
        this.setState({
            subreddit: event.target.value
        });
    }

    handleSubredditSubmit(event) {
        const { subreddit } = this.state;

        if (subreddit === '')
            return;

        if (event.key === 'Enter') {
            axios.get('https://www.reddit.com' + subreddit + '/hot.json')
                .then(result => {
                    this.setState({
                        posts: result.data.data.children,
                        error: false
                    });
                })
                .catch(error => {
                    this.setState({
                        posts: [],
                        error: true
                    })
                });
        }
    }

    render() {
        const { posts, subreddit, error } = this.state;

        return (
            <div className='container'>
                <div className='header'>
                    <h1 className='feed-title'>React Reddit Feed</h1>
                    <input
                        className='subreddit-input'
                        placeholder='enter a subreddit'
                        value={subreddit}
                        onChange={this.handleSubredditChange}
                        onKeyDown={this.handleSubredditSubmit}
                    />
                </div>
                {error === ''
                 ?  <div className='feed'>
                        {posts.map((post, index) =>
                            <FeedItem post={post.data} key={index} />
                        )}
                    </div>
                 :  <div className='error'>
                        Error: Subreddit doesn't exist or something went wrong!
                    </div>
                }
            </div>
        );
    }
}

export default Feed;
