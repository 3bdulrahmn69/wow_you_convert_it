import PropTypes from 'prop-types';
import { FaDownload, FaArrowRotateLeft } from 'react-icons/fa6';
import html2canvas from 'html2canvas';

const Tools = ({ show, setShow }) => {
  const handleDownload = () => {
    const resultArea = document.getElementById('result-area');
    html2canvas(resultArea).then((canvas) => {
      const link = document.createElement('a');
      link.download = 'result.png';
      link.href = canvas.toDataURL();
      link.click();
    });
  };

  if (!show) return null;
  return (
    <div className="flex justify-center gap-2 my-8 text-2xl">
      <span
        role="button"
        className="bg-white text-cOrange p-2 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300"
        onClick={handleDownload}
      >
        <FaDownload />
      </span>
      <span
        role="button"
        className="bg-cOrange text-white p-2 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300"
        onClick={() => {
          setShow(false);
        }}
        aria-label="another calculation button"
      >
        <FaArrowRotateLeft />
      </span>
    </div>
  );
};

Tools.propTypes = {
  show: PropTypes.bool,
  setShow: PropTypes.func,
};

export default Tools;
