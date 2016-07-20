import {ReduceStore} from '../../../../../../node_modules/flux/utils';
import Dispatcher from '../dispatcher';
import Line from '../model/line';

class LineStore extends ReduceStore {

  getInitialState() {
    const dataContainer = document.querySelector('.data-container');
    return JSON.parse(dataContainer.dataset.lines).map((data) => new Line({
      id: data.id,
      name: data.name,
      jiraName: data['jira_name'],
      iconUrl: data['icon_url'],
      type: data.type,
      createdAt: new Date(data['created_at']),
      updatedAt: new Date(data['updated_at']),
      listOrder: parseInt(data['list_order'], 10),
      visible: data.visible === '1'
    }));
  }

  reduce(state, action) {
  }

}

export default new LineStore(Dispatcher);
