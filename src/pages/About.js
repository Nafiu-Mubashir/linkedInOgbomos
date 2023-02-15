import React from 'react'
import speaker_1 from '../assets/Frame _16.png'
import speaker_2 from '../assets/Frame _17.png'
import speaker_3 from '../assets/Frame _18.png'
import { Header } from '../components/Header';
import { Section } from '../components/Section';
import group1 from '../assets/group1.png';


const About = () => {
    // Section card content ======================>>>>>>>>>>>>>>
    const SectionContent = [
       {
           id: 1,
           image: speaker_1,
           title: 'Abogunbade Olaiya',
           content: 'LinkedIn Local Ogbomosho is the largest networking event in Ogbomosho for LinkedIn users in Ogbomosho. The event promises to be a very helpful and useful event for all. LinkedIn Local Ogbomosho is the largest networking event in Ogbomosho for LinkedIn users in Ogbomosho. The event promises to be a very helpful and useful event for all. LinkedIn Local Ogbomosho is the largest.'
       },
       {
           id: 2,
           image: speaker_2,
           title: 'Abogunbade Olaiya',
           content: 'LinkedIn Local Ogbomosho is the largest networking event in Ogbomosho for LinkedIn users in Ogbomosho. The event promises to be a very helpful and useful event for all. LinkedIn Local Ogbomosho is the largest networking event in Ogbomosho for LinkedIn users in Ogbomosho. The event promises to be a very helpful and useful event for all. LinkedIn Local Ogbomosho is the largest.'
       },
       {
           id: 3,
           image: speaker_3,
           title: 'Abogunbade Olaiya',
           content: 'LinkedIn Local Ogbomosho is the largest networking event in Ogbomosho for LinkedIn users in Ogbomosho. The event promises to be a very helpful and useful event for all. LinkedIn Local Ogbomosho is the largest networking event in Ogbomosho for LinkedIn users in Ogbomosho. The event promises to be a very helpful and useful event for all. LinkedIn Local Ogbomosho is the largest.'
       },
   ];
   // End of Card section ===================================>>>>>>>>>>>
  return (
    <>
        <section id="about" >
                    <div className="lg:w-[95vw] w-[85vw] mx-auto gap-10 md:gap-0 mt-2">
                        <div className=''>
                            {/* <Header text={'About'} className='' /> */}
                            <p className='text-center'><span className='lg:text-[64px] text-[] text-[#0A66C2] font-[700]'>About Linked</span><span className='lg:text-[64px] text-[32p] bg-[#0A66C2] text-white lg:rounded-lg rounded-sm lg:p-3 p-1 font-bold'>in</span> <span className='lg:text-[64px] text-[32p] text-[#0A66C2]'> Local</span> <span className='lg:text-[64px] text-[32p] text-[#0A66C2] font-[700]'> Ogbomoso</span></p>
                        </div>
                        <div className='flex flex-col lg:flex-row justify-center items-center gap-4'>
                            <Section
                                    type={2}
                                    // key={3}
                                    // title={content.title}
                                    content={'LinkedIn Local Ogbomosho is the largest networking event in Ogbomosho for LinkedIn users in Ogbomosho. The event promises to be a very helpful and useful event for all. LinkedIn Local Ogbomosho is the largest networking event in Ogbomosho for LinkedIn users in Ogbomosho. The event promises to be a very helpful and useful event for all. LinkedIn Local Ogbomosho is the largest networking event in Ogbomosho for LinkedIn users in Ogbomosho. The event promises to be a very helpful and useful event for all.LinkedIn Local. The event promises to be a very helpful and useful event for all. LinkedIn Local Ogbomosho is the largest so far.'}
                                    image={group1}
                                    // id={content.id}
                                />
                        </div>
                    </div>
                {/* </section>

                <section > */}
                    <div className="lg:w-[95vw] w-[85vw] mx-auto gap-10 md:gap-0 mt-2 mb-20">
                        <Header text={'Meet The Guest Speakers'} className={'text-[20px] text-center'} />

                        {
                        SectionContent.map((content, i) => {
                            return (
                                <Section
                                    type={1}
                                    key={i}
                                    title={content.title}
                                    content={content.content}
                                    image={content.image}
                                    id={content.id}
                                />
                            )
                        })
                    }
                    </div>
                </section>
    </>
  )
}

export default About