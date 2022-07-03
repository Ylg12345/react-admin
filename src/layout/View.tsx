import { Routes } from '../router/routerConfig'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { Suspense } from 'react';
import AdminLayout from './AdminLayout';
import AuthRoute from '../components/AuthRoute';
import Login from '../page/Login';

const View = () => {

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route path='/' exact>
            <Redirect to="/admin/dashboard" />
          </Route>
          <Route>
            <AdminLayout>
              <Switch>
                <Suspense fallback={<></>}>
                  {
                    Routes.map((router) => {
                      return (
                        <AuthRoute path={router.path} exact key={router.id}>
                          {
                            router.redirect ?
                              <Redirect to={router.redirect} from={router.path} />
                              :
                              router.component
                          }
                        </AuthRoute>
                      )
                    })
                  }
                </Suspense>
              </Switch>
            </AdminLayout>
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default View;


