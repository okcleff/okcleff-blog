import siteMetadata from '@/data/siteMetadata'
import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer>
      <div className="mb-0 flex flex-col justify-start space-y-1.5 space-x-0 py-10 text-gray-500 dark:text-gray-400">
        <div className="flex flex-col items-center space-y-2 text-sm sm:flex-row sm:justify-between sm:text-base">
          <ul className="flex space-x-2">
            {/* <li>{`© ${new Date().getFullYear()}`}</li>
            <li>{` • `}</li> */}
            <li>
              <Link href="/">{siteMetadata.title}</Link>
            </li>
          </ul>
          <ul className="flex cursor-pointer items-center space-x-5">
            <li>
              <a href={siteMetadata.github} target="_blank" rel="noreferrer" aria-label="github">
                <FaGithub className="sm:text-lg" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
