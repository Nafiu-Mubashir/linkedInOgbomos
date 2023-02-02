import React from 'react'
import { Button } from '../components/Button';
import header from '../assets/header.png'
import logo from '../assets/navLogo.png';
import { Header } from '../components/Header';
import { Timer } from '../components/Timer';

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
                    </section>

                    <section>
                        <div className=''>
                            {/* <Header text={'About'} className='' /> */}
                            <p className='text-center'><span className='lg:text-[64px] text-[32p] text-[#0A66C2] font-[700]'>About Linked</span><span className='lg:text-[64px] text-[32p] bg-[#0A66C2] text-white lg:rounded-lg rounded-sm lg:p-3 p-1 font-bold'>in</span> <span className='lg:text-[64px] text-[32p] text-[#0A66C2]'> Local</span> <span className='lg:text-[64px] text-[32p] text-[#0A66C2] font-[700]'> Ogbomoso</span></p>
                        </div>
                        <div>
                            <p>
                                <svg width="42" height="37" viewBox="0 0 42 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M39.2558 0.720459H29.4419V2.4287H29.7584C30.075 2.04909 30.5815 1.79602 31.1514 1.79602C32.1644 1.79602 33.0509 2.68177 33.0509 3.69406C33.0509 5.08595 31.9112 6.22478 30.5182 6.22478H28.1122C26.7193 6.22478 25.5796 5.08595 25.5796 3.69406V0.720459H20.8942V2.4287H21.2108C21.5274 2.04909 22.0339 1.79602 22.6038 1.79602C23.6168 1.79602 24.5032 2.68177 24.5032 3.69406C24.5032 5.08595 23.3635 6.22478 21.9706 6.22478H19.5646C18.1716 6.22478 17.032 5.08595 17.032 3.69406V0.720459H12.3466V2.4287H12.6632C12.9797 2.04909 13.4863 1.79602 14.0561 1.79602C15.0692 1.79602 15.9556 2.68177 15.9556 3.69406C15.9556 5.08595 14.8159 6.22478 13.423 6.22478H11.017C9.62401 6.22478 8.48432 5.08595 8.48432 3.69406V0.720459H2.53263C1.13968 0.720459 0 1.85928 0 3.25118V8.31263C0 8.69224 0.316579 8.94531 0.633158 8.94531H41.1553C41.4719 8.94531 41.7884 8.69224 41.7884 8.31263V3.25118C41.7884 1.85928 40.6488 0.720459 39.2558 0.720459ZM0.633158 10.2107C0.443211 10.2107 0.189947 10.1474 0 10.0841V34.1893C0 35.5812 1.13968 36.72 2.53263 36.72H39.2558C40.6488 36.72 41.7884 35.5812 41.7884 34.1893V10.0841C41.5985 10.1474 41.3452 10.2107 41.1553 10.2107H0.633158ZM10.3205 34.0627H5.25521V29.0013H10.3205V34.0627ZM10.3205 25.9644H5.25521V20.903H10.3205V25.9644ZM10.3205 17.8028H5.25521V12.7414H10.3205V17.8028ZM19.0581 34.0627H13.9928V29.0013H19.0581V34.0627ZM19.0581 25.9644H13.9928V20.903H19.0581V25.9644ZM19.0581 17.8028H13.9928V12.7414H19.0581V17.8028ZM27.7956 34.0627H22.7304V29.0013H27.7956V34.0627ZM27.7956 25.9644H22.7304V20.903H27.7956V25.9644ZM27.7956 17.8028H22.7304V12.7414H27.7956V17.8028ZM36.5332 34.0627H31.468V29.0013H36.5332V34.0627ZM36.5332 25.9644H31.468V20.903H36.5332V25.9644ZM36.5332 17.8028H31.468V12.7414H36.5332V17.8028Z" fill="#0A66C2" />
                                </svg>
                                Saturday, March 25th

                            </p>
                        </div>
                    </section>

                </div>
            </section>

        </div>
    )
}

export default Home