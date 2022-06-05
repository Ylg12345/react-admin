import React from 'react'
import { Button, Result } from "antd";
import '../../assets/scss/error.scss'
import { useHistory } from 'react-router-dom';


const Page403 = () => {

    const history = useHistory();

    const backHome = () => {
      history.push({
        pathname: '/'
      });
    }

    return (
      <>
        <Result
            status="403"
            title="403"
            subTitle="很抱歉，你没有权限访问这个页面"
            extra={<Button type="primary" onClick={backHome}>回到首页</Button>}
        />
      </>
    );
}

export default Page403;