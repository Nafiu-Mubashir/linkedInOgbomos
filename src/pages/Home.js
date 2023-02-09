import React from 'react'
import { Button } from '../components/Button';
import header from '../assets/header.png'
import group1 from '../assets/group1.png';
import { Header } from '../components/Header';
import { Timer } from '../components/Timer';
import { Link } from 'react-router-dom';

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
                <section className='timerSection'>
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

                <section>
                    <div className="lg:w-[95vw] w-[85vw] mx-auto gap-10 md:gap-0 mt-24">
                        <div className=''>
                            {/* <Header text={'About'} className='' /> */}
                            <p className='text-center'><span className='lg:text-[64px] text-[] text-[#0A66C2] font-[700]'>About Linked</span><span className='lg:text-[64px] text-[32p] bg-[#0A66C2] text-white lg:rounded-lg rounded-sm lg:p-3 p-1 font-bold'>in</span> <span className='lg:text-[64px] text-[32p] text-[#0A66C2]'> Local</span> <span className='lg:text-[64px] text-[32p] text-[#0A66C2] font-[700]'> Ogbomoso</span></p>
                        </div>
                        <div className='flex flex-col lg:flex-row justify-center items-center gap-4'>
                            <div className='w-full lg:w-[778px]'>
                                <div className='flex mb-3 gap-4'>
                                    <p className='flex justify-center items-center gap-2'>
                                        <svg width="42" height="37" viewBox="0 0 42 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M39.2558 0.720459H29.4419V2.4287H29.7584C30.075 2.04909 30.5815 1.79602 31.1514 1.79602C32.1644 1.79602 33.0509 2.68177 33.0509 3.69406C33.0509 5.08595 31.9112 6.22478 30.5182 6.22478H28.1122C26.7193 6.22478 25.5796 5.08595 25.5796 3.69406V0.720459H20.8942V2.4287H21.2108C21.5274 2.04909 22.0339 1.79602 22.6038 1.79602C23.6168 1.79602 24.5032 2.68177 24.5032 3.69406C24.5032 5.08595 23.3635 6.22478 21.9706 6.22478H19.5646C18.1716 6.22478 17.032 5.08595 17.032 3.69406V0.720459H12.3466V2.4287H12.6632C12.9797 2.04909 13.4863 1.79602 14.0561 1.79602C15.0692 1.79602 15.9556 2.68177 15.9556 3.69406C15.9556 5.08595 14.8159 6.22478 13.423 6.22478H11.017C9.62401 6.22478 8.48432 5.08595 8.48432 3.69406V0.720459H2.53263C1.13968 0.720459 0 1.85928 0 3.25118V8.31263C0 8.69224 0.316579 8.94531 0.633158 8.94531H41.1553C41.4719 8.94531 41.7884 8.69224 41.7884 8.31263V3.25118C41.7884 1.85928 40.6488 0.720459 39.2558 0.720459ZM0.633158 10.2107C0.443211 10.2107 0.189947 10.1474 0 10.0841V34.1893C0 35.5812 1.13968 36.72 2.53263 36.72H39.2558C40.6488 36.72 41.7884 35.5812 41.7884 34.1893V10.0841C41.5985 10.1474 41.3452 10.2107 41.1553 10.2107H0.633158ZM10.3205 34.0627H5.25521V29.0013H10.3205V34.0627ZM10.3205 25.9644H5.25521V20.903H10.3205V25.9644ZM10.3205 17.8028H5.25521V12.7414H10.3205V17.8028ZM19.0581 34.0627H13.9928V29.0013H19.0581V34.0627ZM19.0581 25.9644H13.9928V20.903H19.0581V25.9644ZM19.0581 17.8028H13.9928V12.7414H19.0581V17.8028ZM27.7956 34.0627H22.7304V29.0013H27.7956V34.0627ZM27.7956 25.9644H22.7304V20.903H27.7956V25.9644ZM27.7956 17.8028H22.7304V12.7414H27.7956V17.8028ZM36.5332 34.0627H31.468V29.0013H36.5332V34.0627ZM36.5332 25.9644H31.468V20.903H36.5332V25.9644ZM36.5332 17.8028H31.468V12.7414H36.5332V17.8028Z" fill="#0A66C2" />
                                        </svg>
                                        <span className='text-[14px] lg:text-[28px] text-[#0A66C2] leading-5 lg:leading'> Saturday, March 25th</span>

                                    </p>
                                    <p className='flex justify-center items-center gap-2'>
                                        <svg className='' width="40" height="39" viewBox="0 0 40 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19.7697 2.76571C9.80561 2.76571 1.77898 10.7863 1.77898 20.7429C1.77898 30.6994 9.80561 38.72 19.7697 38.72C29.7338 38.72 37.7604 30.6994 37.7604 20.7429C37.7604 10.7863 29.7338 2.76571 19.7697 2.76571ZM19.7697 36.0926C11.3279 36.0926 4.40839 29.1783 4.40839 20.7429C4.40839 12.3074 11.3279 5.39314 19.7697 5.39314C28.2115 5.39314 35.131 12.3074 35.131 20.7429C35.131 29.1783 28.2115 36.0926 19.7697 36.0926ZM2.74771 7.88229L8.28332 2.35086C8.83688 1.79771 8.83688 0.968 8.28332 0.414857C7.72976 -0.138286 6.89942 -0.138286 6.34586 0.414857L0.810251 5.94629C0.25669 6.49943 0.25669 7.32914 0.810251 7.88229C1.08703 8.15886 1.36381 8.29714 1.77898 8.29714C2.19415 8.29714 2.47093 8.15886 2.74771 7.88229ZM38.7291 5.94629L33.1935 0.414857C32.64 -0.138286 31.8096 -0.138286 31.2561 0.414857C30.7025 0.968 30.7025 1.79771 31.2561 2.35086L36.7917 7.88229C37.0685 8.15886 37.3452 8.29714 37.7604 8.29714C38.1756 8.29714 38.4524 8.15886 38.7291 7.88229C39.2827 7.32914 39.2827 6.49943 38.7291 5.94629Z" fill="#0A66C2" />
                                            <path d="M30.7025 22.1257H30.5641C29.8722 21.9874 29.3186 21.4343 29.3186 20.7428C29.3186 20.0514 29.8722 19.4983 30.5641 19.36H32.2248C31.5329 13.552 26.966 8.98855 21.1536 8.29712V9.95655C21.0152 10.648 20.4617 11.2011 19.7697 11.2011C19.0778 11.2011 18.5242 10.648 18.3858 9.95655V8.29712C12.5734 8.98855 8.00656 13.552 7.31461 19.36H8.97529C9.66724 19.4983 10.2208 20.0514 10.2208 20.7428C10.2208 21.4343 9.66724 21.9874 8.97529 22.1257H7.31461C8.00656 27.9337 12.5734 32.4971 18.3858 33.1886V31.5291C18.5242 30.8377 19.0778 30.2846 19.7697 30.2846C20.4617 30.2846 21.0152 30.8377 21.1536 31.5291V33.1886C26.966 32.4971 31.5329 27.9337 32.2248 22.1257H30.7025C30.8409 22.1257 30.8409 22.1257 30.7025 22.1257ZM25.3053 22.1257H19.7697C19.0778 22.1257 18.3858 21.4343 18.3858 20.7428V13.8285C18.3858 13.1371 19.0778 12.4457 19.7697 12.4457C20.4617 12.4457 21.1536 13.1371 21.1536 13.8285V19.36H25.3053C25.9973 19.36 26.6892 20.0514 26.6892 20.7428C26.6892 21.4343 25.9973 22.1257 25.3053 22.1257Z" fill="#0A66C2" />
                                        </svg>

                                        <span className='text-[14px] lg:text-[28px] text-[#0A66C2] leading-5 lg:leading'> 10:00am prompt</span>

                                    </p>
                                </div>
                                <p className='flex justify-cente items-center gap-2'>
                                    <svg width="34" height="43" viewBox="0 0 34 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.9092 0.719971C12.4261 0.725002 8.12815 2.50677 4.95815 5.67438C1.78815 8.84199 0.00503494 13.1367 0 17.6164C0 24.4911 4.99456 30.2 10.285 36.2426C11.959 38.1561 13.6922 40.1351 15.2352 42.1374C15.4326 42.3933 15.6862 42.6006 15.9765 42.7432C16.2667 42.8858 16.5858 42.96 16.9092 42.96C17.2326 42.96 17.5517 42.8858 17.8419 42.7432C18.1322 42.6006 18.3858 42.3933 18.5832 42.1374C20.1262 40.1351 21.8594 38.1561 23.5334 36.2426C28.8238 30.2 33.8184 24.4911 33.8184 17.6164C33.8134 13.1367 32.0302 8.84199 28.8602 5.67438C25.6902 2.50677 21.3923 0.725002 16.9092 0.719971ZM16.9092 23.9526C15.6551 23.9526 14.4291 23.581 13.3864 22.8847C12.3436 22.1885 11.5309 21.1989 11.0509 20.0412C10.571 18.8834 10.4454 17.6094 10.6901 16.3803C10.9348 15.1512 11.5387 14.0222 12.4255 13.1361C13.3123 12.2499 14.4421 11.6465 15.6721 11.402C16.9022 11.1575 18.1771 11.283 19.3358 11.7626C20.4944 12.2421 21.4848 13.0542 22.1815 14.0962C22.8783 15.1382 23.2502 16.3632 23.2502 17.6164C23.2502 19.2969 22.5821 20.9085 21.3929 22.0968C20.2038 23.285 18.5909 23.9526 16.9092 23.9526Z" fill="#0A66C2" />
                                    </svg>
                                    <span className='text-[14px] lg:text-[28px] text-[#0A66C2] font-[600] w-[587.43px] lg:leading-9'> Engineering Hall, Adjacent Block B, Lautech,
                                        Ogbomoso</span>
                                </p>
                                <Link to=''><span className='text-underline'>Get directions to the venue here</span></Link>
                                <p className='text-[14px] lg:text-[20px] font-[400]'>
                                    LinkedIn Local Ogbomosho is the largest networking event in Ogbomosho for LinkedIn users in Ogbomosho. The event promises to be a very helpful and useful event for all. LinkedIn Local Ogbomosho is the largest networking event in Ogbomosho for LinkedIn users in Ogbomosho. The event promises to be a very helpful and useful event for all. LinkedIn Local Ogbomosho is the largest networking event in Ogbomosho for LinkedIn users in Ogbomosho. The event promises to be a very helpful and useful event for all.LinkedIn Local. The event promises to be a very helpful and useful event for all. LinkedIn Local Ogbomosho is the largest so far.</p>
                            </div>
                            <div className=''>
                                <img src={group1} alt="" className='w-[345px]' />
                            </div>
                        </div>
                    </div>
                </section>

                <section className=''>
                    <div className="lg:w-[95vw] w-[85vw] mx-auto gap-10 md:gap-0 mt-24 mb-20">
                        <Header text={'Meet The Guest Speakers'} className={'text-[20px]'} />
                    </div>
                </section>

                {/* </div> */}
            </section>

        </div>
    )
}

export default Home