import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';

import ListUserComponent from './components/user/ListUserComponent';
import CreateUserComponent from './components/user/CreateUserComponent';
import ViewUserComponent from './components/user/ViewUserComponent';

import ListProductComponent from './components/products/ListProductComponent';
import CreateProductComponent from './components/products/CreateProductComponent';
import ViewProductComponent from './components/products/ViewProductComponent';



import About from './components/about/about';
import Content from './components/content/content';
import Software from './components/software/software';
import Product from './components/product/product';
import Landing from './components/landing/landing';

import Softdemo from './components/software/softdemo/softdemo';
import Proddemo from './components/product/proddemo/proddemo';
import Contdemo from './components/content/contdemo/contdemo';
import Abotdemo from './components/about/abotdemo/abotdemo';


function App() {
  return (
    <div>
        <Router>
            <HeaderComponent />

                              <Route path="/landing" component={Landing}></Route>
                              <Route path="/about" component={About}></Route>
                              <Route path="/content" component={Content}></Route>
                              <Route path="/software" component={Software}></Route>
                              <Route path="/product" component={Product}></Route>

                              <Route path="/software/demo" component={Softdemo}></Route>
                              <Route path="/product/demo" component={Proddemo}></Route>
                              <Route path="/content/demo" component={Contdemo}></Route>
                              <Route path="/about/demo" component={Abotdemo}></Route>

                <div className="container">
                    <Switch>
                          <Route path = "/" exact component = {ListUserComponent}></Route>
                          <Route path = "/users" component = {ListUserComponent}></Route>
                          <Route path = "/add-user/:id" component = {CreateUserComponent}></Route>
                          <Route path = "/view-user/:id" component = {ViewUserComponent}></Route>
                    </Switch>
                </div>
                <div className="container">
                    <Switch>
                          <Route path = "/" exact component = {ListProductComponent}></Route>
                          <Route path = "/products" component = {ListProductComponent}></Route>
                          <Route path = "/add-product/:id" component = {CreateProductComponent}></Route>
                          <Route path = "/view-product/:id" component = {ViewProductComponent}></Route>
                    </Switch>
                </div>
              <FooterComponent />
        </Router>
    </div>
    
  );
}

export default App;
