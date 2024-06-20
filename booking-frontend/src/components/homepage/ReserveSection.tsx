const ReserveSection: React.FC = () => {

    return(
        <section id="treatments" className="mx-16 py-11 mb-11 flex flex-col items-center">
          <h2 className="font-abril text-4xl mb-8 uppercase text-center">
            Every Massage is Different
          </h2>
          <p className="text-center text-2xl font-heebo font-light">
            Experience the massage modalities that are right for you in the
            moment and in the context of your overall healing.
          </p>
          <button
            onClick={() => (window.location.href = "/booking")}
            className="mt-10 border-2 border-black tracking-wider font-bold uppercase py-5 px-8 hover:text-white hover:bg-black   transform transition-transform duration-300"
          >
            Reserve Now
          </button>
        </section>
    );
};

export default ReserveSection;