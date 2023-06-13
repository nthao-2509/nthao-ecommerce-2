import axios from 'axios'

function getQueryHelper(url: string) {
  return new Promise((resolve, reject) => {
    axios({
      method: 'GET',
      url: `${url}`,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Platform: 'WEB',
      },
    })
      .then((response) => {
        resolve(response.data.data)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

function postQueryHelper(url: string, parameters: any) {
  return new Promise((resolve, reject) => {
    axios({
      method: 'POST',
      url: `${url}`,
      data: parameters,
    })
      .then((response) => {
        resolve(response.data.data)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export { getQueryHelper, postQueryHelper }
