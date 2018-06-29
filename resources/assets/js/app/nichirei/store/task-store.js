import {ReduceStore} from '../../../../../../node_modules/flux/utils';
import TaskAction from '../action/task-action';
import Dispatcher from '../dispatcher';
import Task from '../model/task';

class TaskStore extends ReduceStore {

  getInitialState() {
    const dataContainer = document.querySelector('.data-container');
    console.log(JSON.parse(dataContainer.dataset.tasks));
    return JSON.parse(dataContainer.dataset.tasks).map((data) => new Task({
      id: data.id,
      lineId: parseInt(data['line_id'], 10),
      createdAt: new Date(data['created_at']),
      updatedAt: new Date(data['updated_at']),
      date: data.date,
      type: data.type,
      content: data.content,
      revision: parseInt(data.revision, 10)
    }));
  }

  /**
   * @param {Task[]} action
   * @return {Task[]}
   */
  reduce(state, action) {
    // switch(action.type) {
    //   case TaskAction.TYPE.INPUT:
    //     state.set();
    // }
    return state;
  }

}

const taskStore = new TaskStore(Dispatcher);
export default taskStore;
