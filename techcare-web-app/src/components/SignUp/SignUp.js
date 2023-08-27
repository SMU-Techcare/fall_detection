import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useAuth } from '../../context/AuthContext';

import { Button, Checkbox, Form, Input } from 'antd';
import CustomAlert from '../CustomAlert/CustomAlert';
import './signUp.css';

export default function SignUp() {

    const navigate = useNavigate();

    const { signup } = useAuth();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    // const onFinishFailed = (errorInfo) => {
    //     console.log('Failed:', errorInfo);
    // };

    const onFinish = async (values) => {
        console.log('Form Submit:', values);
        try {
            setLoading(true);
            await signup(values.email, values.password);
            navigate("/");
        } catch (err) {
            setError("Failed to Sign Up:", err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div id='signUp'>
            {error ? <CustomAlert message="Failed to create an account!" type="error" />
                : null}
            <h1>Sign Up</h1>
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
                            message: 'Please input an email!',
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
                            message: 'Please input a password!',
                        },
                        {
                            min: 6,
                            message: 'Password must be minimum 6 characters!',
                        },
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
                        Submit
                    </Button>
                </Form.Item>
            </Form>
            <span>Already have an account? <Link to={'/login'}>Log In</Link></span>
        </div>
    );
}