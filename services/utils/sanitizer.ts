const pickMatches = (data: any) => {
  return {
    liveEvents: (data.liveEvents || []).slice(0, 5)
  }
}

const sanitizer = (data: any) => {
  return pickMatches(data)
}

export default sanitizer
