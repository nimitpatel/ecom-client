import { BrowserRouter as Router, Route } from 'react-router-dom'

import { Provider } from '../contexts'

import { Layout } from './common/Layout'
import { ProductList } from './products/ProductList'
import { Login } from './auth/Login'
import { Profile } from './profile'

import '../assets/styles/index.scss'

export const App = _ => {
    return (
        <Provider>
            <Router>
                <Layout>
                    <Route path="/login" component={Login} />
                    {/* TODO: Protect routes */}
                    <Route exact path="/" component={ProductList} />
                    <Route exact path="/profile" component={Profile} />
                </Layout>
            </Router>
        </Provider>
    )
}