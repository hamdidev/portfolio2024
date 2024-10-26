import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
export const ContactSection = () => {
  return (
    <section id="contact">
      <div className="py-16 lg:py-24">
        <div className="container">
          <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
              <div className="">
                <h2 className="font-serif text-2xl md:text-3xl">
                  Let's create something amazing together
                </h2>
                <p className="text-sm md:text-base mt-2">
                  Ready to bring your next project to life? Let's get in touch
                  and discuss how I can help you achieve your goals.
                </p>
              </div>
              <div className="">
                <button className="inline-flex items-center text-white bg-gray-900 px-6 h-12  rounded-2xl hover:bg-gray-800 transition-all duration-300 w-max">
                  <span className="font-semibold ">Get in touch</span>
                  <ArrowUpRightIcon className="ml-2 size-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
