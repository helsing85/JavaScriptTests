import axios from "axios";
export default class BaseService {
  constructor() {
    this.url = "http://localhost:3000";
  }

  call(method, endpoint, data = {}, responseType) {
    return new Promise((resolve, reject) => {
      axios({
        method: method,
        url: this.url + endpoint,
        data: data,
        responseType: responseType ? responseType : "json",
      })
        .then((response) => {
          if (response.status !== 200)
            reject(response.data.error || "Unknown error occured!");
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}
