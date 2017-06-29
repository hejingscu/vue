import axios from 'axios'

export const appList = params => axios.get('/api/v1/open-admin/app/list', params);