
const Card = ({ children, className = "" }) => {
  return (
    <div
      className={`rounded-2xl border border-white/10 bg-[#11111B] p-5 sm:p-6 shadow-lg transition-all duration-300 ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
