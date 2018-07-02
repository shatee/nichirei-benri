import Task from '../model/task';
import { dispatch } from '../dispatcher';

export default class TaskAction {

  static TYPE = {
    INPUT: Symbol('input'),
    CONFLICT: Symbol('conflict'),
    SAVE: Symbol('save'),
    ERROR: Symbol('error')
  };

  /**
   * @param {Task} task
   */
  static save(task) {
    task.save().then(() => {
      console.log('SUCCESS', task);
      dispatch({
        type: this.TYPE.SAVE,
        task
      });
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
