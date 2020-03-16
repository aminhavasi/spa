import React, { Component } from 'react';
import { login } from '../services/loginservice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Login extends Component {
    state = {
        email: '',
        password: ''
    };

    handleLogin = async e => {
        e.preventDefault();
        try {
            const { data } = await login(this.state.email, this.state.password);
            await localStorage.setItem('token', data);
            this.props.history.replcae('/admin');
        } catch (error) {
            console.log(error);
            if (error.response && error.response.status === 400) {
                toast.error('email or password is wrong');
            }
        }
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
                <ToastContainer />
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
                                        value={this.state.email}
                                        onChange={e =>
                                            this.setState({
                                                email: e.target.value
                                            })
                                        }
                                    />
                                </div>
                                <div className="form-group col-12 col-sm-6 col-xs-6 col-lg-6">
                                    <label htmlFor="password">Password:</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="********"
                                        id="password"
                                        value={this.state.password}
                                        onChange={e =>
                                            this.setState({
                                                password: e.target.value
                                            })
                                        }
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
