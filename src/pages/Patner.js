import React from 'react'
import { Button } from '../components/Button'
import { Header } from '../components/Header'
import image from '../assets/group2.png'


const Partner = () => {
  return (
    <section id='partnership' className='bg-cover bg-no-repeat bg-center lg:py-16'>
      <div className="lg:w-[95vw] w-[85vw] mx-auto gap-10 md:gap-0 mt-2 mb-20">
        {/* <div className="lg:w-[95vw] w-[85vw] mx-auto gap-10 md:gap-0 mt-2"> */}
          <section className='flex flex-col lg:flex-row justify-center py-8'>
            <div className='lg:w-[728px]'>
              <div className='mb-10'>
                <Header
                  text={'Partner with Us'}
                  className={'text-[28px]'}
                  content={'This is an opportunity to be part of something big. Partner with us to make the event successful and it’s a win-win for everyone.'}
                />
              </div>

              <div className='mb-10'>
                <Header
                  text={'Sponsorships'}
                  className={'text-[28px]'}
                  fontSize={'text-12px'}
                  content={'You can sponsor in kind or in cash to make the event successful. We have various sponsorship packages available with mega benefits. Kindly reach out to us to get the full details of sponsorships'}
                />
                <Button text={'Be a Sponsor'} />
              </div>

              <div className='mb-10'>
                <Header
                  text={'Volunteering'}
                  className={'text-[28px]'}
                  fontSize={'text-12px'}
                  content={'Join our team of volunteers and be a part of those responsible for the success of the event. Contribute to the team with your skills. Apply to be a volunteer today and you’d be glad you did.'}
                />
                <Button text={'Be a Volunteer'} />
              </div>
            </div>
            <div>
              <img src={image} alt="" className='lg:w-[345px] lg:h-[531px]' />
            </div>
          </section>
        {/* </div> */}
      </div>
    </section>
  )
}

export default Partner