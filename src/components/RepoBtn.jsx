import { SiGithub } from 'react-icons/si';

const RepoBtn = () => {
  return (
    <a
      href="https://github.com/3bdulrahmn69/wow_you_convert_it"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="View source code on GitHub"
      className="group fixed bottom-4 right-0 bg-black text-cOrange px-8 flex justify-start items-center gap-3 py-2 border-cOrange border-r-0 border-2 rounded-l-lg hover:bg-cOrange hover:text-black transition-colors duration-300 ease-in-out"
    >
      <SiGithub className="group-hover:scale-110" />
      <span className="hidden group-hover:block">Source Code</span>
    </a>
  );
};

export default RepoBtn;
