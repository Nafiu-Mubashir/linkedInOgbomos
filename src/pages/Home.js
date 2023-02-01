import React from 'react'
import { Button } from '../components/Button';
import header from '../assets/header.png'
import logo from '../assets/navLogo.png';
import { Header } from '../components/Header';

const Home = () => {
    return (
        <div className='min-w-screen'>

            <section className='w-full lg:pt-10 pt-5 pb-10 lg:pb-0'>

                <div className="lg:w-[95vw] w-[85vw] mx-auto gap-10 md:gap-0 mt-24">
                    <section>

                        <div className='flex lg:flex-row flex-col justify-center items-center mt-2 w-full mx-auto mb-20 p-3'>
                            <div className="w-full p-3">
                                <Header text={'Building Connections That Matter'} className={'lg:w-[80%]'} />
                                <Button text={'Register Here'} />
                            </div>
                            <div className="w-full mx-auto p-3 ">
                                <img src={header} className="lg:w-[559.7px] lg:height-[516px] mx-auto" alt='' />
                            </div>
                        </div>

                    </section>

                    <section>
                        <div>
                            <div>
                                <Header text={'The Countdown has started!!!'} className={'text-center'} />

                                <div className='flex lg:flex-row flex-col lg:justify-evenly lg:items-center mt-2 w-full mx-auto mb-20 p-3'>
                                    <div>
                                        <img src={logo} className='w-[465.09px] h-[49.18px]' alt="" />
                                        <p className='lg:text-[40px] text-[19.99px] text-[#0A66C2] mb-5'>is happening in exactly:</p>
                                    </div>
                                    <div>
                                        <div className='flex lg:justify-evenly lg:gap-3 gap-2'>
                                            <div class="mb-4">
                                                <input class="lg:w-[87.86px] w-[50.46px] h-[52.44px] lg:h-[129.93px] text-center scale-7 translate-x-4 skew-x-6 shadow appearance-none border rounded-md py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline lg:text-[50px] text-[20px] font-bold" id="username" type="text" placeholder="Days" value='22' />
                                                <label class="block text-gray-700 text-[13px] font-bold mb-2 text-center scale-7 translate-x-4 skew-x-3" for="Days">
                                                    Days
                                                </label>
                                            </div>
                                            <div class="mb-4">
                                                <input class="lg:w-[87.86px] w-[50.46px] h-[52.44px] lg:h-[129.93px] text-center scale-7 translate-x-4 skew-x-6 shadow appearance-none border rounded-md py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline lg:text-[50px] text-[20px] font-bold" id="username" type="text" placeholder="Hours" value='22' />
                                                <label class="block text-gray-700 text-[13px] font-bold mb-2 text-center scale-7 translate-x-4 skew-x-3" for="Hours">
                                                    Hours
                                                </label>
                                            </div>
                                            <div class="mb-4">
                                                <input class="lg:w-[87.86px] w-[50.46px] h-[52.44px] lg:h-[129.93px] text-center scale-7 translate-x-4 skew-x-6 shadow appearance-none border rounded-md py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline lg:text-[50px] text-[20px] font-bold" id="username" type="text" placeholder="Minutes" value='22' />
                                                <label class="block text-gray-700 text-[13px] font-bold mb-2 text-center scale-7 translate-x-4 skew-x-3" for="Minutes">
                                                    Mins
                                                </label>
                                            </div>
                                            <div class="mb-4">
                                                <input class="lg:w-[87.86px] w-[50.46px] h-[52.44px] lg:h-[129.93px] text-center scale-7 translate-x-4 skew-x-6 shadow appearance-none border rounded-md py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline lg:text-[50px] text-[20px] font-bold" id="username" type="text" placeholder="Seconds" value='22' />
                                                <label class="block text-gray-700 text-[13px] font-bold mb-2 text-center scale-7 translate-x-4 skew-x-3" for="Seconds">
                                                    Secs
                                                </label>
                                            </div>
                                        </div>
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
                    </section>

                </div>
            </section>

        </div>
    )
}

export default Home