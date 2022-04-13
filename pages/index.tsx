import LayoutDefault from '@/layouts/default'
import Logo from '@/components/core/Logo'

const Home = () => {
  return (
    <>
      <header>
        <Logo />
      </header>
      <nav>
        <ul>
          <li><a href="instructions/index.html">Test instructions</a></li>
        </ul>
      </nav>
      <div id="content">
        <article>
          <h1>Live matches</h1>
          <p className="preamble">
              Here is a list of matches that are live right now.
          </p>
          <aside>
              <h2>Live betting</h2>
              <p>Place your bets as the action unfolds. We offer a wide selection of live betting events and you can place both single and combination bets.</p>
              <p>You will be able to see an in-play scoreboard with the current result and match stats, while on selected events you will also be able to watch the action live with Unibet TV on the desktop site.</p>
          </aside>
          <div id="live-matches"></div>
        </article>
      </div>
    </>
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