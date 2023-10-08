const BackToTop = () => {
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex items-center justify-center text-white font-semibold text-lg bg-[#485769]">
      <p className="cursor-pointer" onClick={scrollUp}>
        Back to top
      </p>
    </div>
  );
};

export default BackToTop;
