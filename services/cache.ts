import axios from "axios"
import { toJson } from "@/services/utils/helper"
import sanitizer from "@/services/utils/sanitizer"

const EXPIRE_TIME = 120 * 1000 // 2m

/** Handle cache data on client side
 * Not work on server side since localStorage is underfined
*/

export class AppCache {
  _getCache (key: string, promiseFn: Function) {
    const cachedData = localStorage.getItem(key)
    const cachedTimestamp = localStorage.getItem(key + ':ts')

    if (cachedData && cachedTimestamp) {
      let cachedAge = Date.now() - parseInt(cachedTimestamp)

      if (cachedAge > EXPIRE_TIME) {
        localStorage.removeItem(key)
        localStorage.removeItem(key + ':ts')
      } else {
        return JSON.parse(cachedData)
      }
    }

    return promiseFn().then((response: any) => {
      localStorage.setItem(key, response)
      localStorage.setItem(key + ':ts', Date.now().toString())

      return response
    }).catch(() => null)
  }

  getLiveMatches () {
    return this._getCache(
      'live_matches',
      () => axios.get(
          process.env.API_HOST || '',
          {
            params: {
              app_id: process.env.APP_ID,
              app_key: process.env.APP_KEY,
              callback: ''
            }
          }
        ).then(response => sanitizer(toJson(response.data)))
    )
  }
}

const appCache = new AppCache()
export default appCache
