import React from 'react';

const BrowserRouter = ({ children }) => <div>{children}</div>;
const Routes = ({ children }) => <div>{children}</div>;
const Route = ({ element }) => <div>{element}</div>;
const Link = ({ children, to }) => <a href={to}>{children}</a>;
const useNavigate = () => (to) => {
    console.warn('useNavigate mock called', to);
};

module.exports = {
    BrowserRouter,
    Routes,
    Route,
    Link,
    useNavigate,
};