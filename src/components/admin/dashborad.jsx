import React from 'react';
import Navbar from './navbar';
import Sidebar from './sidebar';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Cpost from './createPost';
import AllPosts from './allpost';
import MainAdmin from './admin';
import 'react-toastify/dist/ReactToastify.css';
import EditPost from './editPost';

function Dashboard() {
    return (
        <div>
            <ToastContainer />
            <Navbar />
            <Sidebar />
            <main
                className="col-md-9 mr-sm-auto  col-lg-10 px-4"
                style={{ marginLeft: '0', marginTop: '70px' }}
            >
                <Switch>
                    <Route exact path="/admin" component={MainAdmin} />
                    <Route path="/admin/create-post" component={Cpost} />
                    <Route path="/admin/allposts" component={AllPosts} />
                    <Route path="/admin/editpost" component={EditPost} />
                </Switch>
            </main>
        </div>
    );
}

export default Dashboard;
