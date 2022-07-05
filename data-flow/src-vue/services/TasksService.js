import BaseService from "@/services/BaseService";
export default class TasksService extends BaseService {
  constructor() {
    super();
    this.endpoint = "/api";
  }

  getTasks() {
    return this.call("GET", this.endpoint + "/tasks");
  }
}
