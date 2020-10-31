import { useEffect, useState } from 'react'

/**
 * Hook that alerts clicks outside of the passed ref
 */

const useOutsideAlerter = (ref) => {
  const [showModal, setShowModal] = useState(true)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref && ref !== null) {
        if (ref.current && ref.current === event.target) {
          setShowModal(false)
        }
      }
    }

    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref, showModal])
}

export default useOutsideAlerter
