import "../styles/globals.css";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../src/state/store";
import {
  Kalam,
  Fira_Code,
  Lato,
  Poppins,
  VT323,
  Inconsolata,
} from "@next/font/google";

const kalam = Kalam({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});
const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});
const vt323 = VT323({
  subsets: ["latin"],
  weight: ["400"],
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});
const firacode = Fira_Code({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});
const inconsolata = Inconsolata({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "700"],
});

export { kalam, lato, firacode, vt323, poppins, inconsolata };

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          html {
            font-family: ${inconsolata.style.fontFamily};
          }
        `}
      </style>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
