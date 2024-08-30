type TSectionTitle = {
  heading?: string;
  subHeading?: string;
  sectionImg?: string;
};

const SectionTitle = ({ heading, subHeading, sectionImg }: TSectionTitle) => {
  return (
    <div className="mx-auto text-center md:w-5/12 my-6">
      <p className="text-lime-500 mb-2">---{subHeading}---</p>
      <h3 className="uppercase text-2xl md:text-4xl py-2 font-medium text-slate-600">
        {heading}
      </h3>
      <img className="flex justify-center m-auto" src={sectionImg} alt="" />
    </div>
  );
};

export default SectionTitle;
