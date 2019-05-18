import React from 'react';
import axios from 'axios';

import FeedItem from './FeedItem';

class Feed extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: [],
            value: 'aww',
            error: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    componentDidMount() {
        axios.get('https://www.reddit.com/r/aww/hot.json?')
            .then(result => {
                this.setState({
                    posts: result.data.data.children
                });
            })
            .catch(error => console.log(error));
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        });
    }

    handleKeyDown(event) {
        const { value } = this.state;

        if (value === '')
            return;

        if (event.key === 'Enter') {
            axios.get('https://www.reddit.com/r/' + value + '/hot.json?')
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
                    })
                });
        }
    }

    render() {
        const { posts, value, error } = this.state;

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
                {error === ''
                 ?  <div className='feed'>
                        {posts.map((post, index) => <FeedItem post={post.data} key={index} />)}
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
