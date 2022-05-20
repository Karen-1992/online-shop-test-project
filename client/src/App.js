import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import { useQuery } from '@apollo/client';
import './App.css';
import { API } from './query/data';
import Header from './components/header';
import Home from './components/layouts/home';
import Cart from './components/layouts/cart';

function App() {
    const { data, loading, error } = useQuery(API);
    return (
        <div className="App">
            {data
                ? (
                    <div className="App">
                        <Header categories={data.categories}/>
                    </div>
                ) : (
                    <p>Loading</p>
                )
            }
            <Switch>
                <Route path="/" exact render={() => <Home data={data}/>} />
                <Route path="/cart" component={Cart} />
                <Redirect to="/" />
            </Switch>
        </div>
    );
}

export default App;
