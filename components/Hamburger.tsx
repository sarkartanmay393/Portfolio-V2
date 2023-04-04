const Hamburger = ({ openMenu }: { openMenu: any }) => {
  return (
    <>
      <div
        id="hamburger"
        className="cursor-pointer h-fit w-fit transition-all	duration-[0.25s] lg:hidden"
        onClick={openMenu}
      >
        <span
          id="topbun"
          className="block content-none w-[22px] h-[1px] bg-whitesmoke"
        ></span>
        <span
          id="bottombun"
          className="block content-none w-[22px] h-[1px] bg-whitesmoke transform-gpu translate-y-[5px]"
        ></span>
      </div>
      <style jsx>{`
        .open {
          transform: rotate(90deg);
        }

        .open #topbun {
          transform: rotate(45deg) translateY(0px);
        }

        .open #bottombun {
          transform: rotate(-45deg) translateY(0px);
        }
      `}</style>
    </>
  );
};

export default Hamburger;
