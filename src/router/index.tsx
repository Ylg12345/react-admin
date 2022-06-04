import React, { lazy, ReactNode } from "react"
import Login from "../page/Login"
import Page404 from "../page/Page404"
import { DashboardOutlined, UserOutlined, TeamOutlined, DashboardTwoTone } from '@ant-design/icons';
import Page403 from "../page/Page403";
import UserList from "../page/UserList";
import Activity from "../page/Activity";
import ProductList from "../page/ProductList";
import RoleList from "../page/RoleList";
import AdminList from "../page/AdminList";
import AdminTest from "../page/AdminTest";

const DashBoard = lazy(() => import("../page/DashBoard"))

export interface IRoute {
    id: string,
    exact?: boolean
    path: string
    title: string
    parentId?: number
    isMenu?: number
    component?: ReactNode
    routes?: IRoute[]
    redirect?: string
    icon?: ReactNode
}

export interface PermissionState {
    loading: boolean
    permissionList: IRoute[]
}

export const leftRoute: IRoute[] = [
  {
    id: '1-1',
    icon: <DashboardOutlined/>,
    exact: true,
    path: '/admin/dashboard',
    title: '仪表盘',
    isMenu: 0,
    component: <DashBoard/>
},
{
    id: '3-0',
    icon: <UserOutlined/>,
    path: '/admin/list',
    title: '管理员管理',
    isMenu: 1,
    routes: [
        {
            id: '3-1',
            icon: <UserOutlined/>,
            path: '/admin/admin/list',
            title: '管理员列表',
            isMenu: 0,
            component: <AdminList/>,
        },
        {
            id: '3-2',
            icon: <UserOutlined/>,
            path: '/admin/admin/test',
            title: '管理员测试',
            isMenu: 0,
            component: <AdminTest/>,
        }
    ]
},
{
    id: '4-0',
    icon: <TeamOutlined/>,
    path: '/admin/role',
    title: '角色管理',
    isMenu: 1,
    routes: [
        {
            id: '4-1',
            icon: <DashboardTwoTone/>,
            path: '/admin/role/list',
            title: '角色列表',
            isMenu: 0,
            component: <RoleList/>
        }
    ]
},
{
    id: '5-0',
    icon: <TeamOutlined/>,
    path: '/admin/user',
    title: '用户管理',
    isMenu: 1,
    routes: [
        {
            id: '5-1',
            icon: <DashboardTwoTone/>,
            path: '/admin/user/list',
            title: '用户列表',
            isMenu: 0,
            component: <UserList/>
        },
    ]
},
{
    id: '6-0',
    icon: <TeamOutlined/>,
    path: '',
    title: '活动管理',
    isMenu: 1,
    routes: [
        {
            id: '6-1',
            icon: <DashboardTwoTone/>,
            path: '/admin/activity/list',
            title: '活动列表',
            isMenu: 0,
            component: <Activity/>
        }
    ]
},
{
    id: '7-0',
    icon: <TeamOutlined/>,
    path: '',
    title: '产品管理',
    isMenu: 1,
    routes: [
        {
            id: '7-1',
            icon: <DashboardTwoTone/>,
            path: '/admin/product/list',
            title: '产品列表',
            isMenu: 0,
            component: <ProductList/>
        }
    ]
}
]
export const topRoute: IRoute[] = []

export const authRoutes: IRoute[] = [
    ...leftRoute,
    ...topRoute
]
export const unAuthRouters: IRoute[] = [
    {
        id: '0-0',
        path: '/login',
        title: '登录',
        isMenu: 1,
        component: <Login/>
    },
    {
        id: '55555555555555555-0',
        path: '/403',
        title: '403',
        isMenu: 0,
        component: <Page403/>
    },
    {
        id: '6666666666666666-0',
        path: '*',
        title: '404',
        isMenu: 0,
        component: <Page404/>
    }
]
