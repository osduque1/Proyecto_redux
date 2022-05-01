import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "../Login/Login.scss";
import {
  validateInfo as validateInfoAction,
} from "../../actions/storeApp/storeApp.action";
import md5 from "md5";

const Login = ({
  validateInfo
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const infoValidate = { 
      email: email,
      password: password && md5(password)
    }; 
    validateInfo(infoValidate);
  };

  const disabledContinue = !email || !password;

  return (
    <div className="Login_containerMain">
      <div className="Login_containerSecundary">
        <div className="form-group">
          <label>EMAIL</label>
          <br />
          <input
            type="email"
            value={email}
            onChange={ e => setEmail(e.target.value) }
            required
            className="form-control"
          />
          <br />
          <label>CONTRASEÑA</label>
          <br />
          <input
            type="password"
            value={password}
            onChange={ e => setPassword(e.target.value) }
            required
            className="form-control"
          />
          <br />
          <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Suscribirse al Newsletter</label>
          </div>
          <br />
          <button
            id="company_data_step_continue_button"
            type="submit"
            className="btn btn-primary Login_btnIn"
            onClick={handleLogin}
            disabled={disabledContinue}
          >
            Ingreso
          </button>
          <br />
          <a href="/">Olvidé Contraseña</a>
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {
  validateInfo: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  validateInfo: state.storeApp.validateInfo
});

const mapDispatchToProps = dispatch => ({
  validateInfo: payload => dispatch(validateInfoAction(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
