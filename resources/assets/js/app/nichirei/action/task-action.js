import Task from '../model/task';
import { dispatch } from '../dispatcher';

export default class TaskAction {

  static TYPE = {
    INPUT: Symbol('input'),
    CONFLICT: Symbol('conflict'),
    ERROR: Symbol('error')
  };

  /**
   * @param {Task} task
   */
  static save(task) {
    task.save().then((res) => {
      console.log('SUCCESS', res);
    }).catch((res) => {
      if (res.status && res.status === 409) {
        dispatch({
          type: this.TYPE.CONFLICT
        });
      } else {
        console.error('FAIL', res);
        dispatch({
          type: this.TYPE.ERROR
        });
      }
    });
  }

}
