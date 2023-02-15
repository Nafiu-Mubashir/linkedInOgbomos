import React from 'react'
import { Button } from '../components/Button';
import header from '../assets/header.png'
import { Header } from '../components/Header';
import { Timer } from '../components/Timer';
import About from './About';
import Partner from './Patner';
import Contact from './Contact';


const Home = () => {


    return (
        <div className='min-w-screen'>

            <section className='w-full lg:pt-10 pt-5 pb-10 lg:pb-0'>

                <div className="lg:w-[95vw] w-[85vw] mx-auto gap-10 md:gap-0 mt-24">

                    <section>

                        <div className='flex lg:flex-row flex-col justify-center items-center mt-2 w-full mx-auto mb-10 p-3'>
                            <div className="lg:w-[35%] p-3 mx-auto">
                                <Header text={'Building Connections That Matter'} />
                                <Button text={'Register Here'} />
                            </div>
                            {/* <div className="w-full mx-auto p-3 "> */}
                            <img src={header} className="lg:w-[559.7px] lg:height-[516px] mx-auto" alt='' />
                            {/* </div> */}
                        </div>

                    </section>
                </div>
                <section className='timerSection bg-cover bg-no-repeat bg-center py-6 lg:py-20'>
                    <div className="lg:w-[95vw] w-[85vw] mx-auto gap-10 md:gap-0 mt-24 mb-20">
                        <div>
                            <div>
                                <Header text={'The Countdown has started!!!'} className={'text-left lg:text-center'} />

                                <div className='flex lg:flex-row flex-col lg:justify-evenly lg:items-center mt-2 w-full mx-auto lg:mb-5 p-3'>
                                    <div>
                                        <p className='text-center text-[20px] lg:text-[35px]'><span className='text-[#0A66C2] font-[700]'>Linked</span><span className='bg-[#0A66C2] text-white lg:rounded-lg rounded-sm lg:p-3 p-1 font-bold'>in</span> <span className='text-[#0A66C2]'> Local</span> <span className='text-[#0A66C2] font-[700]'> Ogbomoso</span></p>
                                        <p className='lg:text-[40px] text-[19.99px] text-[#0A66C2] mb-5'>is happening in exactly:</p>
                                    </div>
                                    <div>
                                        <Timer />
                                    </div>
                                </div>

                            </div>

                            <div>
                                <div className='flex lg:flex-row flex-col justify-evenly items-center mt-2 w-full mx-auto mb-20'>
                                    <Header text={'Have you registered?'} className={'lg:text-[60px] text-[24px]'} />
                                    <Button text={'Register Here'} />
                                </div>

                            </div>
                        </div>
                        
                    </div>
                </section>

               <About/>
                <Partner />
                <Contact />
             
            </section>

        </div>
    )
}

export default Home