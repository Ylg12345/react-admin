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
          <AdminLayout>
            <Suspense fallback={<></>}>
              <Route exact path="/login" component={Login} />
              <Route path='/'>
                <Redirect exact to="/admin/dashboard" />
              </Route>
              <Route path='/admin'>
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
                {/* <Redirect from='*' to="/404" /> */}
              </Route>
            </Suspense>
          </AdminLayout>
        </Switch>
      </Router>
    </>
  )
}

export default View;


