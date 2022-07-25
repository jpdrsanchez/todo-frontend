import { Settings } from 'react-slick'
import * as S from '../styles'

export const settings: Settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows: false,
  appendDots: dots => <S.SlideBullets>{dots}</S.SlideBullets>,
  responsive: [
    {
      breakpoint: 1023,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 799,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false
      }
    }
  ]
}
