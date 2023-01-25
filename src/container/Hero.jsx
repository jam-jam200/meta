import { motion } from "framer-motion";
import styles from "../styles";
import { TypingText } from "../components";
import { topSocials } from "../constants";
import { slideIn, textVariant, staggerContainer } from "../utils/motion";

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} flex flex-col mx-auto `}
    >
      <motion.div
        variants={slideIn("up", "tween", 0.2, 1)}
        className="flex justify-end items-end flex-col p-1 gap-8 social"
      >
        {topSocials.map((social) => (
          <img
            src={social.url}
            key={social.name}
            alt={social.name}
            className="w-[27px] h-[27px] object-contain cursor-pointer"
          />
        ))}
      </motion.div>
      <div className="flex justify-center flex-col z-10 items-center relative">
        <TypingText title="| Home" textStyles="text-start" />
        <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
          Metaverse
        </motion.h1>

        <motion.div
          variants={textVariant(1.2)}
          className="flex flex-row justify-center items-center"
        >
          <h1 className={styles.heroHeading}>Ma</h1>
          <div className={styles.heroDText} />
          <h1 className={styles.heroHeading}>Ness</h1>
        </motion.div>
      </div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="relative w-full md:-mt-[60px] -mt-[12px]"
      >
        <div className="absolute w-full her0-gradient rounded-tl-[140px] h-[300px] z-[0] -top-[30px]" />
        <img
          src="/cover.png"
          alt="cover"
          className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative"
        />
        <a href="#explore">
          <div className="w-full flex justify-end sm:-mt-[70px] -mt-50px pr-[40px] relative z-10">
            <img
              src="/stamp.png"
              alt="stamp"
              className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain"
            />
          </div>
        </a>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
