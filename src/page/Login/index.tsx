import { useRef } from "react";
import { Form, FormInstance, Input, Button, Space, message } from "antd";
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { doLogin } from '../../store/actions/AdminAction';
import { useHistory, withRouter } from "react-router";
import '../../assets/scss/login.scss'

import { getLogin } from "../../network/login";
import { set } from "../../utils/storage";
import { RouteComponentProps } from "react-router-dom";

const Layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 }
}

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

interface IProps extends RouteComponentProps {
  login: (data: any) => void
}


const Login = ({ login }: IProps) => {

  const formRef = useRef<FormInstance>(null);
  const history = useHistory();


  const onFinished = async (form: any) => {

    getLogin(form.name, form.password).then(res => {
      const { code, msg } = res.data;
      if (code === 0) {
        const { access_token, admin } = res.data.data;
        set('token', access_token);
        login(admin);
        history.push({
          pathname: '/admin/dashboard'
        })
      } else {
        message.error(msg);
        return Promise.reject(msg);
      }
    });
  }

  return (
    <div
      className="login"
    >
      <Form
        id='login-form'
        {...Layout}
        onFinish={onFinished}
        ref={formRef}
      >
        <Form.Item
          label="用户名"
          name="name"
          rules={[
            {
              required: true,
              message: '用户名不可以为空'
            },
            {
              type: "string",
              min: 2,
              message: '用户名长度不可以小于2位'
            }
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="密码"
          name="password"
          rules={[
            {
              required: true,
              message: '密码不可以为空'
            },
            {
              type: "string",
              min: 2,
              message: '密码长度不可以小于2位'
            }
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Space>
            <Button
              type="primary"
              htmlType="submit"
            >
              登录
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </div>
  )
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  login: (data: any) => {
    doLogin(dispatch, data)
  },
})
export default connect(null, mapDispatchToProps)(withRouter(Login))