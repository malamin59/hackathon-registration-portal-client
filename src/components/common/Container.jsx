
const Container = ({ children, className = "" }) => {
  return (
    <div
      className={`mx-auto w-full max-w-[1456px] px-6 sm:px-10 lg:px-14 xl:px-16 ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
