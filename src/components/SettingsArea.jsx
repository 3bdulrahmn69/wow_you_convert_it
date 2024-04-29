import { useState } from 'react';
import PropTypes from 'prop-types';
import Settings from './Settings';
import PricesTable from './PricesTable';

const SettingsArea = ({ currencyObject, onPriceChange }) => {
  const [showTable, setShowTable] = useState(false);

  return (
    <div>
      <Settings showTable={showTable} setShowTable={setShowTable} />
      {showTable && <PricesTable currencyObject={currencyObject} onPriceChange={onPriceChange} />}
    </div>
  );
};

SettingsArea.propTypes = {
  currencyObject: PropTypes.object.isRequired,
  onPriceChange: PropTypes.func.isRequired,
};

export default SettingsArea;
