const Footer = () => {
  const social = [
    {
      name: "github",
      link: "https://github.com/Ak-ZeRo-Dev",
    },
    {
      name: "linkedin",
      link: "https://www.linkedin.com/in/ak-zero/",
    },
    {
      name: "whatsapp",
      link: "https://wa.me/+201224620279",
    },
  ];
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3 items-center">
        {social.map(({ name, link }) => (
          <div className="social-icon" key={name}>
            <a
              href={link}
              target="_blank"
              rel="noopener"
              className="flex justify-center items-center w-1/2 h-1/2"
            >
              <img
                src={`/assets/${name}.svg`}
                alt={name}
                className="w-full h-full"
              />
            </a>
          </div>
        ))}
      </div>

      <p className="text-white-500">&copy;2024 Ak-ZeRo, All rights reserved.</p>
    </footer>
  );
};

export default Footer;
