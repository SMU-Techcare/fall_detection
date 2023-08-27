import React from "react";
import { Layout, theme, Space, Table } from 'antd';
const { Header, Content, Footer } = Layout;

export default function Units() {
    const {
        token: { colorBgContainer },
    } = theme.useToken();


    const columns = [
        {
            title: 'Block',
            dataIndex: 'block',
            key: 'block',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Unit',
            dataIndex: 'unit',
            key: 'unit',
        },
        {
            title: 'Caretaker',
            dataIndex: 'caretaker',
            key: 'caretaker',
        },
        {
            title: 'Action',
            key: 'action',
            render: () => (
                <Space size="middle">
                    <a>Edit</a>
                    <a>Delete</a>
                </Space>
            ),
        },
    ];
    const data = [
        {
            key: '220:2-10',
            block: '220',
            unit: '2-10',
            caretaker: 'Caretaker A',
        },
        {
            key: '224:2-11',
            block: '224',
            unit: '2-11',
            caretaker: 'Caretaker B',
        },
        {
            key: '225:2-12',
            block: '223',
            name: 'Joe Black',
            unit: '2-12',
            caretaker: 'Caretaker C',
        },
    ];

    return (
        <Layout>
            <Header
                style={{
                    padding: 0,
                    background: colorBgContainer,
                }}
            />
            <Content
                style={{
                    margin: '0 16px',
                }}
            >

                <div
                    style={{
                        padding: 24,
                        minHeight: 360,
                        background: colorBgContainer,
                    }}
                >

                    <Table columns={columns} dataSource={data} />


                </div>
            </Content>


            <Footer
                style={{
                    textAlign: 'center',
                }}
            >
                SMU TechCare
            </Footer>
        </Layout>
    );
}