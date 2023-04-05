import Link from "next/link";

export default function NotFoundPage() {
  return (
    <section className="m-0 w-[100vw] h-[100vh] text-white bg-gray">
      <main className="w-[100%] h-[100%] flex flex-col justify-center items-center">
        <h1 className="text-center uppercase tracking-wide	text-[3rem] font-[600] mt-[-5%]">
          404: Page not found!
        </h1>
        <h3 className="mt-[8px] text-[1.4rem] font-[600]">Get back to</h3>
        <Link className="" href="/">
          <code className="cursor-pointer text-[1.4rem] mt-[12px] text-green underline underline-offset-[8px] decoration-[1px] hover:text-orange">
            /homepage
          </code>
        </Link>
      </main>
    </section>
  );
}
