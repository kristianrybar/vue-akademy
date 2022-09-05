# wAxios setup
1. Add `import wAxios from '@/plugins/w/axios'` to your `main.ts`
2. Thats it :) 

# Guide
- to make a request just enter method name (for eaxmple `wAxios.get(url)`)
- to make a request and automatically get data from response, use methodName_data() (for example `wAxios.get_data(url)`)
- to make a request with auth header attached, add _auth after method name (for example `get_auth(url)` or `get_auth_data(url)`)


# Supported methods

- `get(url)`
- `get_auth(url)`
- `get_data(url)`
- `get_auth_data(url)`

- `post(url, params)`
- `post_auth(url, params)`
- `post_data(url, params)`
- `post_auth_data(url, params)`

- `delete(url)`
- `delete_auth(url)`
- `delete_data(url)`
- `delete_auth_data(url)`

- `patch(url, params)`
- `patch_auth(url, params)`
- `patch_data(url, params)`
- `patch_auth_data(url, params)`