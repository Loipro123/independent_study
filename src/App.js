import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Header from "./main_component/header/header.component";
import ProductDetail from "./page/product_detail/product_detail.component";
import Setting from "./page/setting/setting.component";
import Product from "./page/product/product.component";
import CheckOut from "./page/checkout/checkout.component";
import Home from "./page/home/home.component";
import Footer from "./main_component/footer/footer.component";
const App = () => {
  return (
    <div className="App">
      <Header />
      <div className='app_body'>
      <Switch>
              <Route exact path="/productDetail" component={ProductDetail} />
              <Route exact path="/setting" component={Setting} />
              <Route exact path="/product" component={Product} />
              <Route exact path="/checkout" component={CheckOut} />
              <Route exact path="/" component={Home} />
        </Switch>  
        <Footer />
      </div>
    </div>
  );
};

export default App;
