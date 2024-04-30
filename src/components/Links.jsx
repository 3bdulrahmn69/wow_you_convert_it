import {
  FaGithub,
  FaLinkedinIn,
  FaMedium,
  FaSquareXTwitter,
  FaFacebook,
  FaInstagram,
} from 'react-icons/fa6';

const Links = () => {
  return (
    <div className="flex gap-2">
      {myLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          className="text-white text-4xl flex items-center gap-2 hover:text-cYellow duration-300"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          title={link.label}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

const myLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/3bdulrahmn69',
    icon: <FaGithub />,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/3bdulrahmn69/',
    icon: <FaLinkedinIn />,
  },
  {
    label: 'Medium',
    href: 'https://medium.com/@3bdulrahmn69',
    icon: <FaMedium />,
  },
  {
    label: 'Twitter',
    href: 'https://twitter.com/3bdulrahmn69',
    icon: <FaSquareXTwitter />,
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/3bdulrahmn69',
    icon: <FaFacebook />,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/3bdulrahmn69',
    icon: <FaInstagram />,
  },
];

export default Links;
