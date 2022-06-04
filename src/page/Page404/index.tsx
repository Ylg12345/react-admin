import React from 'react'
import { Button, Result } from "antd";
import '../../assets/scss/error.scss'
import { createBrowserHistory } from 'history';


const Page404 = () => {

	const history = createBrowserHistory();

	const backHome = () => {
		history.push('/')
	}

	return (
		<>
			<Result
				status="404"
				title="404"
				subTitle="很抱歉，你访问的页面不存在！"
				extra={<Button type="primary" onClick={backHome}>回到首页</Button>}
			/>
		</>
	);
}

export default Page404;
