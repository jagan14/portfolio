import React from 'react';

function AboutMe() {
  const aboutMe = [
    {
      desc: "I am a web developer, working in both, backend and frontend programming. Excited for improving my skills and learning new technologies. I'm open to learn and work with any web technology and currently doing freelance gigs",

      desc1:
        ' I like to code matters from scratch and love the idea of bringing thoughts to life. Connect with me to get your project done.',

      desc2:
        ' I value minimalistic designs, thoughtful branding of the content, and customer relatable experience. Letsdiscover together how we can make your project convert better! ',

      desc3:
        ' I enjoy creating or redesigning a distinct identity for a product or service, get more traffic from search engine and social platforms.',
    },
  ];
  return (
    <div>
      <div className="overflow-x-hidden w-full">
        <h2 className=" text-black text-xl font-bold  landingSectionTitle max-w-max mx-0 text-left relative mb-4 md:w-max ">
          About Me
        </h2>
        {aboutMe.map((item, index) => (
          <div key={index}>
            <p className="text-base font-light mt-3 ">{item.desc}</p>
            <p className="text-base font-light mt-3 ">{item.desc1}</p>
            <p className="text-base font-light mt-3 ">{item.desc2}</p>
            <p className="text-base font-light mt-3 ">{item.desc3}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutMe;
