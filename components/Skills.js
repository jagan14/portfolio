import React from 'react';

function Skills() {
  const skills = [
    {
      name: 'HTML',
    },
    {
      name: 'CSS',
    },
    {
      name: 'JavaScript',
    },
    {
      name: 'React',
    },
    {
      name: 'Next.js',
    },
    {
      name: 'Tailwind CSS',
    },
    {
      name: 'Node.js',
    },
    {
      name: 'Express.js',
    },
    {
      name: 'MongoDB',
    },
    {
      name: 'Git',
    },
    {
      name: 'GitHub',
    },
    {
      name: 'Solidity',
    },
    {
      name: 'Ethereum',
    },
  ];

  return (
    <div>
      <div className="overflow-x-hidden w-full">
        <h2 className=" text-black text-xl font-bold  landingSectionTitle max-w-max mx-0 text-left relative mb-4 md:w-max ">
          My Skills
        </h2>
      </div>
      <div className="w-full flex flex-wrap -m-2">
        {skills.map((item, index) => (
          <span
            className="border  border-lightText rounded-lg m-2 px-3 py-1"
            key={index}
          >
            {item.name}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Skills;
