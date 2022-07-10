import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Login from '../../components/Login/Login';
import Register from '../../components/Register/Register';
import NavBar from '../../components/NavBar/NavBar';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import '../Home/Home.scss';
import Success from '../../assets/images/success.png';

const Home = (
    saveInfo
) => {
    const [isBack, setisBack] = useState(false);
    const [isCompleted, setisCompleted] = useState(false);
    const { isCompleted : isCompletedSave, isError } = saveInfo.saveInfo;
    useEffect(() => {
        if (isCompletedSave) {
            setisCompleted(true);
        }
    }, [isCompletedSave]);

    const handleBack = () => {
        if(isBack){
            let tabsContainerId = document.getElementById('tabsContainer');
            tabsContainerId.style.display = 'block';
        }
        let registerContainer = document.getElementById('register_container');
        registerContainer.style.display = 'none';
        setisBack(true);
    };

    const tabsContainer = () => {
        let key1 = !isError ? 'first' : 'second';
        let key2 = isError ? 'first': 'second';
        return (
            <div id='tabsContainer'>
                <Tabs defaultActiveKey='first' className='Home_Tabs'>
                    <Tab eventKey={key1} title='INGRESO' className='Home_tabLogin'>
                        <Login />
                    </Tab>
                    <Tab eventKey={key2} title='REGISTRO' className='Home_tabRegister'>
                        <Register isBack={isBack} />
                    </Tab>
                </Tabs>
            </div>
        );
    };

    return (
        <div className='Home_container'>
            <NavBar isCompleted={isCompleted}/>
            { isCompleted && !isError ? (
                <div id='register_container'>
                    <img id='success' src={Success} alt='Success' />
                    <p onClick={handleBack} className='Home_back'>Regresar</p>
                </div>
            ) : (
                tabsContainer()
            )}
            { isBack && tabsContainer() }
        </div>
    );
};

Home.propTypes = {
    saveInfo: PropTypes.oneOfType([PropTypes.object]).isRequired
};
  
const mapStateToProps = state => ({
    saveInfo: state.storeApp.saveInfo
});

export default connect(mapStateToProps)(Home);
