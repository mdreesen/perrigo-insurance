import Image from "next/image"
const people = [
  {
    name: 'Immediate FICA Savings Opportunity',
    role: 'Senior Designer',
    imageUrl:
      '/assets/savings.webp',
    description: 'Discover immediate savings on employer payroll FICA taxes.  See savings of $321 annually for each employee.',
  },
  {
    name: 'Increase Employee Take-Home Pay',
    role: 'Senior Designer',
    imageUrl:
      '/assets/take-home-pay.webp',
    description: 'Find out how employees are receiving as much as $1,572.00 or more in their spendable,   take-home pay with no impact to the company bottom line!',
  },
  {
    name: 'Employee Proactive Health Maintenance',
    role: 'Senior Designer',
    imageUrl:
      '/assets/employee.webp',
    description: 'Help your employees.  The premier plan offered by a partner of Pierce, LLC. increases employee health, attendance & morale.',
  },
  // More people...
]

export default function WhatWeOffer() {
  return (
    <div className="bg-white py-24 sm:py-32" id='what-we-offer'>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">What We Offer</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            100 Employees = $32,100 in savings<br/>
            1000 Employees = $321,000 in savings<br/>
            10,000 Employees = $3.2m in savings
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-3 lg:max-w-4xl lg:gap-x-8 xl:max-w-none"
        >
          {people.map((person) => (
            <li key={person.name} className="flex flex-col gap-6 xl:flex-row">
              <Image alt="" src={person.imageUrl} width={500} height={500} className="aspect-[4/5] w-52 flex-none rounded-2xl object-cover" />
              <div className="flex-auto">
                <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">{person.name}</h3>
                <p className="mt-6 text-base leading-7 text-gray-600">{person.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
