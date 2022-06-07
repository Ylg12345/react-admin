import React, { lazy, ReactNode } from "react"
import Login from "../page/Login"
import Page404 from "../page/Page404"
import { DashboardOutlined, UserOutlined, TeamOutlined, DashboardTwoTone } from '@ant-design/icons';
import Page403 from "../page/Page403";

const DashBoard = lazy(() => import("../page/DashBoard"))
const UserList = lazy(() => import("../page/UserList"))
const RoleList = lazy(() => import('../page/RoleList'))
const AdminList = lazy(() => import("../page/AdminList"))
const Activity = lazy(() => import('../page/Activity'))
const ProductList = lazy(() => import('../page/ProductList'))
const AdminTest = lazy(() => import("../page/AdminTest"))

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
		id: '1-0',
		icon: <DashboardOutlined />,
		exact: true,
		path: '/admin/dashboard',
		title: '仪表盘',
		component: <DashBoard />
	},
	{
		id: '3-0',
		icon: <UserOutlined />,
		path: '/admin/admin',
		title: '管理员管理',
		routes: [
			{
				id: '3-1',
				icon: <UserOutlined />,
				path: '/admin/admin/list',
				title: '管理员列表',
				component: <AdminList />,
			},
			{
				id: '3-2',
				icon: <UserOutlined />,
				path: '/admin/admin/test',
				title: '管理员测试',
				routes: [
					{
						id: '3-2-1',
						icon: <DashboardTwoTone />,
						path: '/admin/admin/test/1',
						title: '管理员测试1',
						component: <AdminTest />,
					},
					{
						id: '3-2-2',
						icon: <DashboardTwoTone />,
						path: '/admin/admin/test/2',
						title: '管理员测试2',
						component: <AdminTest />
					},
				]
			}
		]
	},
	{
		id: '4-0',
		icon: <TeamOutlined />,
		path: '/admin/role',
		title: '角色管理',
		routes: [
			{
				id: '4-1',
				icon: <DashboardTwoTone />,
				path: '/admin/role/list',
				redirect: '/admin/dashboard',
				title: '角色列表',
				component: <RoleList />
			}
		]
	},
	{
		id: '5-0',
		icon: <TeamOutlined />,
		path: '/admin/user',
		title: '用户管理',
		routes: [
			{
				id: '5-1',
				icon: <DashboardTwoTone />,
				path: '/admin/user/list',
				title: '用户列表',
				component: <UserList />
			},
		]
	},
	{
		id: '6-0',
		icon: <TeamOutlined />,
		path: '/admin/activity/',
		title: '活动管理',
		routes: [
			{
				id: '6-1',
				icon: <DashboardTwoTone />,
				path: '/admin/activity/list',
				title: '活动列表',
				component: <Activity />
			}
		]
	},
	{
		id: '7-0',
		icon: <TeamOutlined />,
		path: '/admin/product',
		title: '产品管理',
		routes: [
			{
				id: '7-1',
				icon: <DashboardTwoTone />,
				path: '/admin/product/list',
				title: '产品列表',
				component: <ProductList />
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
		id: '1-0',
		path: '/login',
		title: '登录',
		component: <Login />
	},
	{
		id: '2-0',
		path: '/403',
		title: '403',
		component: <Page403 />
	},
	{
		id: '3-0',
		path: '*',
		title: '404',
		component: <Page404 />
	}
]
