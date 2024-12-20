import Image from 'next/image';

export default function Hero() {

    return (
        <div className='h-full w-full'>
            <div className='h-full w-full px-8 flex justify-center' aria-hidden="true">
                <Image
                    className="w-auto"
                    src="/assets/fulllogo.webp"
                    width={400}
                    height={400}
                    alt="Linwood Business Solutions Logo"
                    priority
                />
            </div>

            <div className="relative isolate overflow-hidden">
                <Image
                    className="w-auto absolute inset-0 -z-10 h-full w-full object-cover brightness-50"
                    src="/assets/header.webp"
                    width={400}
                    height={400}
                    alt="Linwood Business Solutions Logo"
                    priority
                />
                <div
                    aria-hidden="true"
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                >
                    <div
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                    />
                </div>
                <div className="mx-auto max-w-2xl py-28 sm:py-28 lg:py-28">
                    <div className="text-center">
                        <h1 className="text-balance text-4xl font-bold tracking-tight text-white sm:text-6xl border-solid">
                            Increasing Your Bottom Line with Creative Employee Benefit Solutions
                        </h1>
                    </div>
                </div>
                <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                >
                    <div
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                        className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                    />
                </div>
            </div>
        </div>
    )
}

{/* <div>
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
        <div className="mx-auto max-w-2xl py-15 sm:py-15 lg:py-15">
            <div className="text-center">
                <h1 className="text-balance text-4xl font-bold tracking-tight text-black sm:text-4xl border-solid">
                    Increasing Your Bottom Line with Creative Employee Benefit Solutions
                </h1>
            </div>
        </div>
    </div>
</div> */}
