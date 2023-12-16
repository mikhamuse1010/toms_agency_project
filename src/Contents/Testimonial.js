import { MdOutlineFormatQuote } from "react-icons/md";

const Testimonial = () => {
  const className = {
    Container: "w-screen h-auto lg:h-screen py-16 space-y-10",
    titleContainer: "w-full h-fit text-center font-hindVadodara",
    title: "text-3xl md:text-4xl",
    titleLine3: "relative w-12 h-6",
    underLine:
      "w-full h-2 absolute inset-x-0 top-8 md:top-9 bg-yellow-500 -z-10",
    cardsContainer:
      "w-full h-auto lg:h-fit grid grid-cols-1 lg:grid-cols-2 gap-5 px-10 place-items-center",
    cardContainer: "w-fit md:w-100 h-80 p-7 shadow-xl rounded-xl space-y-5",
    quoteIcon: "w-14 h-14 text-[#FDC221]",
    cardCompanyName: "w-fit inline-flex items-center gap-2",
    textLine: "w-3 h-1 bg-yellow-500",
  };

  return (
    <div id="Testimonial" className={className.Container}>
      <div className={className.titleContainer}>
        <h1 className={className.title}>
          <strong>Our Testimonials</strong>
          <br />
          What Our Clients Are{" "}
          <span className={className.titleLine3}>
            Saying
            <div className={className.underLine} />
          </span>
        </h1>
      </div>

      <div className={className.cardsContainer}>
        <div className={className.cardContainer}>
          <MdOutlineFormatQuote className={className.quoteIcon} />
          <p>
            I've loved working with them since we started working with them this
            year. The team is well rounded and strong in all aspects of asset —
            creation from design to implementation. More importantly, they got
            our “voice” and brand vibe very quickly.
          </p>
          <h1 className={className.cardCompanyName}>
            <div className={className.textLine} />
            Tinep ID
          </h1>
        </div>
        <div className={className.cardContainer}>
          <MdOutlineFormatQuote className={className.quoteIcon} />
          <p>
            They feel like part of the internal team and have as much stake in
            our success as we do.
          </p>
          <h1 className={className.cardCompanyName}>
            <div className={className.textLine} />
            BACK UP AND PRINT ID
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
