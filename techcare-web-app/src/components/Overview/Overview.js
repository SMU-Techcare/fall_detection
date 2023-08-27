import React from "react";
import { Layout, theme } from 'antd';
const { Header, Content, Footer } = Layout;


export default function Overview() {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
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
                    Overview
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