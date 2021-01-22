import React from 'react';
import {
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import { DcScreen } from '../components/dc/DcScreen';
import { HeroeScreen } from '../components/heroes/HeroeScreen';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { SearchHeroForm } from '../components/search/SearchHeroForm';
import { Navbar } from '../components/ui/Navbar';

export const DashboardRouter = () => {
    return (
        <>

            <Navbar />
            <Switch>
                <Route exact path='/marvel' component={MarvelScreen} />
                <Route exact path='/dc' component={DcScreen} />
                <Route exact path='/hero/:heroeId' component={HeroeScreen} />
                <Route exact path="/search" component={SearchHeroForm} />
                <Redirect to="/marvel" />

            </Switch>
        </>
    )
}
