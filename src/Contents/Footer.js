/* eslint-disable jsx-a11y/anchor-is-valid */

const Footer = () => {
  const className = {
    Container:
      "w-screen h-fit p-14 rounded-tr-[200px] bg-black flex justify-center",
    map: "w-fit md:w-[500px] lg:w-full h-[300px] border-none",
    mapBox: "w-full h-full flex justify-center items-center",
    innerBox: "w-fit h-fit space-y-5",
    Title: "font-bold",
    description: "font-hindVadodara",
    list: "flex items-center gap-2",
    spacing: "hidden lg:block",
    footerText:
      "inline-block lg:inline-flex text-center w-full space-x-2 gap-2 text-white",
  };

  return (
    <div className={className.Container}>
      <div className={className.innerBox}>
        <div className={className.mapBox}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63245.97077191136!2d110.33982533716123!3d-7.803249010408385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5787bd5b6bc5%3A0x21723fd4d3684f71!2sYogyakarta%2C%20Yogyakarta%20City%2C%20Special%20Region%20of%20Yogyakarta!5e0!3m2!1sen!2sid!4v1665966573866!5m2!1sen!2sid"
            title="A Map"
            className={className.map}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <p className={className.footerText}>
          <a href="#" className={className.Title}>
            Toms Agency{" "}
          </a>{" "}
          | <span> Yogyakarta, Daerah Istimewa Yogyakarta</span> |
          <a href="mailto:info@hellotoms.com"> info@hellotoms.com </a> |
          <a href="https://github.com/tomibudis">
            https://github.com/tomibudis
          </a>{" "}
          | <p>+62 274 746 4351</p>
        </p>
      </div>
    </div>
  );
};

export default Footer;
