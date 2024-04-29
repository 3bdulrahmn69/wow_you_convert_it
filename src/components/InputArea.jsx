import PropTypes from 'prop-types';
import { useState } from 'react';
import { motion } from 'framer-motion';

const InputArea = ({
  salary,
  setSalary,
  currency,
  setCurrency,
  setShow,
  currencyObject,
}) => {
  const [inputError, setInputError] = useState(false);

  const handleConversion = () => {
    if (!salary) {
      setInputError(true);
      setTimeout(() => {
        setInputError(false);
      }, 2000);
      return;
    } else {
      setShow(true);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleConversion();
    }
  };

  return (
    <motion.div
      animate={{
        x: -120,
        scale: [0.8, 1.2, 1],
      }}
      transition={{
        duration: 0.3,
        repeat: 1,
        repeatType: 'reverse',
      }}
      className="flex justify-center"
    >
      <div className="bg-white text-black md:w-8/12 w-11/12 md:mx-0 mx-2 md:max-w-2xl flex flex-col items-center py-8 rounded-xl shadow-lg border border-gray-200">
        <div className="flex md:items-center items-start mb-4 md:flex-row flex-col w-full md:w-auto px-2">
          <label htmlFor="salary-input" className="mr-2">
            Salary:<span className="text-red-500">*</span>
          </label>
          <div className="flex items-center">
            <input
              id="salary-input"
              type="number"
              placeholder="Enter your salary"
              aria-label="Salary"
              aria-required="true"
              aria-invalid={inputError ? 'true' : 'false'}
              className={`text-black py-2 px-4 rounded border border-gray-300 w-full md:w-56 ${
                inputError ? 'border-red-500 placeholder:text-red-500' : ''
              }`}
              value={salary}
              onChange={(e) => {
                setSalary(e.target.value);
                setShow(false);
              }}
              onKeyDown={handleKeyPress}
            />
            <span className="px-2">EGP</span>
          </div>
        </div>
        {inputError && (
          <p
            id="error-message"
            className="text-red-500 text-sm mb-4"
            role="alert"
          >
            Please enter your salary
          </p>
        )}
        <div className="flex md:items-center items-start mb-4 md:flex-row flex-col w-full md:w-auto px-2">
          <label htmlFor="food-select" className="mr-2">
            Currency:
          </label>
          <select
            id="food-select"
            value={currency}
            onChange={(e) => {
              setCurrency(e.target.value);
              setShow(false);
            }}
            aria-label="Currency"
            className="py-2 px-4 rounded border border-gray-300 w-full md:w-64"
          >
            {Object.keys(currencyObject).map((key) => (
              <option key={key} value={key}>
                {currencyObject[key].name}
              </option>
            ))}
          </select>
        </div>
        <button
          className="bg-cOrange py-2 px-6 uppercase text-white rounded hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
          onClick={handleConversion}
        >
          Convert
        </button>
      </div>
    </motion.div>
  );
};

InputArea.propTypes = {
  salary: PropTypes.string,
  setSalary: PropTypes.func,
  currency: PropTypes.string,
  setCurrency: PropTypes.func,
  setShow: PropTypes.func,
  currencyObject: PropTypes.object,
};

export default InputArea;
