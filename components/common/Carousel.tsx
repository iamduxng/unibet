import Slider from "react-slick";

interface CarouselProps {
  settings: any,
  children: React.ReactNode
}

const Carousel = (props: CarouselProps) => {
  return (
    <Slider {...props.settings}>
      { props.children }
    </Slider>
  )
}

Carousel.defaultProps = {
  settings: {},
  children: <></>
}

export default Carousel
