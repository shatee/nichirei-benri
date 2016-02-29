export default class Task {

  id;
  lineId;
  createdAt;
  updatedAt;
  date;
  type;
  content;

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
