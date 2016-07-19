'use strict';

export default class Line {

  static TYPE = {
    PROGRESS: 'progress',
    INFORMATION: 'information'
  };

  /** @type {number} */
  id = null;

  /** @type {string} */
  name = null;

  /** @type {string|null} */
  jiraName = null;

  /** @type {string|null} */
  iconUrl = null;

  /** @type {string|null} */
  type = null;

  /** @type {Date|null} */
  createdAt = null;

  /** @type {Date|null} */
  updatedAt = null;

  /** @type {number|null} */
  listOrder = null;

  /** @type {boolean|null} */
  visible = null;

  constructor({id, name, jiraName, iconUrl, type, createdAt, updatedAt, listOrder, visible}) {
    this.id = id;
    this.name = name;
    this.jiraName = jiraName;
    this.iconUrl = iconUrl;
    this.type = type;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.listOrder = listOrder;
    this.visible = visible;
  }
  
}