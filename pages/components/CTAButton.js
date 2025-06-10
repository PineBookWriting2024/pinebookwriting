import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
import { usePopupcta } from '../../context/PopupContext';


const CTAButton = () => {
  const { openModal } = usePopupcta();

  return (
    <a
      href="#"
      className="bg-transparent text-white px-5 py-2 border border-white rounded-full flex items-center gap-2 hover:bg-gray-200 hover:text-black transition"
      onClick={(e) => {
        e.preventDefault();
        openModal("cta");
      }}
    >
      Get Started <MdKeyboardDoubleArrowRight className="inline" />
    </a>
  );
};

export default CTAButton;
