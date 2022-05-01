import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "../Register/Register.scss";
import {
  updateInfoUser as updateInfoUserAction,
} from "../../actions/storeApp/storeApp.action";
import {
  handleNonMatchedForNames
} from '../../utils/utils';
import md5 from "md5";

const Login = ({
  infoUser,
  updateInfoUser
}) => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let valueRegex = "";

  const iniciarSesion = el => {
    console.log("iniciarSesion", el);
  };

  const disabledContinue = !infoUser.name || 
    !infoUser.lastName || 
    !infoUser.email || 
    !infoUser.password;

  useEffect(() => {
    if ( name || lastName || email || password) {
        updateInfoUser({       
          name: name,
          lastName: lastName,
          email: email,
          password: md5(password) 
        });
    }
  }, [name, lastName, email, password, updateInfoUser]);

  return (
    <div className="Register_containerMain">
      <div className="Register_containerSecundary">
        <div className="form-group">
          <label>Nombre: </label>
          <br />
          <input
              type="text"
              placeholder="Nombre"
              value={name}
              onChange={ e => {
                  valueRegex = handleNonMatchedForNames(e.target.value);
                  setName(valueRegex); 
                }
              }
              required
          />
          <br />
          <label>Apellido: </label>
          <br />
          <input
              type="text"
              placeholder="Apellido"
              value={lastName}
              onChange={ e => {
                valueRegex = handleNonMatchedForNames(e.target.value);
                setLastName(valueRegex); 
              }
            }
              required
          />
          <br />
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
            onSubmit={iniciarSesion}
            disabled={disabledContinue}
          >
            Registro
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
