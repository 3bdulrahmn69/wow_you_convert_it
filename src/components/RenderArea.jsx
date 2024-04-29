import { useState } from 'react';
import InputArea from './InputArea';
import ResultArea from './ResultArea';
import SettingsArea from './SettingsArea';

const RenderArea = () => {
  const [salary, setSalary] = useState('');
  const [currency, setCurrency] = useState('fried_chicken');
  const [show, setShow] = useState(false);

  const [currencyObject, setCurrencyObject] = useState({
    fried_chicken: { name: 'Fried Chicken', price: 50 },
    burger: { name: 'Burger', price: 100 },
    pizza: { name: 'Pizza', price: 150 },
  });

  const handlePriceChange = (currencyKey, newPrice) => {
    setCurrencyObject((prev) => ({
      ...prev,
      [currencyKey]: { ...prev[currencyKey], price: newPrice },
    }));
  };

  return (
    <div>
      {!show && (
        <InputArea
          salary={salary}
          setSalary={setSalary}
          currency={currency}
          setCurrency={setCurrency}
          setShow={setShow}
          currencyObject={currencyObject}
        />
      )}
      <ResultArea
        show={show}
        setShow={setShow}
        canBuy={salary / currencyObject[currency].price}
        currency={currency}
      />
      <SettingsArea
        currencyObject={currencyObject}
        onPriceChange={handlePriceChange}
      />
    </div>
  );
};

export default RenderArea;
