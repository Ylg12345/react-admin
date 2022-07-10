import { Routes } from '../router/routerConfig'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { Suspense, useEffect, useState } from 'react';
import AdminLayout from './AdminLayout';
import AuthRoute from '../components/AuthRoute';
import Login from '../page/Login';

const View = () => {

  const urlParams = new URL(window.location.href);
  const pathname = urlParams?.pathname;

  const initalIsRedirect = Routes.map(() => {
    return false;
  })

  const [isRedirectArray, setIsRedirectArray] = useState<boolean[]>(initalIsRedirect)

  const isRedirect404 = () => {
    Routes.forEach((item) => {
      if(pathname === item.path || pathname === '/') { 
        setIsRedirectArray([...isRedirectArray, true]);
      }
    });
  };

  useEffect(() => {
    isRedirect404();
  }, [pathname]);

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
                          {router.component}
                        </AuthRoute> 
                      )
                    })
                  }  
                  {
                    !isRedirectArray.find((item) => item === true) && <Redirect from={pathname} to='/404' />
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




