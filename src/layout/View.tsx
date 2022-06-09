import { Routes } from '../router'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { Suspense } from 'react';
import AdminLayout from './AdminLayout';
import AuthRoute from '../components/AuthRoute';

const View = () => {

  return (
    <>
      <Router>
        <Switch>
          <AdminLayout>
            <Suspense fallback={<></>}>
              <Redirect exact from="/" to="/dashboard" />
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
              <Redirect to="/404" />
            </Suspense>
          </AdminLayout>
        </Switch>
      </Router>
    </>
  )
}

export default View;


