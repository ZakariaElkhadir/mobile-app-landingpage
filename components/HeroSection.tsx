import Image from "next/image"

const HeroSection = () => {
  return (
     <section className="flex flex-col items-center h-screen text-center mt-8  ">
          <Image
            src="/hero-image.png"
            alt="Hero Image"
            width={400}
            height={600}
            loading="eager"
            sizes="(max-width: 767px) 100vw, (max-width: 1279px) 80vw, 693px"
          />
          <h2 className="text-(length:--font-size-h2) leading-(--line-height-h2) text-text-vibrant">
            Your money,
            <br /> captured instantly
          </h2>
          <p className="max-w-3xl text-(length:--font-size-paragraph) leading-(--line-height-paragraph) text-text-muted">
            A capture-first expense tracker that turns the most painful moment
            in personal finance — logging a purchase — into a 5-second habit.
          </p>
          <div className="inline-flex items-center justify-center gap-4 p-1">
            <button className="rounded-[100px] bg-button px-8 py-3 text-button-text">
              Download
            </button>
            <button className="rounded-[100px] border border-button bg-transparent px-8 py-3 text-button">
              Features
            </button>
          </div>
        </section>
  )
}

export default HeroSection