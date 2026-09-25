import { useEffect, useRef } from 'react'

/**
 * Adds an "is-visible" class to the element once it scrolls into view.
 * Pair with the .reveal base class defined in index.css.
 */
export default function useReveal(options = { threshold: 0.15 }) {
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      node.classList.add('is-visible')
      return
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        node.classList.add('is-visible')
        observer.unobserve(node)
      }
    }, options)

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return ref
}
