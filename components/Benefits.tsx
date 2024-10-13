import { CheckIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Engage Towards Better Health',
    description: 'Early intervention and ongoing engagement.',
  },
  {
    name: 'Strong Financial Incentives',
    description: 'For both employer and employee.',
  },
  {
    name: 'No Net Cost to Employer',
    description: 'FICA tax savings direct to the bottom line.',
  },
  {
    name: 'Reduce Healthcare Costs',
    description: 'For both employer and employee.'
  },
]

export default function Benefits() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32 text-white" id='benefits'>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Benefits</h2>
            <p className="font-semibold leading-7 text-indigo-600 text-3xl sm:text-4xl">Good health is good business</p>
            <p className='text-lg leading-8 text-white mt-6'>Any enterprise is only as good as its stable, healthy workforce. By using advanced tools and key insurance provider relationships, we capitalize on a 4-part strategy to bridge and capture health and financial gains for both  employer and team member beneficiaries.</p>
          </div>
          <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-white sm:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-9">
                <dt className="font-semibold">
                  <CheckIcon aria-hidden="true" className="absolute left-0 top-1 h-5 w-5 text-indigo-500" />
                  {feature.name}
                </dt>
                <dd className="mt-2">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <section className="bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="flex flex-col pb-10 sm:pb-16 lg:pb-0 lg:pr-8 xl:pr-20">
              <p className="mt-2 text-2xl font-bold tracking-tight sm:text-4xl">Key <span className='text-amber-500'>Employee</span>  Benefits</p>
              <figure className="mt-10 flex flex-auto flex-col justify-between">
                <blockquote className="text-lg leading-8 text-white">
                  <ul className="list-disc px-6 lg:px-8">
                    <li>24/7 telemedicine & tele-behavior health for entire household or $0 copay.</li>
                    <li>Personalized health coaching & nutritional counseling.</li>
                    <li>DNA & Biometric Screenings.</li>
                    <li>Potenial 2-5% increase in spendable income.</li>
                  </ul>
                </blockquote>
              </figure>
            </div>
            <div className="flex flex-col border-t border-white/10 pt-10 sm:pt-16 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 xl:pl-20">
              <p className="mt-2 text-2xl font-bold tracking-tight sm:text-4xl">Key <span className='text-amber-500'>Employer</span> Benefits</p>
              <figure className="mt-10 flex flex-auto flex-col justify-between">
                <blockquote className="text-lg leading-8 text-white">
                <ul className="list-disc px-6 lg:px-8">
                    <li>Immediate employer FICA savings: annual net savings of $321 per employee.</li>
                    <li>Provide additional, meaningful benefits to staff at no net cost.</li>
                    <li>Reduce medical and Rx spending by 11-17% on average.</li>
                  </ul>
                </blockquote>
              </figure>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
