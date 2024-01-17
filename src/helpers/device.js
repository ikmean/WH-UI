import { css } from 'styled-components'

const size = {
  xs: '500px', // for small screen mobile
  sm: '780px', // for mobile screen
  md: '1024px', // for tablets
  lg: '1280px', // for laptops
  xl: '1440px', // for desktop / monitors
  xxl: '1920px' // for big screens
}

const device = {
  xs: `(max-width: ${size.xs})`,
  sm: `(max-width: ${size.sm})`,
  md: `(max-width: ${size.md})`,
  lg: `(max-width: ${size.lg})`,
  xl: `(max-width: ${size.xl})`,
  xxl: `(max-width: ${size.xxl})`
}

export const media = {
  xs: (...args) => css`
    @media (${device.xs}) {
      ${css(...args)};
    }
  `,
  sm: (...args) => css`
    @media (${device.sm}) {
      ${css(...args)};
    }
  `,
  md: (...args) => css`
    @media (${device.md}) {
      ${css(...args)};
    }
  `,
  lg: (...args) => css`
    @media (${device.lg}) {
      ${css(...args)};
    }
  `,
  xl: (...args) => css`
    @media (${device.xl}) {
      ${css(...args)};
    }
  `,
  xxl: (...args) => css`
    @media (${device.xxl}) {
      ${css(...args)};
    }
  `
}
