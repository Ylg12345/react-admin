import { useState, useEffect, FC } from 'react'
import { Link, RouteComponentProps, withRouter } from 'react-router-dom'
import { Menu, MenuProps } from 'antd';
import { authRoutes } from '../router/routerMenu'
import { IRoute } from "../router/routerConfig";
import SubMenu from 'antd/lib/menu/SubMenu';

interface IProps extends RouteComponentProps {}

const LeftBar: FC<IProps> = ({ history }) => {

	const [height, setHeight] = useState<number>(0);
	const [menuTreeNode, setMenuTreeNode] = useState<any>(null);
	const [current, setCurrent] = useState('1');

	const onClick: MenuProps['onClick'] = e => {
    setCurrent(e.key);
  };

	const getMenuNodes = (menuList: any) => {
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
						defaultOpenKeys={['sub1']}
						selectedKeys={[current]}
						onClick={onClick}
					>
						{item}
					</Menu>
				))
			}
		</div>
	)
};

export default withRouter(LeftBar)