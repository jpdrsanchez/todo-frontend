import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { articles } from './mocks/items'
import * as S from './styles'

const Carousel = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        breakpoints={{ 799: { slidesPerView: 2 }, 1023: { slidesPerView: 3 } }}
      >
        {articles.map(article => (
          <SwiperSlide key={article.id}>
            <S.SliderItem>
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
          </SwiperSlide>
        ))}
        {articles.map(article => (
          <SwiperSlide key={article.id}>
            <S.SliderItem>
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
          </SwiperSlide>
        ))}
        {articles.map(article => (
          <SwiperSlide key={article.id}>
            <S.SliderItem>
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
          </SwiperSlide>
        ))}
      </Swiper>
      <S.SlideBulletWrapper>
        <S.SlideBullet />
        <S.SlideBullet />
        <S.SlideBullet />
      </S.SlideBulletWrapper>
    </>
  )
}

export default Carousel
