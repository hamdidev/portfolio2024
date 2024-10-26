const SectionHeader = ({
  title,
  description,
  eyebrow,
}: {
  title: string;
  description: string;
  eyebrow: string;
}) => {
  return (
    <>
      {" "}
      <div className="flex justify-center">
        <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-center bg-clip-text text-transparent">
          {eyebrow}
        </p>
      </div>
      <h2 className="font-serif text-3xl md:text-5xl text-center mt-6 tracking-wider">
        {title}
      </h2>
      <p className="text-center text-sm md:text-lg lg:text-xl text-white/70 mt-4 max-w-md mx-auto">
        {description}
      </p>
    </>
  );
};

export default SectionHeader;
