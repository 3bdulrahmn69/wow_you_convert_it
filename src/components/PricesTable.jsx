import PropTypes from 'prop-types';
import { useState } from 'react';

function PricesTable({ currencyObject, onPriceChange }) {
  const [editedPrices, setEditedPrices] = useState({});

  const handlePriceInput = (currency, event) => {
    const value = event.target.value;
    setEditedPrices((prevState) => ({
      ...prevState,
      [currency]: value,
    }));
  };

  const handlePriceCommit = (currency) => {
    const value = parseFloat(editedPrices[currency]);
    if (!isNaN(value)) {
      onPriceChange(currency, value);
      setEditedPrices((prevState) => ({
        ...prevState,
        [currency]: undefined, // Reset local edited price to allow for parent state re-sync
      }));
    }
  };

  return (
    <div className="flex justify-center">
      <table className="bg-white text-black rounded-lg overflow-hidden">
        <thead className="bg-cOrange text-white">
          <tr>
            <th>Currency</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody className="text-cOrange">
          {Object.entries(currencyObject).map(([currency, { name, price }]) => (
            <tr key={currency}>
              <td className="pl-2 px-4">{name}</td>
              <td>
                <input
                  type="number"
                  className="w-20 text-right font-bold px-2 border-2 border-transparent border-l-cOrange"
                  value={
                    editedPrices[currency] !== undefined
                      ? editedPrices[currency]
                      : price
                  }
                  onChange={(event) => handlePriceInput(currency, event)}
                  onBlur={() => handlePriceCommit(currency)}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter') {
                      handlePriceCommit(currency);
                    }
                  }}
                  min="1"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

PricesTable.propTypes = {
  currencyObject: PropTypes.object.isRequired,
  onPriceChange: PropTypes.func.isRequired,
};

export default PricesTable;
