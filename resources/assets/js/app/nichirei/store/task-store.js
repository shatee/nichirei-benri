import {ReduceStore} from '../../../../../../node_modules/flux/utils';
import TaskAction from '../action/task-action';
import Dispatcher from '../dispatcher';

class TaskStore extends ReduceStore {

  getInitialState() {
    const dataContainer = document.querySelector('.data-container');
    return JSON.parse(dataContainer.dataset.tasks);
  }

  reduce(state, action) {
    switch(action.type) {
      case TaskAction.TYPE.INPUT:
        state.set();
    }
  }

}

export default new TaskStore(Dispatcher);
