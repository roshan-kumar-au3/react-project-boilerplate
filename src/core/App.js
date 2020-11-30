import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';

import theme from './theme';
import ProductList from '../components/productList';
import ProductDetails from '../components/productDetails';

const App = () => (
  <MuiPickersUtilsProvider utils={MomentUtils}>
    <ThemeProvider theme={theme}>
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={ProductList} />
            <Route path="/products" exact component={ProductList} />
            <Route
              path="/products/:productId/:productColor"
              exact
              component={ProductDetails}
            />
          </Switch>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  </MuiPickersUtilsProvider>
);

export default App;
