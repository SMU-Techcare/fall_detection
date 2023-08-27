import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Layout, theme } from 'antd';

import SidebarNav from '../SidebarNav/SidebarNav';
import FallRecords from '../FallRecords/FallRecords';
import Units from '../Units/Units';
import Connections from '../Connections/Connections';
import Profile from '../Profile/Profile';
import Overview from '../Overview/Overview';


const Dashboard = () => {
    // const [loading, setLoading] = useState(false);

    const [selectedView, setSelectedView] = useState('Overview');

    const onSelectView = (view) => {
        setSelectedView(view);
    };

    const renderView = () => {
        if (selectedView == 'Overview') return <Overview />;
        if (selectedView == 'Units') return <Units />;
        if (selectedView == 'Connections') return <Connections />;
        if (selectedView == 'Records') return <FallRecords />;
        if (selectedView == 'Profile') return <Profile />;
    };

    return (
        <Layout
            style={{
                minHeight: '100vh',
                minWidth: '100vw'
            }}
        >
            <SidebarNav onSelectView={onSelectView} />
            {renderView()}
        </Layout>
    );
};
export default Dashboard;