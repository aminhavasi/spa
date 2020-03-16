import React, { Component } from 'react';
import { incLike } from '../services/postService';
class Like extends Component {
    state = {
        post: this.props.post
    };
    handelLikeClik = async post => {
        console.log(post);
        const orginalPost = this.state.post;
        const likeedpost = { ...post };
        likeedpost.postLike++;
        this.setState({ post: likeedpost });
        try {
            const result = await incLike(post._id);
        } catch (error) {
            this.setState({ post: orginalPost });
        }
    };
    render() {
        const { post } = this.state;
        return (
            <div
                className="fa fa-heart flot-left"
                style={{ color: 'red', cursor: 'pointer' }}
                onClick={() => this.handelLikeClik(post)}
            >
                <span className="badge-primary badge-pill m-1">
                    {post.postLike ? post.postLike : '0'}
                </span>
            </div>
        );
    }
}

export default Like;
