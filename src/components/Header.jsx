import { motion } from 'framer-motion';

const Header = () => {
  return (
    <div className="flex justify-center py-8">
      <motion.h1
        initial={{ scale: 0 }}
        animate={{ rotate: 358, scale: 1 }}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 20,
        }}
        whileHover={{ scale: 0.4, rotate: 10 }}
        className="bg-cOrange py-2 md:py-4 px-4 md:px-8 text-2xl md:text-4xl rounded-lg uppercase shadow-xl"
      >
        W😲w You Convert It!
      </motion.h1>
    </div>
  );
};

export default Header;
