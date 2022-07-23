import Image from 'next/image'
import Link from 'next/link'
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import { articles } from './mocks/items'
import * as S from './styles'

const Carousel = () => {
  const swiper = useSwiper()

  return (
    <>
      <Swiper slidesPerView={3} modules={[Pagination]}>
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
        <S.SlideBullet onClick={() => swiper.slideTo(0)} />
        <S.SlideBullet onClick={() => swiper.slideTo(3)} />
        <S.SlideBullet onClick={() => swiper.slideTo(6)} />
      </S.SlideBulletWrapper>
    </>
  )
}

export default Carousel
