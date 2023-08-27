import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../context/AuthContext';

import {
    FileOutlined,
    HomeOutlined,
    LinkOutlined,
    PieChartOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Space } from 'antd';
const { Sider } = Layout;

const SidebarNav = ({ onSelectView }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [collapsed, setCollapsed] = useState(false);

    const { logout } = useAuth();
    const navigate = useNavigate();


    const handleLogout = async () => {
        try {
            setLoading(true);
            await logout();
            navigate("/login");
        } catch (err) {
            setError("Failed to Logout:", err);
        } finally {
            setLoading(false);
        }
    };

    const items = [
        {
            key: '1',
            label: 'Dashboard',
            icon: <PieChartOutlined />,
            onClick: () => onSelectView('Overview'),
        },
        {
            key: '2',
            label: 'Units',
            icon: <HomeOutlined />,
            onClick: () => onSelectView('Units'),
        },
        {
            key: '3',
            label: 'Connections',
            icon: <LinkOutlined />,
            onClick: () => onSelectView('Connections'),
        },
        {
            key: '4',
            label: 'Fall Records',
            icon: <FileOutlined />,
            onClick: () => onSelectView('Records'),
        },
        {
            key: 'sub1',
            label: 'My Account',
            icon: <UserOutlined />,
            children: [
                {
                    key: '5',
                    label: 'Profile',
                    onClick: () => onSelectView('Profile'),
                },
                {
                    key: '6',
                    label: 'Log Out',
                    onClick: () => handleLogout(),
                },
            ],
        },
    ];

    return (
        <Sider collapsible
            collapsed={collapsed}
            onCollapse={(value) => setCollapsed(value)}
        >

            <Space
                direction="vertical"
                size="middle"
                style={{
                    display: 'flex', flexDirection: 'column', height: '100%',
                    justifyContent: 'center',
                }}

            >
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        height: '18vh',
                    }}
                >
                    {
                        !collapsed &&
                        (
                            <h2 style={{
                                color: 'white',
                                padding: '0 0.5em'
                            }}>
                                Fall Detection System
                            </h2>
                        )
                    }
                </div>
                <Menu
                    theme="dark"
                    defaultSelectedKeys={['1']} mode="inline"
                    items={items}
                />
            </Space>
        </Sider>
    );
};
export default SidebarNav;