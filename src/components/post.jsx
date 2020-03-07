import React, { Component } from "react";
import getPosts from "../services/fakePosts";
import Like from "./like";
import Pagination from "./pagination";
import { paginate } from "./../utils/paginate";
class Posts extends Component {
    state = {
        posts: [],
        currentPage: 1,
        pageSize: 5
    };

    componentDidMount() {
        const posts = getPosts();
        this.setState({ posts });
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
        const { data, totalCount } = this.getPageData();
        return (
            <React.Fragment>
                {data.map(post => (
                    <div
                        className="container-fluid col-12 col-md-10 col-lg-10 col-xs-12"
                        id="section-posts"
                        key={post.id}
                    >
                        <div className="card shadow-lg bg-light m-2">
                            <article className="p-3">
                                <div className="card-header">
                                    <h3 className="card-title">
                                        <a href="#">{post.postTags}</a>
                                    </h3>
                                    <span className="card-subtitle">
                                        <span className="fa fa-calendar m-2" />
                                        {post.postDate}
                                    </span>
                                    <img
                                        className="card-img img-fluid"
                                        src={post.postImageUrl}
                                        alt=""
                                    />
                                </div>
                                <div className="card-body">
                                    <p className="lead">{post.postContent}</p>
                                    <Like post={post} />
                                </div>

                                <div className="card-footer">
                                    <ul className="list-inline float-left">
                                        <li className="list-inline-item">
                                            <span className="fa fa-link m-1" />
                                            Tags:
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#">{post.postTags}</a>
                                        </li>
                                    </ul>
                                </div>
                            </article>
                        </div>
                    </div>
                ))}
                <Pagination
                    itemCount={totalCount}
                    pageSize={pageSize}
                    currentPage={currentPage}
                    onPageChange={this.handelPageChange}
                />
            </React.Fragment>
        );
    }
}
export default Posts;
