import { BrowserRouter as Router, Route } from 'react-router-dom'

import { Provider } from '../contexts'

import { Layout } from './common/Layout'
import { ProductList } from './products/ProductList'

import '../assets/styles/index.scss'

export const App = _ => {
    return (
        <Provider>
            <Router>
                <Layout>
                    <Route exact path="/" component={ProductList} />
                </Layout>
            </Router>
        </Provider>
    )
}