import React, { useState, useEffect, FC } from 'react'
import { Link, matchPath, RouteComponentProps, useHistory, withRouter } from 'react-router-dom'
import { Menu } from 'antd';
import { authRoutes, leftRoute } from '../router';
import { IRoute } from "../router";
import SubMenu from 'antd/lib/menu/SubMenu';

interface IProps extends RouteComponentProps {

}

const LeftBar: FC<IProps> = () => {

	const [height, setHeight] = useState<number>(0);
	const [defaultKeys, setDefaultKeys] = useState<string[]>([]);
	const [defaultOpenKeys, setDefaultOpenKeys] = useState<string[]>([]);

	const history = useHistory();

	const	highLightMenu = (authRoutes?: IRoute[], route?: IRoute) => {
		let path = history.location.pathname
		authRoutes?.forEach((r: IRoute) => {
				let match = matchPath(path, {
						path: r.path,
						exact: true,
						strict: false
				})
				if (match !== null) {
						if (route) {
							setDefaultKeys([...defaultKeys, r.id]);
							setDefaultOpenKeys([...defaultOpenKeys, route.id]);
						} else {
							setDefaultKeys([...defaultKeys, r.id]);
						}
						return
				} else {
						highLightMenu(r?.routes, r);
				}
		})
	}

	useEffect(() => {
		return () => {
			highLightMenu(authRoutes);
			setHeight(document.body.clientHeight - 62);
		}
	}, [])

	const generateMenu = (routerList?: IRoute[]) => {
		return (
			<>
				{
					routerList?.map((router) => {
							if (router.routes) {
								return (
									<SubMenu
										key={router.id}
										icon={router.icon}
										title={router.title}
									>
										{generateMenu(router.routes)}
									</SubMenu>
								)
							} 
							return (
								<Menu.Item key={router.id} icon={router.icon}>
									<Link to={router.path}>{router.title}</Link>
								</Menu.Item>
							)
						}
					)
				}
			</>
		)
	}

	return (
		<div style={{minHeight: height + 'px'}}>
			{
				defaultKeys.length > 0 ?
					< Menu
							theme="dark"
							mode="inline"
							defaultSelectedKeys={defaultKeys}
							defaultOpenKeys={defaultOpenKeys}
					>
							{generateMenu(leftRoute)}
					</Menu>
					:
					null
			}
		</div>
	)
	

};



export default withRouter(LeftBar)