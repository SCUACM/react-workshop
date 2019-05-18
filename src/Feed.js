import React from 'react';

import FeedItem from './FeedItem';

class Feed extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        return (
            <div className='container'>
                <div className='header'>
                    <h1 className='feed-title'>React Reddit Feed</h1>
                    <div className='subreddit-prefix'>/r/</div>
                    <input
                        className='subreddit-input'
                    />
                </div>
                <div className='feed'>
                    <FeedItem />
                </div>
            </div>
        );
    }
}

export default Feed;
