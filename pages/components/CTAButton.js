import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
import { usePopup } from '../context/PopupContext';

const CTAButton = () => {
  const { openModal } = usePopup();

  return (
    <a
      href="#"
      className="bg-transparent text-white px-5 py-2 border border-white rounded-full flex items-center gap-2 hover:bg-gray-200 hover:text-black transition"
      onClick={(e) => {
        e.preventDefault();
        openModal();
      }}
    >
      Get Started <MdKeyboardDoubleArrowRight className="inline" />
    </a>
  );
};

export default CTAButton;