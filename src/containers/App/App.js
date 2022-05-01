import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from '../../containers/Home/Home';
import CarShop from '../../components/CarShop/CarShop';
import NotFound from '../../components/NotFound/NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/carrito-de-compras" component={CarShop}/>
        <Route path="*" element={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
