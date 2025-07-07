import React from 'react';
import { motion } from 'framer-motion';

const brandLogos = [
  'https://i.ibb.co/F4BYTRj9/amazon.png',
  'https://i.ibb.co/QvNYvkvx/amazon-vector.png',
  'https://i.ibb.co/5WChkfY2/casio.png',
  'https://i.ibb.co/3yRZDKmy/moonstar.png',
  'https://i.ibb.co/xSTwLb1W/randstad.png',
  'https://i.ibb.co/jZBfS7Zt/start.png',
  'https://i.ibb.co/PGXCKnw2/start-people-1.png'
];

const scrollVariants = {
  animate: {
    x: ['0%', '-100%'],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: 'loop',
        duration: 100,
        ease: 'linear'
      }
    }
  }
};

const Brands = () => {
  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-center font-bold lg:text-3xl text-xl text-gray-800 mb-8">
          We've helped thousands of sales teams
        </h1>

        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex gap-10 w-max"
            variants={scrollVariants}
            animate="animate"
          >
            {/* Repeat the logos twice for seamless infinite loop */}
            {[...brandLogos, ...brandLogos].map((logo, index) => (
              <div key={index} className="flex justify-center items-center min-w-[150px]">
                <img
                  src={logo}
                  alt={`Brand ${index + 1}`}
                  className="w-40 h-auto object-contain grayscale hover:grayscale-0 transition duration-300"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
