import tw from 'twin.macro'
import fetchMatches from '@/services/queries/matches'
import LayoutDefault from '@/layouts/default'
import { Headline, Card } from '@/components/common'
import MatchSlider from '@/components/match/MatchSlider'

const styles = {
  cardBody: tw`grid gap-4 divide-y divide-gray-400`,
  cardBodyDesktop: tw`md:grid-rows-1 md:grid-cols-3 md:divide-x md:divide-y-0`,
  liveMatch: tw`flex flex-col justify-center bg-gray-1000 overflow-hidden row-auto md:col-span-2`,
  description: tw`pt-4 md:pl-4 md:pt-0`,
}

interface HomeProps {
  matches: Array<any>
}

const Home = ({ matches }: HomeProps) => {
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
          {
            matches ? (
              <MatchSlider matches={matches}/>
            ) : (
              <Headline variant='h2' css={tw`p-4 text-center text-white`}>
                No live matches was found
              </Headline>
            )
          }
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

// This function runs only on the server side
export const getStaticProps = async () => {
  const matches = await fetchMatches()
  return {
    props: {
      matches
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 2 minutes
    revalidate: 120, // In seconds

  }
}

export default Home
