import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat.js'
import isToday from 'dayjs/plugin/isToday'

dayjs.extend(customParseFormat)
dayjs.extend(isToday)

export default dayjs
