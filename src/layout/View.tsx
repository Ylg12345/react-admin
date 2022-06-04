import { authRoutes, IRoute, unAuthRouters } from '../router'
import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { ReactNode, Suspense } from 'react';
import AdminLayout from './AdminLayout';
import { get } from '../utils/storage';

const View = () => {

  const token = get('token');
  const generateRouter = (routerList: IRoute[]): ReactNode => {
    return (
      <>
        {
          routerList?.map((router) => {
            if(router.routes) {
              return (
                <div key={router.id}>
                  {generateRouter(router.routes)}
                </div>
              )
            }
            return (
              <Route path={router.path} exact key={router.id}>
                {
                  router.redirect ?
                    <Redirect to={router.redirect} from={router.path} />
                    :
                    router.component
                }
              </Route>
            )
          })
        }
      </>
    );
  };

  return (
    <>
      <Router>
        <Switch>
          <Route path={'/'} exact>
            {
              token ? <Redirect to={'/admin/dashboard'} /> : <Redirect to={'/login'} />
            }
          </Route>
          <Route path={'/admin'}>
            <Switch>
              <AdminLayout>
                <Suspense fallback={<></>}>
                  {generateRouter(authRoutes)}
                </Suspense>
              </AdminLayout>
            </Switch>
          </Route>
          {
            unAuthRouters.map((route) => (
              <Route path={route.path} exact key={route.id}>
                {route.component}
              </Route>
            ))
          }
        </Switch>
      </Router>
    </>
  )
}

export default View;


