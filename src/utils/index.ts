import gsap from 'gsap'
  import { ScrollTrigger } from 'gsap/ScrollTrigger'
  gsap.registerPlugin(ScrollTrigger)

export function renderAnimation(section:string) {
  const title = document.getElementById(section)
  const cards = document.querySelectorAll(`[data-card='${section}']`)

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: cards,
      start: 'top 80%',
      end: 'top 30%',
      scrub: 2
    },
  })

  tl.from(title, {
    opacity: 0,
    duration: 1,
    y: window.innerWidth < 768 ? -10 : -50,
    ease: 'sin.easeInOut'
  })
  tl.from(cards, {
    opacity: 0,
    duration: 1,
    y: 100,
    ease: 'sin.easeInOut'
  }, '<')
}

export function basicRevealAnimation(section:Element, delay:number) {
  const tl = gsap.timeline({
    defaults: {
      ease: 'sin.easeInOut'
    },
  })

  tl.from(section, {
    opacity: 0,
    y: 100,
    duration: 2,
    delay: delay
  })
}