import webInfo from "../public/assets/WebsiteData.json";

function QuoteCard() {
  return (
    <>
      <section className=" flex flex-col items-center pb-[18px] py-0 lg:py-[1rem] px-[1rem] md:px-[4rem] lg:px-[10rem] text-green">
        <svg
          className="z-[1] h-[12px] relative top-[8px] left-[-35%] bg-gray px=[6px] w-fit"
          width="26"
          height="21"
          viewBox="0 0 26 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.56 15.616C10.56 17.0453 10.0373 18.2507 8.992 19.232C7.968 20.2133 6.72 20.704 5.248 20.704C3.73333 20.704 2.47467 20.2133 1.472 19.232C0.490667 18.2507 0 17.0453 0 15.616C0 14.9333 0.096 14.208 0.288 13.44C0.48 12.672 0.864 11.68 1.44 10.464L6.4 0H11.2L8.544 11.584C9.14133 12.0107 9.62133 12.576 9.984 13.28C10.368 13.9627 10.56 14.7413 10.56 15.616ZM24.8 15.616C24.8 17.0453 24.2773 18.2507 23.232 19.232C22.1867 20.2133 20.9387 20.704 19.488 20.704C18.016 20.704 16.768 20.2133 15.744 19.232C14.7413 18.2507 14.24 17.0453 14.24 15.616C14.24 14.9333 14.336 14.208 14.528 13.44C14.72 12.672 15.1147 11.68 15.712 10.464L20.704 0H25.472L22.784 11.584C23.4027 12.0107 23.8933 12.576 24.256 13.28C24.6187 13.9627 24.8 14.7413 24.8 15.616Z"
            fill="#ABB2BF"
          />
        </svg>

        <h3
          className={`border-[1px] border-whitesmoke p-[15px] text-center 
        w-[90%] lg:w-[80%] font-[500] backdrop-blur-[4px]`}
        >
          {webInfo.quote.text}
        </h3>

        <svg
          className="z-[1] h-[8px] lg:h-[10px] relative top-[-5px] left-[22%] bg-gray mx-[8px] px-[4px] w-fit"
          width="26"
          height="21"
          viewBox="0 0 26 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.56 15.616C10.56 17.0453 10.0373 18.2507 8.992 19.232C7.968 20.2133 6.72 20.704 5.248 20.704C3.73333 20.704 2.47467 20.2133 1.472 19.232C0.490667 18.2507 0 17.0453 0 15.616C0 14.9333 0.096 14.208 0.288 13.44C0.48 12.672 0.864 11.68 1.44 10.464L6.4 0H11.2L8.544 11.584C9.14133 12.0107 9.62133 12.576 9.984 13.28C10.368 13.9627 10.56 14.7413 10.56 15.616ZM24.8 15.616C24.8 17.0453 24.2773 18.2507 23.232 19.232C22.1867 20.2133 20.9387 20.704 19.488 20.704C18.016 20.704 16.768 20.2133 15.744 19.232C14.7413 18.2507 14.24 17.0453 14.24 15.616C14.24 14.9333 14.336 14.208 14.528 13.44C14.72 12.672 15.1147 11.68 15.712 10.464L20.704 0H25.472L22.784 11.584C23.4027 12.0107 23.8933 12.576 24.256 13.28C24.6187 13.9627 24.8 14.7413 24.8 15.616Z"
            fill="#ABB2BF"
          />
        </svg>

        <div className="backdrop-blur-[0px] gap-[8px] md:gap-[12px] lg:gap-[16px] flex justify-center items-center border-white border-[1px] border-t-0 relative top-[-9px] lg:top-[-10px] left-[26%] h-[30px] lg:h-[48px] w-[28%] lg:w-[20%]">
          <span className="text-white">-</span>
          <p className="text-[8px] lg:text-[14px] font-[400] m-0 p-0">
            {webInfo.quote.author}
          </p>
        </div>
      </section>
    </>
  );
}

export default QuoteCard;
