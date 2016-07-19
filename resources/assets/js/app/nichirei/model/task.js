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
  
  constructor({id, lineId, createdAt, updatedAt, date, type, content}) {
    this.id = id;
    this.lineId = lineId;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.date = date;
    this.type = type;
    this.content = content;
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
      line_id: task.lineId,
      date: task.date,
      type: task.type,
      content: task.content
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

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('POST', url);
      xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          resolve(xhr.responseText);
        } else {
          reject(xhr.responseText);
        }
      };
      xhr.send(formData);
    });
  }
}
