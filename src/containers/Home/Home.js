import React from 'react';
import Login from '../../components/Login/Login';
import Register from '../../components/Register/Register';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import '../Home/Home.scss';

const Home = () => {
    return (
        <div className='Home_container'>
            <Tabs defaultActiveKey='first'>
                <Tab eventKey='first' title='Ingreso'>
                    <Login />
                </Tab>
                <Tab eventKey='second' title='Registro'>
                    <Register />
                </Tab>
            </Tabs>
        </div>
    );
};

export default Home;
