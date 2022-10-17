/* eslint-disable jsx-a11y/anchor-is-valid */
import { FaEnvelope, FaGithub, FaMap, FaPhone } from "react-icons/fa";

const Footer = () => {
  const className = {
    Container:
      "w-screen h-fit p-10 rounded-tr-[200px] bg-black grid grid-cols-1 lg:grid-cols-2 gap-10 place-items-center",
    innerContainer:
      "w-fit h-fit text-white space-y-5 text-center lg:text-start",
    map: "h-[200px] w-[300px] lg:h-[300px] lg:w-[400px] border-none",
    Title: "font-Playfair font-bold text-2xl",
    description: "font-hindVadodara",
    list: "flex items-center gap-2",
    spacing: "hidden lg:block",
  };

  return (
    <div className={className.Container}>
      <div className={className.innerContainer}>
        <a href="#">
          <h1 className={className.Title}>Toms Agency</h1>
        </a>
        <p className={className.description}>
          <span className={className.list}>
            <FaMap />
            Yogyakarta, Daerah Istimewa Yogyakarta
          </span>
          <span className={className.list}>
            <FaEnvelope />
            <a href="mailto:info@hellotoms.com">info@hellotoms.com</a>
          </span>
          <span className={className.list}>
            <FaGithub />
            <a href="https://github.com/tomibudis">
              https://github.com/tomibudis
            </a>
          </span>
          <span className={className.list}>
            <FaPhone />
            +62 274 746 4351
          </span>
        </p>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63245.97077191136!2d110.33982533716123!3d-7.803249010408385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5787bd5b6bc5%3A0x21723fd4d3684f71!2sYogyakarta%2C%20Yogyakarta%20City%2C%20Special%20Region%20of%20Yogyakarta!5e0!3m2!1sen!2sid!4v1665966573866!5m2!1sen!2sid"
        title="A Map"
        className={className.map}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Footer;
