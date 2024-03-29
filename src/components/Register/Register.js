import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../Register/Register.scss';
import {
  saveInfo as saveInfoAction
} from '../../actions/storeApp/storeApp.action';
import {
  handleNonMatchedForNames
} from '../../utils/utils';
import md5 from 'md5';

const Register = ({
  isBack,
  saveInfo,
  saveInfoUser
}) => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailCorrect, setIsEmailCorrect] = useState(true);

  const { isError } = saveInfoUser;
  let valueRegex = '';

  const handleRegister = () => {
    let regexEmail = /^(?![.W_])[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9.]+[a-zA-Z0-9]$/;
    let validateEmail = regexEmail.test(email);
    if(validateEmail){
      const infoUser = { 
          name: name,
          lastName: lastName,
          email: email,
          password: password && md5(password)
      }; 
      saveInfo(infoUser);
      if(isBack){
        let registerContainer = document.getElementById('register_container');
        registerContainer.style.display = 'block';
        let tabsContainer = document.getElementById('tabsContainer');
        tabsContainer.style.display = 'none';
      }
    }else{
      setIsEmailCorrect(validateEmail);
    }
  };

  const disabledContinue = !name || !lastName || !email || !password;

  return (
    <div className='Register_containerMain'>
      <div className='Register_containerSecundary'>
        <div className='form-group'>
          <label>NOMBRE</label>
          <input
            className='form-control'
            type='text'
            value={name}
            onChange={ e => {
                    valueRegex = handleNonMatchedForNames(e.target.value);
                    setName(valueRegex); 
                }
            }
            required
          />
          <label>APELLIDO</label>
          <input
            className='form-control'
            type='text'
            value={lastName}
            onChange={ e => {
                    valueRegex = handleNonMatchedForNames(e.target.value);
                    setLastName(valueRegex); 
                }
            }
            required
          />
          <label>EMAIL</label>
          <input
            className='form-control'
            type='email'
            value={email}
            onChange={ e => setEmail(e.target.value) }
            required
          />
          {!isEmailCorrect && <p className='Register_invalidEmail'>Correo Inválido</p>}
          <label>CONTRASEÑA</label>
          <input
            className='form-control'
            type='password'
            value={password}
            onChange={ e => setPassword(e.target.value) }
            required
          />
          <br />
          <button
            id='company_data_step_continue_button'
            type='submit'
            className='btn btn-primary Login_btnIn'
            onClick={handleRegister}
            disabled={disabledContinue}
          >
            Registro
          </button>
        </div>
        {isError && <p className='Register_notRegister'>Ya se registró Previamente</p>}
      </div>
    </div>
  );
};

Register.propTypes = {
  saveInfo: PropTypes.func.isRequired,
  isBack: PropTypes.bool.isRequired,
  saveInfoUser: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  saveInfoUser: state.storeApp.saveInfo
});

const mapDispatchToProps = dispatch => ({
  saveInfo: payload => dispatch(saveInfoAction(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
