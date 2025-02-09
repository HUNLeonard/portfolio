const ContactMeButton = ({
  className,
  fun,
}: {
  className?: string;
  fun?: () => void;
}) => {
  return (
    <button
      className={`px-3 py-1 text-lg border-[1px] border-gray-200 rounded-md cursor-pointer 
        relative button-bg-change hover:text-black overflow-hidden transition-colors 
        duration-200 font-bold shadow-md hover:shadow-xl ${className}`}
      onClick={fun}
    >
      Contact me
    </button>
  );
};
export default ContactMeButton;
