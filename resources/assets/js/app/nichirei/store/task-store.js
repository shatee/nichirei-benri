import {ReduceStore} from '../../../../../../node_modules/flux/utils';
import TaskAction from '../action/task-action';
import Dispatcher from '../dispatcher';
import Task from '../model/task';

class TaskStore extends ReduceStore {

  getInitialState() {
    const dataContainer = document.querySelector('.data-container');
    return JSON.parse(dataContainer.dataset.tasks).map((data) => new Task({
      id: data.id,
      lineId: data.lineId,
      createdAt: new Date(data['created_at']),
      updatedAt: new Date(data['updated_at']),
      date: data.date,
      type: data.type,
      content: data.content
    }));
  }

  reduce(state, action) {
    switch(action.type) {
      case TaskAction.TYPE.INPUT:
        state.set();
    }
  }

}

export default new TaskStore(Dispatcher);
