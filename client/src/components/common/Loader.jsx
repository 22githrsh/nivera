import { motion } from "framer-motion"

function Loader() {

  const text = "NIVERA".split("")

  return (
    <div className="fixed inset-0 bg-[#1A1A1A] flex items-center justify-center z-50">

      <div className="flex gap-1 text-5xl font-bold text-[#FE701A]">

        {text.map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.1,
              repeat: Infinity,
              repeatDelay: 0.6
            }}
          >
            {letter}
          </motion.span>
        ))}

      </div>

    </div>
  )
}

export default Loader