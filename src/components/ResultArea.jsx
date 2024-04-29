import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import Tools from './Tools';
import fried_chicken from '../assets/fried_chicken.svg';
import burger from '../assets/burger.svg';
import pizza from '../assets/pizza.svg';

const currencyImages = {
  fried_chicken: fried_chicken,
  burger: burger,
  pizza: pizza,
};

const ResultArea = ({ show, setShow, canBuy, currency }) => {
  const currencyImage = currencyImages[currency];

  if (!show) {
    return null;
  }

  return (
    <>
      <div className="flex justify-center">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 50,
          }}
          id="result-area"
          className="relative bg-white md:w-8/12 w-11/12 md:mx-0 mx-2 md:max-w-2xl mt-4 py-4 pb-8 px-8 rounded-xl shadow-lg border border-gray-200"
        >
          {canBuy < 1 ? (
            <h1 className="text-2xl text-cOrange font-bold mb-4">
              S🥲d, you can buy:
            </h1>
          ) : (
            <h1 className="text-2xl text-cOrange font-bold mb-4">
              W😲w, you can buy:
            </h1>
          )}
          <div className="flex items-center justify-center flex-col md:flex-row">
            <p className="text-5xl text-black mb-4">
              {canBuy}
              <span>X</span>
            </p>
            <div className="flex flex-wrap">
              {canBuy < 1 ? (
                <img
                  src={currencyImage}
                  alt="Currency"
                  className="md:w-16 w-11"
                  aria-label="Currency Image"
                />
              ) : (
                [...Array(Math.min(Math.floor(canBuy), 5))].map((_, i) => (
                  <img
                    key={i}
                    src={currencyImage}
                    alt="Currency"
                    className="md:w-16 w-11"
                    aria-label="Currency Image"
                  />
                ))
              )}
            </div>
            <p className="text-cOrange absolute bottom-2 left-2 text-xs">
              by:{' '}
              <a href="https://wowyouconvertit.netlify.app">
                https://wowyouconvertit.netlify.app
              </a>
            </p>
          </div>
        </motion.div>
      </div>
      <Tools show={show} setShow={setShow} />
    </>
  );
};

ResultArea.propTypes = {
  show: PropTypes.bool,
  setShow: PropTypes.func,
  canBuy: PropTypes.number,
  currency: PropTypes.oneOf(['fried_chicken', 'burger', 'pizza']),
};

export default ResultArea;
