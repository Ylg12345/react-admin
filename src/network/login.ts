import request from "./request";

export const getLogin = (username: string, password: string) => {
  return request({
    url: '/auth/login',
    method: 'post',
    data: {
      username, 
      password
    }
  })
};