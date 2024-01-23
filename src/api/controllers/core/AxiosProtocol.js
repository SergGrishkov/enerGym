import { Axios } from 'axios';
import { AxiosResponseWrapper } from './AxiosResponseWrapper';

export class AxiosProtocol {
  axiosInstance;

  constructor(baseUrl) {
    const headers = {
      accept: 'application/json',
      'content-type': 'application/json',
    };
    this.axiosInstance = new Axios({
      baseURL: baseUrl,
      headers: { ...headers },
    });
  }

  async get(endpoint, searchParams) {
    const res = await this.axiosInstance.get(endpoint, searchParams);
    return new AxiosResponseWrapper(res);
  }

  async patch(endpoint, params) {
    const res = await this.axiosInstance.patch(endpoint, params);
    return new AxiosResponseWrapper(res);
  }

  async post(endpoint, params) {
    const res = await this.axiosInstance.post(endpoint, params);
    return new AxiosResponseWrapper(res);
  }
}
