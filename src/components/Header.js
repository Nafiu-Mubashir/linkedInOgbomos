export const Header = ({ text, className }) => {

    return (

        <div>

            <header className='mb-10'>

                <h2 className={`${className} font-[700] lg:text-[64px] text-[32px] text-[#0A66C2] lg:mb-5`}>
                    {text}
                </h2>

            </header>

        </div>
    )
}