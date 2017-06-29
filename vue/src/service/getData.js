import axios from 'axios'
import fetch from '../config/fetch'

export const appList = params => fetch('/api/v1/open-admin/app/list', params);

export const serviceList = () => fetch('/api/v1/open-admin/service/list');