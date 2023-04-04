import "../styles/globals.css";
import { AppProps } from "next/app";
import { Kalam, Fira_Code, Lato } from "@next/font/google";

const kalam = Kalam({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});
const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});
const firacode = Fira_Code({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export { kalam, lato, firacode };

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          html {
            font-family: ${firacode.style.fontFamily}, ${lato.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} />
    </>
  );
}
