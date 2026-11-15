
import { motion } from "framer-motion";

const NotFoundContent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.25, duration: 0.7 }}
      className="mx-auto mt-10 max-w-xl"
    >
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-purple-400">
        Page Not Found
      </p>

      <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
        Oops! You've Lost
        <span className="mt-2 block bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
          Your Way.
        </span>
      </h2>

      <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-gray-400 sm:text-base">
        The page you're looking for doesn't exist, has been
        moved, or might have taken a different path.
        Let's get you back on track.
      </p>
    </motion.div>
  );
};

export default NotFoundContent;
