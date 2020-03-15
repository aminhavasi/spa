import React, { Component } from 'react';
import _ from 'lodash';
import propTypes from 'prop-types';

class Pagination extends Component {
    render() {
        const { itemCount, pageSize, onPageChange, currentPage } = this.props;
        const pageCount = Math.ceil(itemCount / pageSize);

        if (pageCount === 1) return null;
        const pages = _.range(1, pageCount + 1);

        return (
            <nav>
                <ul className="pagination justify-content-center">
                    {pages.map(page => (
                        <li
                            style={{ cursor: 'pointer' }}
                            className={
                                page === currentPage
                                    ? 'page-item active'
                                    : 'page-item'
                            }
                            key={page}
                        >
                            <a
                                className="page-link"
                                onClick={() => onPageChange(page)}
                            >
                                {page}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        );
    }
}

Pagination.propTypes = {
    itemCount: propTypes.number.isRequired,
    pageSize: propTypes.number.isRequired,
    onPageChange: propTypes.func.isRequired,
    currentPage: propTypes.number.isRequired
};
export default Pagination;
