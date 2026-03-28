import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="mx-31 my-6 flex bg-bg-white items-center justify-between">
        <nav className="flex flex-1 items-center">
          <div className="logo">
            <Image src="/logo.png" alt="Logo" width={48} height={48} />
          </div>
          <ul className="flex flex-1 items-center justify-center gap-12 text-base">
            <li>
              <a
                href="#how-it-works"
                className="text-text-nav-active"
                aria-current="page"
              >
                How it works
              </a>
            </li>
            <li>
              <a href="#features" className="text-text-nav-inactive">
                Features
              </a>
            </li>
            <li>
              <a href="#pricing" className="text-text-nav-inactive">
                Pricing
              </a>
            </li>
            <li>
              <a href="#faq" className="text-text-nav-inactive">
                FAQ
              </a>
            </li>
          </ul>
        </nav>
        <button className="bg-button text-white px-4 py-4.5 rounded-[43px]">
          Get the app
        </button>
      </header>
      <main>
        <section className="flex flex-col items-center text-center">
          <Image
            src="/hero-image.png"
            alt="Hero Image"
            width={693}
            height={598}
          />
          <h2 className="text-(length:--font-size-h2) leading-(--line-height-h2) text-text-vibrant">
            Your money,<br/> captured instantly
          </h2>
          <p className="text-(length:--font-size-paragraph) leading-(--line-height-paragraph) text-text-muted">
            A capture-first expense tracker that turns the most painful moment
            in personal finance — logging a purchase — into a 5-second habit.
          </p>
          <div className="inline-flex items-center justify-center rounded-[100px] border border-button p-1">
            <button className="rounded-[100px] bg-button px-8 py-3 text-button-text">
              Download
            </button>
            <button className="rounded-[100px] border border-button bg-transparent px-8 py-3 text-button">
              Features
            </button>
          </div>
        </section>
        <section></section>
        <section></section>
        <section></section>
        <section></section>
        <section></section>
        <section></section>
      </main>
      <footer></footer>
    </>
  );
}
