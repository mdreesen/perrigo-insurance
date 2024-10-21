import Image from 'next/image';

export default function Hero() {

    return (
        <div>
            <div className="relative isolate overflow-hidden pt-14">
                <div className='h-full w-full flex justify-center' aria-hidden="true">
                    <Image
                        className="w-auto"
                        src="/assets/fulllogo.webp"
                        width={400}
                        height={400}
                        alt="Linwood Business Solutions Logo"
                    />
                </div>
                <div className="mx-auto max-w-2xl py-15 sm:py-15 lg:py-56">
                    <div className="text-center">
                        <h1 className="text-balance text-4xl font-bold tracking-tight text-black sm:text-4xl border-solid">
                            Increasing Your Bottom Line with Creative Employee Benefit Solutions
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
