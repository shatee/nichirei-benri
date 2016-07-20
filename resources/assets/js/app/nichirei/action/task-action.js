import Task from '../model/task';

export default class TaskAction {

  static TYPE = {
    INPUT: Symbol('input')
  };

  /**
   * @param {Task} task
   */
  static save(task) {
    task.save().catch((res) => {
      console.log(res);
      console.warn(res);
    });
  }

}
