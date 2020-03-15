import React, { Component } from 'react';
import _ from 'lodash';
import { updatePost } from '../../services/postService';
import { toast } from 'react-toastify';
class EditPost extends Component {
    state = {
        _id: '',
        postDate: '',
        postTitle: '',
        postImageUrl: '',
        postContent: '',
        postTags: [],
        postLike: ''
    };
    componentDidMount() {
        const { post } = this.props.location;
        if (!post) return this.props.history.push('/admin/allposts');
        this.setState({
            _id: post._id,
            postDate: post.postTitle,
            postTitle: post.postTitle,
            postImageUrl: post.postImageUrl,
            postContent: post.postContent,
            postTags: post.postTags,
            postLike: post.postLike
        });
    }

    handleSubmit = async e => {
        e.preventDefault();

        try {
            const result = await updatePost(this.state);
            if (result.status === 200) {
                toast.success('edited post');
                this.props.history.push('/admin/allposts');
            }
        } catch (err) {
            if (err.response && err.response.status === 400)
                toast.error('Please fill in all fields');
        }
    };
    render() {
        return (
            <form
                className="form-group bg-light border rounded m-2 shadow p-5"
                onSubmit={this.handleSubmit}
            >
                <label className="col-md-4 control-label " htmlFor="txttitle">
                    post Title:
                </label>
                <input
                    id="txtTitle"
                    name="postTitle"
                    placeholder="title..."
                    className="form-control input-md m-2"
                    value={this.state.postTitle}
                    onChange={e => this.setState({ postTitle: e.target.value })}
                />
                <input
                    id="txtImageUrl"
                    name="postImageUrl"
                    placeholder="image link (Not required)"
                    className="form-control input-md m-2"
                    value={this.state.postImageUrl}
                    onChange={e =>
                        this.setState({ postImageUrl: e.target.value })
                    }
                />
                <textarea
                    name="postContent"
                    className="form-control m-2"
                    rows="5"
                    placeholder="postContent"
                    value={this.state.postContent}
                    onChange={e =>
                        this.setState({ postContent: e.target.value })
                    }
                />
                <label className="col-md-4 control-label" htmlFor="txtTags">
                    Tags:
                </label>
                <input
                    id="txtTags"
                    name="postTags"
                    type="text"
                    placeholder="tags - spread tags with (',') "
                    className="form-control input-md m-2"
                    value={this.state.postTags}
                    onChange={e =>
                        this.setState({
                            postTags: _.split(e.target.value, ',')
                        })
                    }
                />
                <button className="btn btn-primary m-5">edit post</button>
            </form>
        );
    }
}
export default EditPost;
