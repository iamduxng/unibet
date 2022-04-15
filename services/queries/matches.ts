import axios from "axios"
import { toJson } from "@/services/utils/helper"
import sanitizer from "@/services/utils/sanitizer"

const fetchMatches = async () => {
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
}

export default fetchMatches
