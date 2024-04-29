import PropTypes from 'prop-types';
import { FaGear } from 'react-icons/fa6';

function Settings({ showTable, setShowTable }) {
  return (
    <div className="flex justify-center py-8">
      <button
        className="group flex items-center gap-2 uppercase bg-black px-4 py-2"
        onClick={() => setShowTable(!showTable)}
      >
        Settings
        <FaGear className="group-hover:animate-spin" />
      </button>
    </div>
  );
}

Settings.propTypes = {
  showTable: PropTypes.bool.isRequired,
  setShowTable: PropTypes.func.isRequired,
};

export default Settings;
