import React from 'react';

function WorkExperience() {
  const workExperience = [
    {
      title: 'Frontend Developer',
      company: 'Welectric',
      date: 'Aug 2021 - Jan 2022',
      desc: 'Collaborated with a team of developers to build modern and responsive web applications using best practice  Built semantically structured full stack web applications Worked in Creating Warranty Inventory Global Config Using Next Js and Monogo DB',
    },
  ];

  return (
    <div>
      <div className="overflow-x-hidden w-full">
        <h2 className=" text-black text-xl font-bold  landingSectionTitle max-w-max mx-0 text-left relative mb-4 md:w-max ">
          Work Experience
        </h2>
        {workExperience.map((item, index) => (
          <div key={index}>
            <h3 className=" font-bold  text-lg">{item.title}</h3>
            <p className="text-base font-light mt-3 ">{item.company}</p>
            <p className="text-base font-light mt-3 ">{item.date}</p>
            <p className="text-base font-light mt-3 ">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorkExperience;
