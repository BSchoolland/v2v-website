import Image from 'next/image'

export function UIUXDesign() {
  return (
    <section className="flex items-center justify-center w-full bg-black text-white py-20">
      <div className="flex flex-col uiuxbreak:flex-row max-w-7xl mx-auto px-8 gap-12 justify-between">
        {/* Left Column */}
        <div className="flex flex-col gap-6 uiuxbreak:w-2/5">
          <div className="flex flex-col gap-1">
            <span className="text-[12px] md:text-base text-[#FFE45B]">OUR CUSTOM AND TAILORED</span>
            <h2 className="text-m-h2 h2break:text-h2">Website Design UI/UX</h2>
          </div>
          
          <p className="text-lg text-gray-300">
            When it comes to your business, every detail matters. Our attention to UI helps visitors save time and enhances their overall experience. This not only attracts more customers, but also boosts your credibility while significantly cutting down on unnecessary costs.
          </p>
          
          <ul className="flex flex-col gap-4 text-white mt-2">
            <li className="text-p1 flex items-center gap-2">
              <Image 
                src="/assets/check.svg"
                alt="Check mark"
                width={18}
                height={19}
                className="w-[18px] h-[19px]"
              />
              Understand your goals and pain points.
            </li>
            <li className="text-p1 flex items-center gap-2">
              <Image 
                src="/assets/check.svg"
                alt="Check mark"
                width={18}
                height={19}
                className="w-[18px] h-[19px]"
              />
              Conduct user research and strategy.
            </li>
            <li className="text-p1 flex items-center gap-2">
              <Image 
                src="/assets/check.svg"
                alt="Check mark"
                width={18}
                height={19}
                className="w-[18px] h-[19px]"
              />
              Discuss aesthetic colors and layouts.
            </li>
            <li className="text-p1 flex items-center gap-2">
              <Image 
                src="/assets/check.svg"
                alt="Check mark"
                width={18}
                height={19}
                className="w-[18px] h-[19px]"
              />
              Reflect your brand and unique values.
            </li>
          </ul>

          <div className="flex justify-center mobile:justify-start">
            <button className="w-[calc(100%-2rem)] mobile:w-auto flex items-center justify-center gap-3 bg-white text-black px-6 py-3 rounded-full mb-0 uiuxbreak:mb-24 hover:bg-gray-100 transition-colors">
              Book a discovery call
              <Image 
                src="/assets/arrow.svg"
                alt="Arrow"
                width={20}
                height={20}
                className="w-5 h-5"
              />
            </button>
          </div>
          
        </div>

        {/* Right Column */}
        <div className="lg:w-1/2 flex justify-center">
          <Image 
            src="/assets/ui-examples.png"
            alt="Collection of UI/UX design examples showing various interfaces and mockups"
            width={600}
            height={600}
            className="w-full h-auto max-w-[500px] uiuxbreak:max-w-full object-contain"
          />
        </div>
      </div>
    </section>
  )
} 