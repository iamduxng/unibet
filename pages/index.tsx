import tw from 'twin.macro'
import LayoutDefault from '@/layouts/default'
import { Headline, Card } from '@/components/common'

const styles = {
  cardBody: tw`flex flex-col divide-y divide-gray-400`,
  cardBodyDesktop: tw`md:flex-row md:divide-x md:divide-y-0 md:-mx-4`,
  liveMatch: tw`flex-1 pb-4 md:px-4 md:pb-0`,
  description: tw`pt-4 pt-4 md:px-4 md:pt-0`
}

const Home = () => {
  return (
    <Card>
      <div>
        <Headline variant='h1' css={tw`mb-4`}>
          Live matches
        </Headline>
        <div css={tw`mb-4`}>
          Here is a list of matches that are live right now.
        </div>
      </div>
      <div css={[styles.cardBody, styles.cardBodyDesktop]}>
        <div css={styles.liveMatch}>
          Live example
        </div>

        <div css={styles.description}>
          <Headline variant='h2' css={tw`mb-2`}>
            Live betting
          </Headline>
          <div css={tw`mb-2`}>
            Place your bets as the action unfolds. We offer a wide selection of live betting events and you can place both single and combination bets.
          </div>
          <div css={tw`mb-2`}>
            You will be able to see an in-play scoreboard with the current result and match stats, while on selected events you will also be able to watch the action live with Unibet TV on the desktop site.
          </div>
        </div>
      </div>
    </Card>
  )
}

Home.getLayout = (page: any) => {
  return (
    <LayoutDefault>
      { page }
    </LayoutDefault>
  )
}

export default Home
