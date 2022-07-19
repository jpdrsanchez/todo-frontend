import styled from 'styled-components'

export const Footer = styled.footer`
  padding-top: 73px;
  padding-bottom: 72px;
  background-image: linear-gradient(
    -1.4deg,
    var(--black) calc(80% - 1px),
    transparent 80%
  );
  background-size: cover;
  background-position: center top;
  color: var(--white);
  text-align: center;
  position: relative;

  h3 {
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 1.25rem;
    margin-bottom: 1.75rem;
  }

  a {
    display: block;
    color: var(--white);
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 1.125rem;
    margin-bottom: 1.125rem;
  }

  p {
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1.0625rem;
  }
`

export const FooterDetail = styled.div`
  height: 41px;
  width: calc(100% - 48px);
  max-width: 511px;
  background: linear-gradient(
    -1deg,
    var(--primary) calc(80% - 1px),
    transparent 80%
  );
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
`
