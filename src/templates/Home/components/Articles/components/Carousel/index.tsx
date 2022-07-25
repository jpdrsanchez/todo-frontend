import Image from 'next/image'
import Link from 'next/link'
import Slider, { Settings } from 'react-slick'
import { settings } from './config/carousel'

import { articles } from './mocks/items'
import * as S from './styles'

const Carousel = () => {
  return (
    <Slider {...settings}>
      {articles.map(article => (
        <S.SliderItem key={article.id}>
          <div>
            <S.SliderImage>
              <Image
                src={article.image}
                alt={article.description}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </S.SliderImage>
            <S.SliderContent>
              <img src="/images/arrow-icon.svg" alt="" aria-hidden="true" />
              <span>{article.category}</span>
              <p>{article.description}</p>
              <Link href={article.link}>read more</Link>
            </S.SliderContent>
          </div>
        </S.SliderItem>
      ))}
      {articles.map(article => (
        <S.SliderItem key={article.id}>
          <div>
            <S.SliderImage>
              <Image
                src={article.image}
                alt={article.description}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </S.SliderImage>
            <S.SliderContent>
              <img src="/images/arrow-icon.svg" alt="" aria-hidden="true" />
              <span>{article.category}</span>
              <p>{article.description}</p>
              <Link href={article.link}>read more</Link>
            </S.SliderContent>
          </div>
        </S.SliderItem>
      ))}
      {articles.map(article => (
        <S.SliderItem key={article.id}>
          <div>
            <S.SliderImage>
              <Image
                src={article.image}
                alt={article.description}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </S.SliderImage>
            <S.SliderContent>
              <img src="/images/arrow-icon.svg" alt="" aria-hidden="true" />
              <span>{article.category}</span>
              <p>{article.description}</p>
              <Link href={article.link}>read more</Link>
            </S.SliderContent>
          </div>
        </S.SliderItem>
      ))}
    </Slider>
  )
}

export default Carousel
