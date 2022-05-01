import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "../Login/Login.scss";
import {
  updateInfoUser as updateInfoUserAction,
} from "../../actions/storeApp/storeApp.action";
// import md5 from "md5";

const Login = ({
  infoUser,
  updateInfoUser
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const iniciarSesion = el => {
    console.log("iniciarSesion", el);
  };

  const disabledContinue = !infoUser.email || !infoUser.password;

  useEffect(() => {
    if ( email || password) {
        updateInfoUser({       
          email: email,
          password: password 
        });
    }
  }, [email, password, updateInfoUser]);

  return (
    <div className="Login_containerMain">
      <div className="Login_containerSecundary">
        <div className="form-group">
          <label>Email: </label>
          <br />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={ e => setEmail(e.target.value) }
            required
          />
          <br />
          <label>Contraseña: </label>
          <br />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={ e => setPassword(e.target.value) }
            required
            className="form-control"
          />
          <br />
          <button
            id="company_data_step_continue_button"
            type="submit"
            className="btn btn-primary"
            onClick={iniciarSesion}
            disabled={disabledContinue}
          >
            Iniciar Sesión
          </button>
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {
  infoUser: PropTypes.oneOfType([PropTypes.object]).isRequired,
  updateInfoUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  infoUser: state.storeApp.infoUser,
});

const mapDispatchToProps = dispatch => ({
  updateInfoUser: payload => dispatch(updateInfoUserAction(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
