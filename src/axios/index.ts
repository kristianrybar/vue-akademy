/*
HOW TO:
    import wAxios from '@/plugins/w/axios'
    wAxios.get
    wAxios.post
    wAxios.get_auth
    wAxios.post_auth
*/

import axios from 'axios'
//import store from '@/store'

//axios.defaults.baseURL = process.env.VUE_APP_WAXIOS_URL


export default {

	// GET Methods -------------------------------------------
	async get(url, config?) {    
		return axios.get(url, config)
			.then(response => response.data)
			.catch(error => Promise.reject(error))
	},

	async get_auth(url, config?) {
		config = this._config(config)

		return axios.get(url, config)
			.then(response => response.data)
			.catch(error => Promise.reject(error))
	},
    
	async get_data(url, config?) {    
		return axios.get(url, config)
			.then(response => response.data.data)
			.catch(error => Promise.reject(error.response))
	},

	async get_auth_data(url, config?) {
		config = this._config(config)
		return axios.get(url, config)
	},

	// POST methods -------------------------------------------

	async post(url, params = null, config?) {

		return axios.post(url, params, config)
			.then(response => response.data)
			.catch(error => Promise.reject(error))
	},

	async post_auth(url, params=null, config?) {
		config = this._config(config)

		return axios.post(url, params, config)
			.then(response => response.data)
			.catch(error => Promise.reject(error))
	},

	async post_data(url, params = null, config?) {
		return axios.post(url, params, config)
	},

	async post_auth_data(url, params=null, config?) {
		config = this._config(config)

		return axios.post(url, params, config)
	},

	// PUT methods -------------------------------------------

	async put(url, params = null, config?) {

		return axios.put(url, params, config)
			.then(response => response.data)
			.catch(error => Promise.reject(error))
	},

	async put_auth(url, params=null, config?) {
		config = this._config(config)

		return axios.put(url, params, config)
			.then(response => response.data)
			.catch(error => Promise.reject(error))
	},

	async put_data(url, params = null, config?) {
		return axios.put(url, params, config)
	},

	async put_auth_data(url, params=null, config?) {
		config = this._config(config)

		return axios.put(url, params, config)
	},

	// DELETE methods -------------------------------------------

	async delete(url, config?) {
		return axios.delete(url, config)
			.then(response => response.data)
			.catch(error => Promise.reject(error))
	},

	async delete_auth(url, config?) {
		config = this._config(config)

		return axios.delete(url, config)
			.then(response => response.data)
			.catch(error => Promise.reject(error))
	},

	async delete_data(url, config?) {
		return axios.delete(url, config)
			.then(response => response.data.data)
			.catch(error => Promise.reject(error.response))
	},

	async delete_auth_data(url, config?) {
		config = this._config(config)

		return axios.delete(url, config)
			.then(response => response.data.data)
			.catch(error => Promise.reject(error.response))
	},

	// PATCH methods -------------------------------------------

	async patch(url, params=null, config?) {
		return axios.patch(url, params, config)
			.then(response => response.data)
			.catch(error => Promise.reject(error))
	},

	async patch_auth(url, params=null, config?) {
		config = this._config(config)

		return axios.patch(url, params, config)
			.then(response => response.data)
			.catch(error => Promise.reject(error))
	},

	async patch_data(url, params=null, config?) {
		return axios.patch(url, params, config)
			.then(response => response.data.data)
			.catch(error => Promise.reject(error.response))
	},

	async patch_auth_data(url, params=null, config?) {
		config = this._config(config)

		return axios.patch(url, params, config)
			.then(response => response.data.data)
			.catch(error => Promise.reject(error.response))
	},

	//////////////////////////////////////////////////////////////////////////////
	// helpers

	_config(config) {
		if (config) console.error('NOT IMPLEMENTED')

		return {
			headers: {
				Authorization: `Bearer ${store.getters['wAuth/token']}`
			}
		}
	}
}
