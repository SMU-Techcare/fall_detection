import React, { useState, useEffect } from 'react';
import { Alert } from 'antd';
import './customAlert.css';

const CustomAlert = ({ message, type }) => {
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        setIsActive(true);

        const timeout = setTimeout(() => {
            setIsActive(false);
        }, 3000);

        return () => {
            clearTimeout(timeout);
        };
    }, []);


    return (
        <div className={`alert__container ${isActive ? 'active' : ''}`}>
            <Alert message={message} type={type} />
        </div>
    );
};

export default CustomAlert;