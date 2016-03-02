import {ReduceStore} from '../../../../../../node_modules/flux/utils';
import Dispatcher from '../dispatcher';

class LineStore extends ReduceStore {

  getInitialState() {
    const dataContainer = document.querySelector('.data-container');
    return JSON.parse(dataContainer.dataset.lines);
  }

  reduce(state, action) {
  }

}

export default new LineStore(Dispatcher);
