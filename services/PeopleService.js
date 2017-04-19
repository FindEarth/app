import Api from './../constants/Api'

let instance = null

export default class PeopleService {

  // Singleton
  constructor(props) {
    if(!instance)
      instance = this
    return instance
  }

  async fetchPeople() {
    return fetch(`${Api.URL}/person`)
      .then((response) => response.json())
  }

}
