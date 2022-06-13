import { IRoute } from './routerConfig';
import { DashboardOutlined, UserOutlined, TeamOutlined, DashboardTwoTone } from '@ant-design/icons';

export const leftRoute: IRoute[] = [
	{
		id: '1-0',
		icon: <DashboardOutlined />,
		path: '/admin/dashboard',
		title: '仪表盘',
	},
	{
		id: '3-0',
		icon: <UserOutlined />,
		path: '/admin/manage',
		title: '管理员管理',
		routes: [
			{
				id: '3-1',
				icon: <UserOutlined />,
				path: '/admin/manage/list',
				title: '管理员列表',
			},
			{
				id: '3-2',
				icon: <UserOutlined />,
				path: '/admin/manage/test',
				title: '管理员测试',
				routes: [
					{
						id: '3-2-1',
						icon: <DashboardTwoTone />,
						path: '/admin/manage/test/1',
						title: '管理员测试1',
					},
					{
						id: '3-2-2',
						icon: <DashboardTwoTone />,
						path: '/admin/manage/test/2',
						title: '管理员测试2',
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
				title: '角色列表',
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
			}
		]
	},
]
export const topRoute: IRoute[] = []

export const authRoutes: IRoute[] = [
	...leftRoute,
	...topRoute
]