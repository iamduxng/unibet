import axios from "axios"
import { toJson } from "@/services/utils/helper"
import sanitizer from "@/services/utils/sanitizer"

/** Method 1: Fetch data on server side
* This does not work on caching because localStorage is undefined
**/
const fetchMatches = async () => {
  try {
    const { data } = await axios.get(
      process.env.API_HOST || '',
      {
        params: {
          app_id: process.env.APP_ID,
          app_key: process.env.APP_KEY,
          callback: ''
        }
      }
    )
    const jsonData = sanitizer(toJson(data))
    return jsonData
  } catch {
    return null
  }
}

export default fetchMatches
