import React, { Component } from 'react';

import FeedItem from '../FeedItem';

class Feed extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: [
                {
                    votes: 255,
                    comments: ['so cool!', 'incredible', 'wow', 'honestly wild']
                },
                {
                    votes: -42,
                    comments: ['uninspiring', 'not impressed']
                },
                {
                    votes: 12,
                    comments: []
                },
                {
                    votes: 0,
                    comments: ['very controversial~', '???', '!!!']
                }
            ]
        };
    }

    render() {
        const { posts } = this.state;

        return (
            <div className='feed'>
                {posts.map((post, index) =>
                    <FeedItem post={post} key={index} />
                )}
            </div>
        );
    }
}

export default Feed;
