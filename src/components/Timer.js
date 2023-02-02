import { useEffect, useState } from "react";

export const Timer = () => {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
  
    const deadline = "March, 31, 2023";
  
    const getTime = () => {
      const time = Date.parse(deadline) - Date.now();
  
      setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
      setMinutes(Math.floor((time / 1000 / 60) % 60));
      setSeconds(Math.floor((time / 1000) % 60));
    };
  
    useEffect(() => {
      const interval = setInterval(() => getTime(deadline), 1000);
  
      return () => clearInterval(interval);
    }, []);
    return(
        <div className='flex lg:justify-evenly lg:gap-3 gap-2'>
        <div class="mb-4">
            <input class="lg:w-[87.86px] w-[50.46px] h-[52.44px] lg:h-[129.93px] text-center scale-7 translate-x-4 skew-x-6 shadow appearance-none border rounded-md py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline lg:text-[40px] text-[20px] font-bold" id="username" type="text" placeholder="Days" value={days < 10 ? days : days} />
            <label class="block text-gray-700 text-[13px] font-bold mb-2 text-center scale-7 translate-x-4 skew-x-3" for="Days">
                Days
            </label>
        </div>
        <div class="mb-4">
            <input class="lg:w-[87.86px] w-[50.46px] h-[52.44px] lg:h-[129.93px] text-center scale-7 translate-x-4 skew-x-6 shadow appearance-none border rounded-md py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline lg:text-[40px] text-[20px] font-bold" id="username" type="text" placeholder="Hours" value={hours < 10 ? hours : hours} />
            <label class="block text-gray-700 text-[13px] font-bold mb-2 text-center scale-7 translate-x-4 skew-x-3" for="Hours">
                Hours
            </label>
        </div>
        <div class="mb-4">
            <input class="lg:w-[87.86px] w-[50.46px] h-[52.44px] lg:h-[129.93px] text-center scale-7 translate-x-4 skew-x-6 shadow appearance-none border rounded-md py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline lg:text-[40px] text-[20px] font-bold" id="username" type="text" placeholder="Minutes" value={minutes < 10 ? minutes : minutes} />
            <label class="block text-gray-700 text-[13px] font-bold mb-2 text-center scale-7 translate-x-4 skew-x-3" for="Minutes">
                Mins
            </label>
        </div>
        <div class="mb-4">
            <input class="lg:w-[87.86px] w-[50.46px] h-[52.44px] lg:h-[129.93px] text-center scale-7 translate-x-4 skew-x-6 shadow appearance-none border rounded-md py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline lg:text-[40px] text-[20px] font-bold" id="username" type="text" placeholder="Seconds" value={seconds < 10 ? seconds : seconds} />
            <label class="block text-gray-700 text-[13px] font-bold mb-2 text-center scale-7 translate-x-4 skew-x-3" for="Seconds">
                Secs
            </label>
        </div>
    </div>

    )
}