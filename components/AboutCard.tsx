// @ts-check

function AboutCard({
  intro,
  p1,
  p2,
  p3,
}: {
  intro: string;
  p1: string;
  p2: string;
  p3: string;
}) {
  return (
    <section className="flex flex-col px-[1rem] lg:px-[10rem] text-white">
      <header className="text-[2rem]">
        <h2>
          <span className="text-orange">#</span>
          about-me
        </h2>
      </header>
      <main className="flex justify-eventy py-[1rem] px-[1rem] lg:px-[2rem] ">
        <section className="w-[100%] lg:w-[60%] flex flex-col text-start text-[13px] lg:text-[14px] text-white">
          <p className="my-[6px] font-[600]">{intro}</p>
          {[p1, p2, p3].map((val) => (
            <p
              key={val.slice(0, 6)}
              className="my-[6px] max-w-[90%] lg:max-w-[80%] font-[500]"
            >
              {val}
            </p>
          ))}
          <a className="w-fit" href="/about">
            <button className="hover:text-green hover:border-green font-[700] w-fit bg-none py-[5px] px-[10px] border-[1px] border-orange text-white my-[12px]">
              Read More
            </button>
          </a>
        </section>
        <section className="w-0 lg:w-[40%]"></section>
      </main>
    </section>
  );
}

export default AboutCard;
