import { AxiosProtocol } from './AxiosProtocol';

export class BaseController {
  #baseUrl = 'https://energyflow.b.goit.study/api/';
  #context = new AxiosProtocol(this.#baseUrl);

  async get(endpoint, config = '') {
    return config
      ? await this.#context.get(endpoint, config)
      : await this.#context.get(endpoint);
  }

  async patch(endpoint, config = '') {
    return config
      ? await this.#context.patch(endpoint, config)
      : await this.#context.patch(endpoint);
  }

  async post(endpoint, config = '') {
    return config
      ? await this.#context.post(endpoint, config)
      : await this.#context.post(endpoint);
  }

  setPathParameters(url, params) {
    let path = url;
    for (const key in params) {
      path = path.replace(`{${key}}`, params[key]);
    }
    return path;
  }
}
