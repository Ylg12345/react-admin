import { useState, useEffect, FC } from 'react'
import { Link, RouteComponentProps, withRouter } from 'react-router-dom'
import { Menu } from 'antd';
import { authRoutes } from '../router/routerMenu'
import { IRoute } from "../router/routerConfig";
import SubMenu from 'antd/lib/menu/SubMenu';

interface IProps extends RouteComponentProps {}

const LeftBar: FC<IProps> = ({ location }) => {

	const [height, setHeight] = useState<number>(0);
	const [defaultOpenKeys, setDefaultOpenKeys] = useState<string[]>([]);
	const [menuTreeNode, setMenuTreeNode] = useState<any>(null);

	const getMenuNodes = (menuList: any) => {
		const { pathname } = location;
    return menuList.reduce((pre: any, item: IRoute) => {
			if (!item.routes) {
				pre.push(
					<Menu.Item 
						key={item.id} 
						icon={item.icon}
					>
						<Link to={item.path}>{item.title}</Link>
					</Menu.Item>
				);
			} else {
				const cItem = item.routes.find((r) => pathname.indexOf(r.path) === 0);
				if(cItem) {
					setDefaultOpenKeys([...defaultOpenKeys, item.path])
				}
				pre.push(
					<SubMenu
						key={item.id}
						icon={item.icon}
						title={item.title}
					>
						{getMenuNodes(item.routes)}
					</SubMenu>
				);
			}
      return pre;
    }, []);
  };

	useEffect(() => {
		setMenuTreeNode(getMenuNodes(authRoutes));
		return () => {
			setHeight(document.body.clientHeight - 62);
		}
	}, [])

	return (
		<div style={{minHeight: height + 'px'}}>
			{
				menuTreeNode?.map((item: any, index: number) => (
					<Menu
						mode="inline"
						theme="dark"
						selectedKeys={[location.pathname]}
						defaultOpenKeys={defaultOpenKeys}
					>
						{item}
					</Menu>
				))
			}
		</div>
	)
};

export default withRouter(LeftBar)