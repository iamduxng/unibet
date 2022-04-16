const pickMatches = (data: any) => {
  return {
    liveEvents: (data.liveEvents || []).slice(0, 10)
  }
}

const sanitizer = (data: any) => {
  return pickMatches(data)
}

export default sanitizer
