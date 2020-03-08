import React from 'react';
import Navbar from './navbar';
import Sidebar from './sidebar';
import { Switch, Route, Redirect } from 'react-router-dom';
import Cpost from './createPost';

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
                    <Route path="/admin/create-post" component={Cpost} />
                </Switch>
            </main>
        </div>
    );
}

export default Dashboard;
