import axios from 'axios';
import AxiosShortcut from 'axios-shortcut';
import { isPlainObject } from 'lodash-es';
import { showFailToast } from 'vant';

const axiosInstance = axios.create({
  baseURL: '/',
});

// JSON 格式的响应默认返回 response.data.data，如果有特例需要返回 response，则写入 rawResponseList
const rawResponseList = [];
axiosInstance.interceptors.response.use(
  (response) => {
    if (isPlainObject(response.data)) {
      if (rawResponseList.includes(response.config.url)) {
        return response;
      }
      if (response.data.code === '10000') {
        return response.data.data;
      }
      // 展示报错信息
      if (response.data.message) {
        showFailToast(response.data.message);
      }
      return Promise.reject(response.data);
    }
    return response;
  },
  (error) => {
    showFailToast(error.message);
    return Promise.reject(error);
  },
);

const { GET, DELETE, HEAD, OPTIONS, POST, PUT, PATCH, DOWNLOAD } = AxiosShortcut(axiosInstance);

export { GET, DELETE, HEAD, OPTIONS, POST, PUT, PATCH, DOWNLOAD };
