import { useInView } from 'react-intersection-observer'

export function useScrollFadeIn(delay = 500) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    delay
  })

  return [ref, inView]
}
