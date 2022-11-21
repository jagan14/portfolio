import Head from 'next/head';
import AboutMe from '../components/AboutMe';
import Contact from '../components/Contact';
import Hero from '../components/Hero';
import Projects from '../components/Projects';

import Skills from '../components/Skills';
import WorkExperience from '../components/workExperience';
import { meta } from '../data/config';

export default function Index() {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
      </Head>
      <div className="p-6 lg:p-20 max-w-4xl m-auto w-full">
        <Hero />
        <div className="p-0 space-y-10">
          <AboutMe />
          <Projects />
          <WorkExperience />
          <Skills />
          <Contact />
        </div>
      </div>
    </>
  );
}
