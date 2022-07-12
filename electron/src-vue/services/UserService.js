import BaseService from "@/services/BaseService";

export default class UserService extends BaseService {
    constructor() {
        super();
        this.endpoint = "/api/users/";
    }

    getData() {
        return this.call("GET", this.endpoint);
    }
}