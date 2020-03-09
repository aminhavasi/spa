import React from 'react';
import Navbar from './navbar';
import Sidebar from './sidebar';
import { Switch, Route, Redirect } from 'react-router-dom';
import Cpost from './createPost';
import AllPosts from './allpost';
import MainAdmin from './admin';

function Dashboard() {
    return (
        <div>
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
                </Switch>
            </main>
        </div>
    );
}

export default Dashboard;
