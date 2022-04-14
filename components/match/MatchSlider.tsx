import tw from 'twin.macro'
import { Headline, Carousel } from '@/components/common'
import MatchSlideItem from '@/components/match/MatchSlideItem'
import useMatches from '@/hooks/useMatches'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const styles = {
  loading: tw`text-white text-center p-8`
}

const MatchSlider = () => {
  const { isFetching, data, isError } = useMatches()
  const carouselSettings = {
    dots: false,
    arrows: false,
    autoplay: true,
    infinite: true,
    pauseOnFocus: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  return (
    <>
      {isFetching ? (
        <Headline variant="h2" css={styles.loading}>
          Loading...
        </Headline>
      ) : isError ? (
        <Headline variant="h2" css={styles.loading}>
          Cannot load live matches
        </Headline>
      ) : (
        <Carousel settings={carouselSettings}>
          {
            [1,2,3,4,5].map((match, idx) => (
              <MatchSlideItem key={`match-slide-${idx}`} match={match} />
            ))
          }
        </Carousel>
      )}
    </>
  )
}

export default MatchSlider
