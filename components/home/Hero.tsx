import Button from "../Button";
import TitleLabel from "../TitleLabel";

const Hero = () => {
  return (
    <section className="hero w-full bg-bg-img-1 bg-cover bg-center bg-no-repeat padding-container sm:px-[20px]">
      <div className="flex-col w-full max-w-[554px] xl:max-w-[460px]">
        <TitleLabel text="Logistics & Supply Chain Solutions" />
        <h1>Your Gateway to any Destination in the World</h1>
        <p className="text-white font-krub text-[16px] font-normal leading-[151%] mb-[15px] xl:text-[13px]">
          In augue ligula, feugiat ut nulla consequat. Ut est lacus, molestie in
          arcu no, iaculis vehicula ipsum. Nunc faucibus, nisl id dapibus
          finibus, enim diam interdum nulla, sed laoreet risus lectus.{" "}
        </p>
        <Button type="button" title="Explore More" variant="btn_yellow" />
      </div>
    </section>
  );
};

export default Hero;
