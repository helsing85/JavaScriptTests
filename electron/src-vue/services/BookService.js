import BaseService from "@/services/BaseService";

export default class BookService extends BaseService {
    constructor() {
        super();
        this.endpoint = "/api/books/";
    }

    getData() {
        return this.call("GET", this.endpoint);
    }
}