import {ReduceStore} from '../../../../../../node_modules/flux/utils';
import Dispatcher from '../dispatcher';
import TaskAction from "../action/task-action";
import NoticeAction from "../action/notice-action";

class NoticeStore extends ReduceStore {

  getInitialState() {
    return {
      isVisibe: false,
      message: null,
      isError: false
    };
  }

  reduce(state, action) {
    switch (action.type) {
      case TaskAction.TYPE.SAVE:
        return Object.assign({}, state, {
          isVisible: true,
          message: '保存しました',
          isError: false
        });
      case TaskAction.TYPE.ERROR:
        return Object.assign({}, state, {
          isVisible: true,
          message: 'エラーが発生しました',
          isError: true
        });
      case TaskAction.TYPE.CONFLICT:
        return Object.assign({}, state, {
          isVisible: true,
          message: 'コンフリクトしました',
          isError: true
        });
      case NoticeAction.TYPE.FLUSH:
        return Object.assign({}, state, {
          isVisible: false,
          message: null,
          isError: false
        });
      default:
        return state;
    }
  }

}

const noticeStore = new NoticeStore(Dispatcher);
export default noticeStore;
