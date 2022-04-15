import tw from 'twin.macro'
import { Carousel } from '@/components/common'
import MatchSlideItem from '@/components/match/MatchSlideItem'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const MatchSlider = (props: any) => {
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
      <Carousel settings={carouselSettings}>
        {
          props.matches.liveEvents.map((match: any, idx: number) => (
            <MatchSlideItem
              key={`match-slide-${idx}`}
              match={match}
            />
          ))
        }
      </Carousel>
    </>
  )
}

export default MatchSlider
