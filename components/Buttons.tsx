export const CustomButton = ({ name, url }: { name: string; url: string }) => {
  return (
    <a className="w-min" href={url}>
      <button
        className={`bg-transparent font-[500] border-[0.5px] 
        border-orange hover:border-green hover:text-green
        px-[12px] backdrop-blur-[4px] hover:backdrop-blur-[8px]
        `}
      >
        {name}
      </button>
    </a>
  );
};

export const CustomButtonShadowed = ({
  className,
  name,
  url,
}: {
  className: string;
  name: string;
  url: string;
}) => {
  return (
    <a href={url}>
      <button
        className={`${className} py-[5px] px-[12px] font-[600] bg-none border-[1px]
         border-orange shadow-button rounded-[2px]
         hover:text-green hover:border-green hover:shadow-clickedButton
         backdrop-blur-[4px] hover:backdrop-blur-[8px]
         `}
      >
        {name}
      </button>
    </a>
  );
};
