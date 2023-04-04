export const DemoButton = ({ url }: { url: string }) => {
  return (
    <a className="w-min" href={url}>
      <button className="text-white bg-transparent font-[500] border-[0.5px] border-orange mx-[0.2rem] hover:border-green hover:text-green">
        DEMO
      </button>
    </a>
  );
};

export const CodeButton = ({ url }: { url: string }) => {
  return (
    <a className="w-min" href={url}>
      <button className="text-white bg-transparent font-[500] border-[0.5px] border-orange mx-[0.2rem] hover:border-green hover:text-green">
        CODE
      </button>
    </a>
  );
};
