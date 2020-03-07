import React, { Component } from 'react';
class Login extends Component {
    handleLogin = e => {
        e.preventDefault();
        this.props.history.replace('/');
    };
    render() {
        return (
            <div
                style={{
                    display: 'flex',
                    height: '100vh',
                    backgroundColor: ' #d1e0e0'
                }}
                className="justify-content-center align-items-center"
            >
                <div className="row">
                    <div className="">
                        <h3 className="text-center">Login</h3>
                        <p className="lead text-center">
                            Log in to your site admin account
                        </p>
                        <form
                            className="mb-3"
                            onSubmit={e => this.handleLogin(e)}
                        >
                            <div className="row">
                                <div className="form-group col-12 col-sm-6 col-xs-6 col-lg-6">
                                    <label htmlFor="email">Email:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="example@info.com"
                                        id="email"
                                    />
                                </div>
                                <div className="form-group col-12 col-sm-6 col-xs-6 col-lg-6">
                                    <label htmlFor="password">Password:</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="********"
                                        id="password"
                                    />
                                </div>
                            </div>
                            <div className="text-center">
                                <button
                                    type="submit"
                                    className="btn btn-secondary  "
                                >
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
