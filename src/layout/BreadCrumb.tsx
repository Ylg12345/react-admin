import { matchPath,  withRouter } from "react-router-dom";
import { Breadcrumb } from "antd";
import { authRoutes } from "../router";
import { IRoute } from "../router";
import { ReactNode } from "react";



const BreadCrumb = (props: any) => {

  const generateBreadCrumb = (routerList: IRoute[]): ReactNode => {
    const { location } = props;
    let { pathname } = location;

    return (
      <>
        {
          routerList.map((router) => {
            
            let match = matchPath(pathname, { path: router.path });

            if(match !== null) {
              return (
                <>
                  <Breadcrumb.Item>{ router.title }</Breadcrumb.Item>
                  {
                    router.routes ?
                      generateBreadCrumb(router.routes) :
                      null
                  }
                </>
              )
            }
            return null;
          })
        }
      </>
    );
  };


  return (
    <Breadcrumb style={{ margin: '16px 0' }}>
      {generateBreadCrumb(authRoutes)}
    </Breadcrumb>
  );
};

export default withRouter(BreadCrumb);