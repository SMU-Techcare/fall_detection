import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useAuth } from '../../context/AuthContext';

import { Button, Form, Input } from 'antd';
import CustomAlert from '../CustomAlert/CustomAlert';

import './login.css';

export default function Login() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const { login } = useAuth();

    const navigate = useNavigate();

    const onFinish = async (values) => {
        console.log('Success:', values);
        try {
            setLoading(true);
            await login(values.email, values.password);
            navigate("/");
        } catch (err) {
            setError("Failed to Login:", err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div id='login__container'>
            {error ? <CustomAlert message="Failed to log in!" type="error" />
                : null}
            <h1>Log In</h1>
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                style={{
                    maxWidth: 600,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                // onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your email!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        }
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Login
                    </Button>
                </Form.Item>
            </Form>
            <span>Need an account? <Link to={'/signup'}> Sign Up</Link></span>
        </div >
    );
}