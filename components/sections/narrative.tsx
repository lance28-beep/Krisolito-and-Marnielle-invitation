"use client"
import { Section } from "@/components/section"
import { siteConfig } from "@/content/site"
import Stack from "@/components/stack"
import { motion } from "motion/react"
import { Cormorant_Garamond, Playfair_Display } from "next/font/google"
import Image from "next/image"

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})


export function Narrative() {
  const { brideNickname, groomNickname } = siteConfig.couple
  const coupleDisplayName = `${groomNickname} and ${brideNickname}`

  return (
    <Section id="narrative" className="relative py-10 sm:py-12 md:py-16 lg:py-20 overflow-hidden">
      {/* Background gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to bottom, #8EA58B 0%, #738A6E 100%)",
        }}
      />

      {/* Decorative flower element - top left corner */}
      <div className="absolute left-0 top-0 z-0 pointer-events-none opacity-40">
        <Image
          src="/decoration/flower-decoration-left-bottom-corner2.png"
          alt=""
          width={300}
          height={300}
          className="w-auto h-auto max-w-[140px] sm:max-w-[180px] md:max-w-[220px] lg:max-w-[260px] opacity-50 scale-y-[-1]"
          priority={false}
          style={{ filter: 'brightness(0) saturate(100%) invert(20%) sepia(15%) saturate(800%) hue-rotate(140deg) brightness(95%) contrast(90%)' }}
        />
      </div>

      {/* Decorative flower element - top right corner */}
      <div className="absolute right-0 top-0 z-0 pointer-events-none opacity-40">
        <Image
          src="/decoration/flower-decoration-left-bottom-corner2.png"
          alt=""
          width={300}
          height={300}
          className="w-auto h-auto max-w-[140px] sm:max-w-[180px] md:max-w-[220px] lg:max-w-[260px] opacity-50 scale-x-[-1] scale-y-[-1]"
          priority={false}
          style={{ filter: 'brightness(0) saturate(100%) invert(20%) sepia(15%) saturate(800%) hue-rotate(140deg) brightness(95%) contrast(90%)' }}
        />
      </div>

      {/* Decorative flower element - bottom left corner */}
      <div className="absolute left-0 bottom-0 z-0 pointer-events-none opacity-40">
        <Image
          src="/decoration/flower-decoration-left-bottom-corner2.png"
          alt=""
          width={300}
          height={300}
          className="w-auto h-auto max-w-[140px] sm:max-w-[180px] md:max-w-[220px] lg:max-w-[260px] opacity-50"
          priority={false}
          style={{ filter: 'brightness(0) saturate(100%) invert(20%) sepia(15%) saturate(800%) hue-rotate(140deg) brightness(95%) contrast(90%)' }}
        />
      </div>

      {/* Decorative flower element - bottom right corner */}
      <div className="absolute right-0 bottom-0 z-0 pointer-events-none opacity-40">
        <Image
          src="/decoration/flower-decoration-left-bottom-corner2.png"
          alt=""
          width={300}
          height={300}
          className="w-auto h-auto max-w-[140px] sm:max-w-[180px] md:max-w-[220px] lg:max-w-[260px] opacity-50 scale-x-[-1]"
          priority={false}
          style={{ filter: 'brightness(0) saturate(100%) invert(20%) sepia(15%) saturate(800%) hue-rotate(140deg) brightness(95%) contrast(90%)' }}
        />
      </div>

      {/* Header */}
      <div className="relative z-10 text-center mb-8 sm:mb-10 md:mb-12 px-4">
        <div className="space-y-2 sm:space-y-3">
          <p
            className={`${cormorant.className} text-[0.7rem] sm:text-xs md:text-sm uppercase tracking-[0.28em] text-white`}
          >
            The Journey of {coupleDisplayName}
          </p>
          <h2
            className="style-script-regular text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white"
          >
            Our Love Story
          </h2>
        </div>

        <p className={`${cormorant.className} text-xs sm:text-sm md:text-base text-white font-light max-w-xl mx-auto leading-relaxed mt-3`}>
          A beautiful tale of how {coupleDisplayName} found each other and began their journey toward forever together.
        </p>

        <div className="flex items-center justify-center gap-2 mt-6">
          <div className="w-12 sm:w-16 md:w-20 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />
          <motion.div
            className="w-2 h-2 rounded-full bg-white/80"
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <div className="w-12 sm:w-16 md:w-20 h-px bg-gradient-to-l from-transparent via-white/60 to-transparent" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">

        {/* Main Content - Centered Layout - Compact */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12 items-center lg:items-start"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Left Spacer */}
          <div className="hidden lg:block"></div>

          {/* Interactive Stack Component - Center - Smaller for mobile */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="scale-[0.75] sm:scale-90 md:scale-100">
                <Stack
                  randomRotation={true}
                  sensitivity={180}
                  sendToBackOnClick={false}
                  cardDimensions={{ width: 220, height: 260 }}
                  cardsData={[
                    { id: 1, img: "/mobile-background/couple (1).webp" },             
                    { id: 2, img: "/mobile-background/couple (2).webp" },
                    { id: 3, img: "/mobile-background/couple (3).webp" },   
                    { id: 4, img: "/Couple_img/image.jpg" },
                  ]}
                  animationConfig={{ stiffness: 260, damping: 20 }}
                />
              </div>

              <motion.p 
                className="text-center text-xs sm:text-sm md:text-base text-white mt-4 sm:mt-6 font-sans font-medium tracking-wide"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1 }}
              >
                ✨ Drag to explore our moments ✨
              </motion.p>
            </div>
          </div>

          {/* Right Spacer */}
          <div className="hidden lg:block"></div>
        </motion.div>

        {/* Story Text - Full Width Below - Compact for mobile */}
        <motion.div 
          className="mt-8 sm:mt-12 md:mt-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Text container - elegant styling with improved typography */}
          <div className="relative bg-gradient-to-br from-white/8 via-white/12 to-white/8 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-2xl">
            
            <div className="space-y-5 sm:space-y-6 md:space-y-8 lg:space-y-10">
              {siteConfig.narrative.split("\n\n").map((paragraph, index) => (
                <motion.div 
                  key={index} 
                  className="relative"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                >
                  {/* First paragraph with elegant drop cap */}
                  {index === 0 ? (
                    <p className={`${cormorant.className} text-sm sm:text-base md:text-lg lg:text-xl leading-[1.8] sm:leading-[1.9] md:leading-[2] text-white text-pretty font-normal pl-3 sm:pl-4 md:pl-6`}>
                      <span className={`${playfair.className} float-left text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold italic text-white leading-none mr-2 sm:mr-3 mt-1 sm:mt-2`}>
                        {paragraph.charAt(0)}
                      </span>
                      {paragraph.slice(1)}
                    </p>
                  ) : (
                    <p className={`${cormorant.className} text-sm sm:text-base md:text-lg lg:text-xl leading-[1.8] sm:leading-[1.9] md:leading-[2] text-white text-pretty font-normal pl-3 sm:pl-4 md:pl-6`}>
                      {paragraph}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div 
            className="mt-8 sm:mt-12 md:mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="flex justify-center">
              <motion.a
                href="#guest-list"
                className="w-full sm:w-auto px-6 sm:px-8 md:px-12 py-3.5 sm:py-4 md:py-5 bg-white/10 backdrop-blur-sm text-white font-sans font-bold text-sm sm:text-base md:text-lg lg:text-xl rounded-[1.5rem] sm:rounded-[2rem] transition-all duration-300 shadow-xl hover:shadow-2xl border-2 border-white/30 hover:border-white/50 flex items-center justify-center gap-2 sm:gap-3 tracking-wide uppercase hover:bg-white/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.98 }}
              >
                Join Our Celebration
                <svg 
                  className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
            </div>
        </motion.div>

      </div>
    </Section>
  )
}