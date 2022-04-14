import { useQuery } from 'react-query'
import axios from 'axios'

const fetchMatches = async () => {
  const { data } = await axios.get(
    process.env.API_HOST,
    {
      params: {
        app_id: process.env.APP_ID,
        app_key: process.env.APP_KEY,
      },
    },
  );
  return data;
}

const useMatches = () => {
  return useQuery(['unibetMatches'], fetchMatches)
}

export default useMatches
