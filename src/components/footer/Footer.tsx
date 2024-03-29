import Link from "next/link"

import facebook from '@public/facebook.svg'
import github from '@public/github.svg'
import instagram from '@public/instagram.svg'
import youtube from '@public/youtube.svg'
import twitter from '@public/twitter.svg'
import Image from "next/image"


const categorySubHeadings = {
  heading1: {
    title: 'suite',
    subheadings: [ 'lists', 'mail', 'jobs', 'network', ],
  },
  heading2: {
    title: 'support',
    subheadings: [ 'help', 'report bug' ],
  },
  heading3: {
    title: 'about',
    subheadings: [ 'seeran', ],
  },
  heading4: {
    title: 'legal',
    subheadings: [ 'terms', 'privacy', 'security', ],
  },
}

interface Subheadings {
  title: string,
  subheadings: Array<string>,
}

const MenuColoumnSections = ({ subHeadings } :{ subHeadings: Subheadings } ) => {

  const title = subHeadings.title
  const subheadings = subHeadings.subheadings

  return (
      <div>
          <h1 className="pb-5 text-gray-400 font-normal flex gap-3">{title}</h1>
          {subheadings.map( subheading => (
              <div key={subheading} className=" text-start">
                  <Link href={`/${subheading}`} className="hover:text-blue-700" >{subheading}</Link><br/>
                  
              </div>
          ))}
      </div>
  )
}


const Footer = () => {
  return (
    <div className="w-full flex justify-center mb-5 bottom-0 text-start border-t-2 border-opacity-30 border-gray-200 py-7 backdrop-blur-md bg-white/90">
      <div className=" max-w-[1450px] w-full px-7">
        <div className="lg:flex w-full items-center px-7">
          <div className="w-full mb-7 max-lg:text-center">
            <p className="lg:text-start font-bold text-[40px]">seeran</p>
            <p>Where <span className="text-blue-700">innovation</span> meets opportunity</p>
          </div>
          <div className="w-full flex justify-center max-sm:grid max-sm:grid-cols-2 lg:justify-end place-items-center font-extrabold sm:gap-20 gap-5">
            <MenuColoumnSections subHeadings={categorySubHeadings.heading1}/>
            <MenuColoumnSections subHeadings={categorySubHeadings.heading2}/>
            <MenuColoumnSections subHeadings={categorySubHeadings.heading3}/>
            <MenuColoumnSections subHeadings={categorySubHeadings.heading4}/>
          </div>
        </div>
        <div className="lg:flex border-y-2 border-gray-200 border-opacity-50 my-10 py-10 lg:px-16">
          <div className="w-full mb-4 max-lg:text-center">
            <p className="font-bold">Subscribe to our newsletter</p>
            <p className="w-full">the latest news, articles, and updates, sent directly to your inbox.</p>
          </div>
          <div className="flex w-full justify-center lg:justify-end">
            <input type="text" placeholder="enter your email" className="h-10 transition duration-300 ease-in-out bg-none border-2 border-blue-700 hover:border-blue-700 pl-4 pr-28 py-1 rounded-lg"/>
          </div>
        </div>
        <div className="lg:flex px-5">
          <div className="lg:w-full flex gap-10 mb-5 max-lg:justify-center">
            <Link href={''} >
              <Image src={youtube} alt="youtube logo" className="hover:opacity-60" />
            </Link>
            <Link href={''}>
              <Image src={instagram} alt="youtube logo" className="hover:opacity-60"/>
            </Link>
            <Link href={''}>
              <Image src={twitter} alt="youtube logo" className="hover:opacity-60"/>
            </Link>
            <Link href={''}>
              <Image src={github} alt="youtube logo" className="hover:opacity-60"/>
            </Link>
            <Link href={''}>
              <Image src={facebook} alt="youtube logo" className="hover:opacity-60" />
            </Link>          
            
          </div>
          <div className="lg:w-full flex lg:justify-end justify-center">
            <p>© 2020 Seeran, Inc. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer