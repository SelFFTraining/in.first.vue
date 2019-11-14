import axios from 'axios'

const BASE_URL = 'http://localhost:5000/api/task';

let fetch = function ({url = BASE_URL, method = 'get', headers, params, data}) {
  return axios[method](url, {headers, data, params});
};

let getTaskList = function () {
  return fetch({});
};

let deleteTask = function(taskTitle) {
  if(!taskTitle) {
    return
  }
  return fetch({method:'delete', data:{title: taskTitle}})
}

let addTaskList = function ({data}={}) {
  if(!data) {
    return false
  }
  return fetch({method:'post', data})
}

export default {
  fetch,
  getTaskList,
  addTaskList,
  deleteTask
}

