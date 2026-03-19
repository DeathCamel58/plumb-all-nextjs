import { FaPhone } from 'react-icons/fa'

const StickyCallButton = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <a
        href="tel:+17709143877"
        className="flex items-center justify-center gap-2 w-full background-theme-1 text-white text-lg font-semibold py-4 shadow-[0_-2px_10px_rgba(0,0,0,0.15)] hover:background-theme-2 transition"
      >
        <FaPhone />
        <span>Call (770) 914-3877</span>
      </a>
    </div>
  )
}

export default StickyCallButton
