import { useTheme } from 'next-themes';
import Image from 'next/image';

import { hero } from '../data/config';
import { AiOutlineGithub } from 'react-icons/ai';
import Link from 'next/link';

export default function Hero() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="mb-20">
      <div className="flex flex-row items-center justify-between w-full mb-10">
        <Link
          href="/"
          class="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100"
        >
          <span class="sr-only">Logo</span>
          👋
        </Link>

        <ul class="flex items-center  gap-2 text-sm font-medium text-gray-500">
          {/* <li class="hidden lg:block">
            <a class="rounded-lg px-3 py-2" href="/">
              {' '}
              Home{' '}
            </a>
          </li>

          <li>
            <a class="rounded-lg px-3 py-2" href="">
              {' '}
              Projects{' '}
            </a>
          </li> */}

          <li>
            <Link
              class="inline-flex items-center rounded-lg px-3 gap-2 py-2"
              href="https://github.com/jagan14"
              target="_blank"
            >
              GitHub
              <AiOutlineGithub />
            </Link>
          </li>
        </ul>
      </div>
      <h1 className="mt-5 text-xl sm:text-3xl mb-4">{hero.title}</h1>
      <p className="text-base font-light">{hero.desc}</p>
      <p className="text-base mt-2 font-light ">{hero.web3}</p>
    </div>
  );
}
