import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function HeadingAnimation({ heading, delay }) {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  const h2 = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        delayChildren: delay ?? 0,
        staggerChildren: 0.05,
      },
    },
  }

  const letterAnimation = {
    initial: {
      y: "120%",
    },
    animate: {
      y: 0,
      transition: {
        ease: [0.65, 0, 0.35, 1],
        duration: 1,
      },
    },
  }

  const overlayAnimation = {
    initial: {
      maxWidth: 0,
    },
    animate: {
      maxWidth: "100%",
      transition: {
        delay: 1.5,
        ease: [0.83, 0, 0.17, 1],
        duration: 0.5,
      },
    },
    transitionEnd: {
      overflow: "auto",
    },
  }

  useEffect(() => {
    if (inView) {
      controls.start("animate")
    }
  }, [inView, controls])

  return (
    <motion.h2
      className={"section-title px-8"}
      ref={ref}
      variants={h2}
      initial="initial"
      animate={controls}
    >
      {[...heading].map((letter, index) => (
        <motion.span
          className={`inline-block ${letter === " " ? "mr-[9px]" : ""}`}
          key={index}
          variants={letterAnimation}
        >
          {letter}
        </motion.span>
      ))}

      <motion.span
        className="overlay-span overflow-hidden left-0 inline-block absolute bottom-0 w-full h-full bg-dark text-white"
        variants={overlayAnimation}
      >
        <span className="px-8">
          {[...heading].map((letter, index) => (
            <span
              className={`inline-block ${letter === " " ? "mr-[9px]" : ""}`}
              key={index * 40}
            >
              {letter}
            </span>
          ))}
        </span>
      </motion.span>
    </motion.h2>
  )
}
