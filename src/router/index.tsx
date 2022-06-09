import { lazy, ReactNode } from "react"
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

export const Routes: IRoute[] = [
	{
		id: '01',
		icon: <DashboardOutlined />,
		exact: true,
		path: '/admin/dashboard',
		title: '仪表盘',
		component: <DashBoard />
	},
	{
		id: '02',
		icon: <UserOutlined />,
		path: '/admin/admin/list',
		title: '管理员列表',
		component: <AdminList />,
	},
	{
		id: '03',
		icon: <DashboardTwoTone />,
		path: '/admin/admin/test/1',
		title: '管理员测试1',
		component: <AdminTest />,
	},
	{
		id: '04',
		icon: <DashboardTwoTone />,
		path: '/admin/admin/test/2',
		title: '管理员测试2',
		component: <AdminTest />
	},
	{
		id: '05',
		icon: <DashboardTwoTone />,
		path: '/admin/role/list',
		title: '角色列表',
		component: <RoleList />
	},
	{
		id: '06',
		icon: <DashboardTwoTone />,
		path: '/admin/user/list',
		title: '用户列表',
		component: <UserList />
	},
	{
		id: '07',
		icon: <DashboardTwoTone />,
		path: '/admin/activity/list',
		title: '活动列表',
		component: <Activity />
	},
	{
		id: '08',
		icon: <DashboardTwoTone />,
		path: '/admin/product/list',
		title: '产品列表',
		component: <ProductList />
	},
	{
		id: '09',
		path: '/login',
		title: '登录',
		component: <Login />
	},
	{
		id: '10',
		path: '/403',
		title: '403',
		component: <Page403 />
	},
	{
		id: '11',
		path: '/404',
		title: '404',
		component: <Page404 />
	}
]