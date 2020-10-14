import axios from "axios";
import querystring from "querystring";
import errorCode from "./errorCode";
import { Message } from "ant-design-vue";
import { filterObject } from "@/utils";

const service = axios.create({
  timeout: 30000,
  withCredentials: true,
  validateStatus: function(status) {
    return status >= 200 && status <= 500; // 默认的
  },
});

// request拦截器
service.interceptors.request.use(
  (config) => {
    // post请求
    if (
      config.method === "post" &&
      config.headers["content-type"] === "application/x-www-form-urlencoded"
    ) {
      let d = filterObject(config.data);
      config.data = querystring.stringify(d);
    }
    // get请求
    if (config.method === "get") {
      config.params = filterObject(config.params);
    }
    return config;
  },
  (error) => {
    return Promise.reject(new Error(error));
  }
);

service.interceptors.response.use(
  (res) => {
    const status = Number(res.status) || 200;
    const message = res.data.msg || errorCode[status] || errorCode["default"];
    let data = new Object();
    if (status === 401) {
      // 登出
      // logout().then(() => {
      //   removeToken();
      //   router.push({
      //     path: "/login"
      //   });
      // });
      return;
    } else if (
      status !== 200 ||
      res.data.code == -1 ||
      res.data.code == 9006 ||
      res.data.code == 9999 ||
      res.data.code == 9003
    ) {
      Message.error({
        content: message,
      });
      return Promise.reject(new Error(message));
    } else {
      data = res.data.data;
    }

    return data;
  },
  (error) => {
    return Promise.reject(new Error(error));
  }
);

export default service;
