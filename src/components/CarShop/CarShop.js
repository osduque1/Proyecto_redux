// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

import React from 'react';

const CarShop = () => {
  const cerrarSesion = () => {
    console.log('Entra');
  };

  return (
    <div>
      CarShop Principal
      <br />
      <button onClick={cerrarSesion}>Cerrar Sesión</button>
    </div>
  );
};

export default CarShop;

// App.propTypes = {
//     // aplication: PropTypes.oneOfType([PropTypes.object]).isRequired
//   };

//   const mapStateToProps = state => ({

//   });

//   const mapDispatchToProps = dispatch => ({

//   });

//   export default connect(mapStateToProps, mapDispatchToProps)(App);
