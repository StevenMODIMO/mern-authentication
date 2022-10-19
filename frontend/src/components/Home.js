import { motion } from 'framer-motion'
export default function Home() {
    return (
        <div className="Home">
            <section className="grid-one">
            <motion.main initial={{ opacity: 0, scale: 0.9 }}
            whileHover={{ scale: 0.9  }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        default: {
          duration: 0.3,
          ease: [0, 0.71, 0.2, 1.01]
        },
        scale: {
          type: "spring",
          damping: 5,
          stiffness: 100,
          restDelta: 0.001
        }
      }}>
                <div></div>
                <div></div>
                <div></div>
            </motion.main>
            <motion.main initial={{ opacity: 0, scale: 0.9 }}
            whileHover={{ scale: 0.9  }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        default: {
          duration: 0.3,
          ease: [0, 0.71, 0.2, 1.01]
        },
        scale: {
          type: "spring",
          damping: 5,
          stiffness: 100,
          restDelta: 0.001
        }
      }}>
                <div></div>
                <div></div>
                <div></div>
            </motion.main>
            <motion.main initial={{ opacity: 0, scale: 0.9 }}
            whileHover={{ scale: 0.9  }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        default: {
          duration: 0.3,
          ease: [0, 0.71, 0.2, 1.01]
        },
        scale: {
          type: "spring",
          damping: 5,
          stiffness: 100,
          restDelta: 0.001
        }
      }}>
                <div></div>
                <div></div>
                <div></div>
            </motion.main>
            </section>
            <section className="grid-two">
            <motion.article initial={{ opacity: 0, scale: 0.5 }}
            whileHover={{ scale: 0.9  }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        default: {
          duration: 0.3,
          ease: [0, 0.71, 0.2, 1.01]
        },
        scale: {
          type: "spring",
          damping: 5,
          stiffness: 100,
          restDelta: 0.001
        }
      }}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </motion.article>
            </section>
        </div>
    )
}