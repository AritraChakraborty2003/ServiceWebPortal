const Card = (props) => {
  return (
    <div className=" flex flex-col justify-center items-center gap-y-4 sm:gap-y-6 pb-8 mx-2 w-full sm:w-[45vw] md:w-[30vw] lg:w-[25vw] xl:w-[20vw] mt-4 border border-black rounded-2xl p-4 shadow-lg">
      <div className="bg-white p-2 border border-black w-full h-[30vw] sm:h-[25vw] md:h-[20vw] lg:h-[18vw] xl:h-[16vw] rounded-2xl flex justify-center items-center">
        <img
          src={props.image}
          className="w-full h-full object-cover rounded-2xl"
          alt="service"
        />
      </div>
      <div>
        <p className="font-medium text-[4vw] sm:text-[3vw] md:text-[2.5vw] lg:text-[2vw] xl:text-[1.5vw] text-center font-poppins">
          {props.details}
        </p>
      </div>
      <button
        className="text-[4vw] sm:text-[3vw] md:text-[2.5vw] lg:text-[2vw] xl:text-[1.5vw] w-[70%] sm:w-[60%] md:w-[50%] lg:w-[45%] bg-blue-500 py-1 sm:py-2 rounded-lg text-white mt-3 hover:bg-blue-600 transition duration-300"
      >
        Explore
      </button>
    </div>
  );
};

export default Card;
