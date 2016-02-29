import {Dispatcher} from 'flux/utils';

const dispatcher = new Dispatcher();
export default dispatcher;
export const dispatch = dispatcher.dispatch.bind(dispatcher);
