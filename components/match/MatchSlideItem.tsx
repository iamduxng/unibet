import tw from 'twin.macro'
import { Headline, Icon, ALink, Button } from '@/components/common'

const styles = {
  slide: tw`p-6 flex flex-col items-center justify-center`,
  slideCurrentScore: tw`text-yellow-500 mb-2`,
  slideTeamsPlaying: tw`text-white flex justify-center items-center mb-2`,
  slideTime: tw`flex mb-4 text-gray-500`,
}

interface MatchProps {
  match: any,
}

const MatchSlideItem = (props: MatchProps) => {
  return (
    <div css={styles.slide}>
      <Headline variant='h1' css={styles.slideCurrentScore}>
        15 - 0
      </Headline>
      <Headline variant='h2' css={styles.slideTeamsPlaying}>
        <div css={tw`mr-2`}>
          <Icon name='ic-default' />
        </div>
        <span>Bedene, Ajuax</span>
      </Headline>
      <div css={styles.slideTime}>
        Today, 14:14
      </div>
      <ALink href={`https://www.unibet.com/betting#/event/live/${'1234'}`}>
        <Button variant='primary'>Place a bet</Button>
      </ALink>
    </div>
  )
}

export default MatchSlideItem
