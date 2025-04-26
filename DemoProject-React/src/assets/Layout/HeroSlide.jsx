function HeroSlide({ image, tag, brief, highlight, hook, text, classes }) {
  return (
    <div className="min-h-screen w-screen bg-black/90 flex justify-center align-middle">
      <div className="mx-auto max-w-7xl">
        <div className="lg:flex lg:justify-center lg:align-middle lg:h-full">
          <div className="overflow-clip px-6 sm:text-center md:mx-auto md:max-w-2xl my-auto lg:col-span-6 lg:text-left border-b border-gray-700">
            <div className="space-y-8 h-120">
              <div className="space-y-4">
                <div className="space-y-2">
                  <span
                    className="rounded-full uppercase bg-pink-500 px-3 py-0.5 text-sm font-semibold leading-5 text-white">
                    {tag ?? "Lorem Ipsum"}
                  </span>
                  <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                    <p className="sm:text-6xl">
                    </p> {brief ?? "Lorem ipsum dolor sit amet."}
                    <p
                      className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-600"> {highlight ?? "Lorem ipsum dolor sit amet."}
                    </p>
                    <br />
                    {hook ?? "Lorem ipsum dolor sit amet."}
                  </h1>
                </div>
                <p className="text-base text-gray-200 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                  {text ?? "Lorem ipsum dolor sit amet."}
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center w-full col-span-6 border-b border-gray-700 mt-8 lg:mt-0">
            <div className="px-6 h-120 lg:h-100% w-full max-w-2xl col-span-6 flex items-center mx-auto">
              <div className="w-full h-full">
                <div className="w-full h-120 text-center flex justify-center items-center align-middle">
                  <img
                    src={image ?? "https://placehold.co/600x400/EEE/31343C"}
                    alt="slide"
                    className={"max-h-120 max-w-120 transition-opacity duration-700 m-auto " + classes}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSlide;