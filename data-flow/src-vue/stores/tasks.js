import { defineStore } from "pinia";
import TasksService from "@/services/TasksService";

export const useTasksStore = defineStore({
  id: "tasks",
  state: () => ({
    tasks: [],
  }),
  getters: {
    getTasks: (state) => state.tasks,
    getTask: (state) => {
      return (id) => state.tasks.find((task) => task.id == id);
    },
  },
  actions: {
    insertTask(name) {
      const id =
        this.tasks.length == 0 ? 1 : this.tasks[this.tasks.length - 1].id + 1;

      let date = new Date().toISOString();
      date = date.replace("T", " ");
      date = date.substring(0, 19);

      const task = { id: id, name: name, date: date, status: "not-completed" };
      this.tasks.push(task);
    },
    removeTask(id) {
      //console.log(id);
      this.tasks = this.tasks.filter((task) => task.id !== id);
    },
    copleteTask(id) {
      const ind = this.tasks.findIndex((task) => task.id == id);
      //console.log(ind);
      this.tasks[ind].status = "Completed";
    },
    insertTasks(tasks) {
      this.tasks = tasks;
    },
    loadTasks() {
      const service = new TasksService();
      service.getTasks().then((response) => {
        this.insertTasks(response);
      });
    },
    changeTaskName(id, name) {
      const ind = this.tasks.findIndex((task) => task.id == id);
      this.tasks[ind].name = name;
    },
  },
});
