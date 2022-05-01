import React from 'react';
import Login from '../../components/Login/Login';
import Register from '../../components/Register/Register';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import '../Home/Home.scss';

const Home = () => {
    return (
        <div className='Home_container'>
            <Tabs defaultActiveKey='first' className='Home_Tabs'>
                <Tab eventKey='first' title='INGRESO' className='Home_tabLogin'>
                    <Login />
                </Tab>
                <Tab eventKey='second' title='REGISTRO' className='Home_tabRegister'>
                    <Register />
                </Tab>
            </Tabs>
        </div>
    );
};

export default Home;
