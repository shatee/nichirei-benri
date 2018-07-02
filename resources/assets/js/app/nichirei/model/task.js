export default class Task {

  static TYPE = {
    DO: 'do',
    DID: 'did',
    INFORMATION: 'information'
  };

  /** @type {number|null} */
  id = null;
  /** @type {number|null} */
  lineId = null;
  /** @type {Date|null} */
  createdAt = null;
  /** @type {Date|null} */
  updatedAt = null;
  /** @type {string|null} */
  date = null;
  /** @type {string|null} */
  type = null;
  /** @type {string|null} */
  content = null;
  /** @type {number} */
  revision = 0;
  
  constructor({id, lineId, createdAt, updatedAt, date, type, content, revision}) {
    this.id = id;
    this.lineId = lineId;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.date = date;
    this.type = type;
    this.content = content;
    this.revision = revision;
  }

  /**
   * @returns {Promise}
   */
  save() {
    return Task.save(this);
  }

  /**
   * @param {Task} task
   * @return {Promise}
   */
  static save(task) {
    return Task._post('/task/set', {
      id: task.id || 0,
      line_id: task.lineId,
      date: task.date,
      type: task.type,
      content: task.content,
      current_revision: task.revision || 0
    }).then((response) => {
      task.id = response.task.id;
      task.revision = response.task.revision;
    });
  }

  /**
   * @param {string} url
   * @param {object} data
   * @returns {Promise}
   * @private
   */
  static _post(url, data) {
    const formData = new FormData();
    for (let key in data) {
      formData.append(key, data[key]);
    }

    return fetch(url, {
      method: 'post',
      body: formData
    }).then((response) => {
      return response.json();
    }).then((json) => {
      if (json.status !== 200) {
        return Promise.reject(json);
      }
      return json;
    });
  }
}
