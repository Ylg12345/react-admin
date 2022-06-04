import { FC, ReactNode } from 'react'
import { Breadcrumb, Layout, Menu, MenuProps} from 'antd';
import LeftBar from './LeftBar';
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { Header } from 'antd/lib/layout/layout';

const { Sider, Content } = Layout;

interface IAdminLayoutProps extends RouteComponentProps {
	children?: ReactNode
}

const items1: MenuProps['items'] = ['1', '2', '3'].map(key => ({
  key,
  label: `nav ${key}`,
}));

const AdminLayout: FC<IAdminLayoutProps> = ({ children }) => {

	return (
		<>
			<Layout style={{ height: '100vh' }}>
				<Header className="header">
					<div className="logo" />
					<Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
				</Header>
				<Layout>
					<Sider width={200} className="site-layout-background">
						<LeftBar />
					</Sider>
					<Layout style={{ padding: '0 24px 24px' }}>
						<Breadcrumb style={{ margin: '16px 0' }}>
							<Breadcrumb.Item>Home</Breadcrumb.Item>
							<Breadcrumb.Item>List</Breadcrumb.Item>
							<Breadcrumb.Item>App</Breadcrumb.Item>
						</Breadcrumb>
						<Content
							className="site-layout-background"
							style={{
								padding: 24,
								margin: 0,
								minHeight: 280,
							}}
						>
							{children}
						</Content>
					</Layout>
				</Layout>
			</Layout>
		</>
	)
}


export default (withRouter(AdminLayout))

