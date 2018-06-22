const ROOT_URL = "https://api.myjson.com/bins";

export function getLogs() {
  const request = fetch(`${ROOT_URL}/1952s2`, {
    method: "GET"
  }).then(response => response.json());

  return {
    type: "GET_LOGS",
    payload: request
  };
}

export function getUsers() {
  const request = fetch(`${ROOT_URL}/tfvk2`, {
    method: "GET"
  }).then(response => response.json());

  return {
    type: "GET_USERS",
    payload: request
  };
}

export function addLogs(payload) {
  return {
    type: "ADD_LOGS",
    payload
  };
}

export function addUsers(payload) {
  return {
    type: "ADD_USERS",
    payload
  };
}

export function logIn(payload) {
  return {
    type: "LOG_IN",
    payload
  };
}
