import React from 'react'
import { Button } from '../components/Button'
import { Header } from '../components/Header'
import image from '../assets/contact.png'

const Contact = () => {
  return (
    <section id='contact' className='bg-cover bg-no-repeat bg-center lg:py-16'>
      <div className="lg:w-[95vw] w-[85vw] mx-auto gap-10 md:gap-0 mt-2 mb-20">
          <section className='flex flex-col lg:flex-row justify-center  lg:p-10'>
            <div className='lg:w-[728px]'>

              <div className='mb-10'>
                <Header
                  text={'Contact Us'}
                  className={'text-[28px]'}
                  fontSize={'text-12px'}
                  content={'Do you have suggestions or other things to say? You can send a mail or reach out to us on other social media. We will duly attend to you promptly. Thank you!'}
                />
                <Button text={'Send a Mail'} />
              </div>

              <div className='mb-10'>
                <Header
                  text={'Got Questions?'}
                  className={'text-[28px]'}
                  fontSize={'text-12px'}
                  content={'Do you have any questions about the event or LInkedIn generally? Kindly reach out to us and we will respond shortly to all your questions as clearly as possible.'}
                />
                <div className='flex flex-row gap-4'>
                <Button text={'Ask Question'} className={'mb-3 lg:mb-0 text-[10px]'} />
                  <span className='text-[#0A66C2] hidden lg:block'>OR</span>
                  <Button text={'Check FAQs'} type={'outline'} className={'mb-3 lg:mb-0 text-[10px]'} />
                </div>
              </div>
            </div>
            <div className='w-full lg:w-[50%]'>
              <img src={image} alt="" className='w-full' />
            </div>
          </section>
      </div>
    </section>
  )
}

export default Contact