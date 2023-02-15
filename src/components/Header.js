export const Header = ({ text, className, content }) => {

    return (

        <div>

            <header className='mb-5'>

                <h2 className={`${className} font-[700] lg:text-[64px] text-[32px] text-[#0A66C2] lg:mb-3`}>
                    {text}
                </h2>

                <p className={"text-[12px] lg:text-[20px] "}>{content}</p>

            </header>

        </div>
    )
}