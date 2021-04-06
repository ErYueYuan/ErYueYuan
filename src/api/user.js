import * as API from './';
export default {
  user: (params, loadings) => {
    return API.POST('/getuser/user', params, loadings)
  }
}