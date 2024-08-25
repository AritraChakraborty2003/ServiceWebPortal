import Card from "./Card";

const Services = () => {
  return (
    <>
      <div className="serviceAreaHolder w-[100vw]  pt-5 pb-10" style={{ backgroundColor: '#f0f2ff' }}>
        <div className="serviceHeading">
          <p className="font-bold text-[11vmin] ml-3">
          <p className="font-bold text-[11vmin] ml-3">
            Our <span className="text-blue-500">Services</span>
          </p>
          </p>
        </div>

        <div className="serviceBoxHolder gap-x-12 lg:gap-x-14 2xl:gap-x-14 gap-y-7 lg:gap-y-5 mt-[10vmin] w-[100vw] flex flex-wrap justify-center items-center pb-6 mt-[-3vmin]">
          <div className="serviceBox">
            <Card
              image={"https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=800"}
              details={"Web Development"}
            />
          </div>
          <div className="serviceBox">
            <Card
              image={"https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800"}
              details={"App Development"}
            />
          </div>
          <div className="serviceBox">
            <Card image={"https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=800"}
             details={"Cloud Computing"} />
          </div>
        </div>
      </div>
    </>
  );
};
export default Services;
