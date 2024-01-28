export class AxiosResponseWrapper {
  #response;

  constructor(response) {
    this.#response = response;
  }

  json() {
    return JSON.parse(this.#response.data);
  }

  info() {
    return {
      status: JSON.parse(this.#response.status),
      message: JSON.parse(this.#response.data).message,
    };
  }
  
}
