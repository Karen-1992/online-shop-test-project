import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Header from "./components/ui/header/header";
import CategoriesProvider from "./hooks/useCategories";
import CurrenciesProvider from "./hooks/useCurrencies";
import CartProvider from "./hooks/useCart";
import Cart from "./layouts/cart";
import Products from "./layouts/products";
import Order from "./components/pages/orderPage/order";

const App = () => {
    return (
        <div className="wrapper">
            <CartProvider>
                <CategoriesProvider>
                    <CurrenciesProvider>
                        <Header />
                        <Switch>
                            <Route
                                path="/cart"
                                exact
                                component={Cart}
                            />
                            <Route
                                path="/cart/order"
                                exact
                                component={Order}
                            />
                            <Route
                                path="/:categoryName?/:productId?"
                                exact
                                component={Products}
                            />
                            <Redirect to="/" />
                        </Switch>
                    </CurrenciesProvider>
                </CategoriesProvider>
            </CartProvider>
        </div>
    );
};

export default App;
