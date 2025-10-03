import { useEffect, useCallback } from 'react'

export const useKeyboardNavigation = () => {
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    // Handle Escape key to close modals
    if (event.key === 'Escape') {
      const modal = document.querySelector('[role="dialog"]')
      if (modal) {
        const closeButton = modal.querySelector('button[aria-label*="close"], button[aria-label*="Close"]') as HTMLButtonElement
        if (closeButton) {
          closeButton.click()
        }
      }
    }

    // Handle Enter/Space for button-like elements
    if (event.key === 'Enter' || event.key === ' ') {
      const target = event.target as HTMLElement
      if (target.getAttribute('role') === 'button' && !target.closest('button, a, input, textarea, select')) {
        event.preventDefault()
        target.click()
      }
    }
  }, [])

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])
}

export default useKeyboardNavigation