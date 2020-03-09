import React, { Component } from 'react';
import _ from 'lodash';
import axios from 'axios';
class Cpost extends Component {
    state = {
        postTitle: '',
        postImageUrl: '',
        postContent: '',
        postTags: []
    };

    handleSubmit = async e => {
        e.preventDefault();
        const result = await axios.post(
            'http://localhost:8000/api/post',
            this.state
        );
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
                <button className="btn btn-primary m-5">Create new post</button>
            </form>
        );
    }
}
export default Cpost;
