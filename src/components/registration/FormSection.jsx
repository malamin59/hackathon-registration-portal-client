
import { motion } from "framer-motion";

const FormSection = ({
  number,
  title,
  description,
  icon: Icon,
  children,
}) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="rounded-2xl border border-white/10 bg-[#11111C] p-5 shadow-xl sm:p-7"
    >
      <div className="mb-7 flex items-start gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-purple-500/10 text-sm font-bold text-purple-400 ring-1 ring-purple-500/20">
          {number}
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white sm:text-xl">
            {title}
          </h2>

          <p className="mt-1 text-sm text-gray-400">
            {description}
          </p>
        </div>
      </div>

      {children}
    </motion.section>
  );
};

export default FormSection;
