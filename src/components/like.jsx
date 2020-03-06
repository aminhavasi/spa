import React, { Component } from "react";

class Like extends Component {
    state = {
        post: this.props.post
    };
    handelLikeClik = post => {
        const likeedpost = { ...post };
        likeedpost.like++;
        this.setState({ post: likeedpost });
    };
    render() {
        const { post } = this.state;
        return (
            <div
                className="fa fa-heart flot-left"
                style={{ color: "red", cursor: "pointer" }}
                onClick={() => this.handelLikeClik(post)}
            >
                <span className="badge-primary badge-pill m-1">
                    {post.like ? post.like : "0"}
                </span>
            </div>
        );
    }
}

export default Like;
