import Dispatcher from '../dispatcher';
import Task from '../model/task';

export default class TaskAction {

  static TYPE = {
    INPUT: Symbol('input')
  };

  static save(task) {
    task.save().catch((res) => {
      console.log(res);
      console.warn(res);
    });
  }

}
