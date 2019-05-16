import React, { Component } from 'react';
import axios from 'axios';

import FeedItem from '../FeedItem';


class Feed extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        };
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

    render() {
        const { posts } = this.state;

        console.log(posts);

        return (
            <div className='container'>
                <h1 className='feed-title'>React Reddit Feed</h1>
                <div className='feed'>
                    {posts.map((post, index) =>
                        <FeedItem post={post.data} key={index} />
                    )}
                </div>
            </div>
        );
    }
}

export default Feed;
