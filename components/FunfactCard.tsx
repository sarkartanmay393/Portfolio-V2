import webInfo from "../public/assets/WebsiteData.json";

function FunfactSection() {
  return (
    <section className="flex flex-col w-[100%] text-white">
      <header className="text-[20px]">
        <h3 className="">
          <span>#</span>my-fun-facts
        </h3>
      </header>
      <main className="max-w-[90%] flex justify-stretch flex-wrap gap-[8px] p-[1rem]">
        {webInfo.funfacts.map((value, index) => {
          return (
            <section
              key={`${index}-${value}`}
              className="flex flex-col lg:flex-row text-start lg:text-center border-[0.1px] px-[8px] py-[6px] text-[14px] hover:border-green hover:text-green hover:cursor-pointer"
            >
              <p className="font-[600]">{value}</p>
            </section>
          );
        })}
      </main>
    </section>
  );
}

export default FunfactSection;
