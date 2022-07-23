import styled from 'styled-components'

export const SliderItem = styled.div`
  padding: 5px 15px 30px 15px;

  @media (min-width: 600px) {
    padding-right: 20px;
    padding-left: 10px;
  }

  & > div {
    box-shadow: 2px 4px 20px rgba(12, 41, 208, 0.12);
    background: var(--white);
    position: relative;
    border-radius: 16px;
    overflow: hidden;

    @media (max-width: 799px) {
      width: 100%;
      max-width: 350px;
      margin: 0 auto;
    }
  }
`

export const SliderImage = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 9 / 5;
`

export const SliderContent = styled.div`
  padding: 24px 32px;
  position: relative;

  img {
    position: absolute;
    right: 20px;
    top: 0;
    transform: translateY(-50%);
    z-index: 800;
  }

  span {
    border: 1px solid var(--gray4);
    border-radius: 16px;
    display: block;
    max-width: fit-content;
    padding: 5px 11px 1px;
    font-family: var(--tag);
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.2;
    color: var(--gray4);
    margin-bottom: 16px;
  }

  p {
    width: 100%;
    min-height: 110px;
    margin-bottom: 2px;
    font-weight: 500;
    font-size: 1.125rem;
    line-height: 1.2;
    color: var(--black2);
  }

  a {
    color: var(--primary);
    font-weight: 700;
    font-size: 1rem;
    line-height: 1.5;
  }
`

export const SlideBulletWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`

export const SlideBullet = styled.button`
  width: 29px;
  height: 29px;
  display: block;
  border-radius: 50%;
  border: none;
  appearance: none;
  background: var(--gray5);
  cursor: pointer;
`
