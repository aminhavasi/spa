import React, { Component } from 'react';
import { getPost } from '../../services/postService';
import { paginate } from './../../utils/paginate';
import Pagination from './../pagination';
import axios from 'axios';

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
                            <tr key={post.id}>
                                <th scope="row">{post.id}</th>
                                <td>{post.postTitle}</td>
                                <td>{post.postDate}</td>
                                <td>{post.like}</td>
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
                                        onClick=""
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
