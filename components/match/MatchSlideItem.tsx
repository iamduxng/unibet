import tw from 'twin.macro'
import { SPORTS } from '@/services/utils/constants'
import { Headline, Icon, ALink, Button } from '@/components/common'
import dayjs from '@/plugins/dayjs'

interface MatchProps {
  match: any,
}

const MatchSlideItem = ({ match }: MatchProps) => {
  const { event, liveData } = match
  const teamPlaying = event.name
  const currentScore = `${liveData.score.home} - ${liveData.score.away}`
  const eventID = event.id
  const getStartTime = () => {
    const date = dayjs(event.start)
    if (date.isToday()) {
      return `Today, ${date.format('HH:mm')}`
    } else {
      return date.format('YYYY-MM-DD, HH:mm')
    }
  }

  const getSportIcon = () => {
    const sport = (event.sport || '').toLowerCase()
    if (SPORTS.includes(sport)) {
      return `ic-${sport}`
    } else {
      return `ic-default`
    }
  }

  return (
    <div css={tw`p-6 flex flex-col items-center justify-center`}>
      <Headline variant='h1' css={tw`text-yellow-500 mb-2`}>
        {currentScore}
      </Headline>
      <Headline variant='h2' css={tw`text-white flex justify-center items-center mb-2`}>
        <div css={tw`mr-2`}>
          <Icon name={getSportIcon()} />
        </div>
        <span>{teamPlaying}</span>
      </Headline>
      <div css={tw`flex mb-4 text-gray-500`}>
        {getStartTime()}
      </div>
      <ALink href={`https://www.unibet.com/betting#/event/live/${eventID}`} target="_blank">
        <Button variant='primary'>Place a bet</Button>
      </ALink>
    </div>
  )
}

export default MatchSlideItem
