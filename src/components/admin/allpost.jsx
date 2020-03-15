import React, { Component } from 'react';
import { getPost, deletePost } from '../../services/postService';
import { paginate } from './../../utils/paginate';
import Pagination from './../pagination';
import axios from 'axios';
import { toast } from 'react-toastify';

class AllPosts extends Component {
    state = {
        posts: [],
        currentPage: 1,
        pageSize: 5
    };
    async componentDidMount() {
        const { data } = await getPost();
        this.setState({ posts: data });
    }
    handelPageChange = page => {
        this.setState({ currentPage: page });
    };
    hendleDelete = async postId => {
        const orginalPost = this.state.posts;
        const posts = this.state.posts.filter(p => postId !== p._id);
        this.setState({ posts });

        try {
            const result = await deletePost(postId);
            if (result.status === 200) toast.success('success delete');
        } catch (ex) {
            if (ex.response && ex.response.status === 404)
                toast.error('not found post with this id');
            this.setState({ posts: orginalPost });
        }
    };
    getPageData = () => {
        const { pageSize, currentPage, posts: allposts } = this.state;
        const posts = paginate(allposts, currentPage, pageSize);

        return {
            totalCount: allposts.length,
            data: posts
        };
    };
    render() {
        const { pageSize, currentPage } = this.state;
        const { totalCount, data } = this.getPageData();
        let count = 1;
        return (
            <div className="bg-light m-3 p-4 border rounded ">
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>title post</th>
                            <th>Date Publish</th>
                            <th>Like Count</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(post => (
                            <tr key={post._id}>
                                <th scope="row">{count++}</th>
                                <td>{post.postTitle}</td>
                                <td>{post.postDate}</td>
                                <td>{post.postLike}</td>
                                <td>
                                    <button
                                        className="btn btn-dark "
                                        onClick=""
                                    >
                                        edit
                                    </button>
                                </td>
                                <td>
                                    <button
                                        className="btn btn-primary "
                                        onClick={() =>
                                            this.hendleDelete(post._id)
                                        }
                                    >
                                        delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <Pagination
                    itemCount={totalCount}
                    pageSize={pageSize}
                    currentPage={currentPage}
                    onPageChange={this.handelPageChange}
                />
            </div>
        );
    }
}
export default AllPosts;
