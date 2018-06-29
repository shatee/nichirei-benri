import { dispatch } from '../dispatcher';

export default class NoticeAction {

  static TYPE = {
    FLUSH: Symbol('flush')
  };

  static flush() {
    dispatch({
      type: this.TYPE.FLUSH
    });
  }
}
