import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen bg-purple-200">
      <section className="flex h-[85%] flex-col lg:flex-row gap-12 lg:gap-0  w-full px-2.5 items-center lg:justify-around py-17">
        <div className="title flex  flex-col items-center gap-5">
          <div className="titleText flex flex-col gap-2.5">
            <h1 className="text-2xl sm:text-3xl text-center font-serif font-oswald font-extrabold">
              The best <span className="underline">URL</span> Shortner in the
              market
            </h1>
            <p className="text-zinc-700 text-xl max-w-xl lg:max-w-lg text-center">
              This is eventually best url shortner you have ever seen. this is
              made by ViratPod. who love <span className="text-red-400 underline">open source</span> my ideal is linus
            </p>
          </div>
          <div className="cta flex gap-3">
            <Link href="/shorten">
              <button className="bg-purple-500 font-medium cursor-pointer p-3 rounded-lg text-white py-1.5">
                Try now
              </button>
            </Link>
            <a href="https://github.com/virat-pod" target="_blank">
              <button className="bg-purple-500 cursor-pointer p-3 rounded-lg font-medium text-white py-1.5">
                Github
              </button>
            </a>
          </div>
        </div>
        <div className="ventor-pic flex  justify-center">
          <Image
            src={"/vector_group.jpg"}
            className="rounded-xl"
            width={500}
            height={500}
            alt="ventor group_img"
          />
        </div>
      </section>
    </main>
  );
}
