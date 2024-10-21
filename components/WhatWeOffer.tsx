import Image from "next/image";

const note = '100 Employees = $32,100 in savings<br/>1000 Employees = $321,000 in savings<br/>10,000 Employees = $3.2m in savings'
const people = [
  {
    name: 'Immediate FICA Savings Opportunity',
    imageUrl:
      '/assets/savings.webp',
    description: 'Discover immediate savings on employer payroll FICA taxes. See savings of $321 annually for each employee.',
    note: note
  },
  {
    name: 'Increase Employee Take-Home Pay',
    imageUrl:
      '/assets/take-home-pay.webp',
    description: "No employee benefit is more well received than one that puts more money in their pockets. Find out how employees are receiving as much as $1,572.00 or more in their real spendable, take-home pay with no impact to the company bottom line.",
  },
  {
    name: 'Employee Proactive Health Management',
    imageUrl:
      '/assets/employee.webp',
    description: 'Empower your team members to live as vibrantly as possible. The Premier Plan offered by a partner of Linwood Business Solutions provides the insurance benefit infrastructure to increase employee health, attendance and morale, fortifying your enterprises’ bottom line.',
  },
]

export default function WhatWeOffer() {
  return (
    <div className="bg-white py-24 sm:py-32" id='what-we-offer'>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900">What We Offer</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600"><span className="font-bold italic">Linwood Business Solutions</span> specializes in providing relationally-driven, insurance-based offerings to our enterprise partners. We seek to boost employer-employee relationships by maximizing “bottom line” insurance strategies.</p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-3 lg:max-w-4xl lg:gap-x-8 xl:max-w-none"
        >
          {people.map((person) => (
            <li key={person.name} className="flex flex-col gap-6 xl:flex-row">
              <Image alt="" src={person.imageUrl} width={500} height={500} className="aspect-[4/5] w-52 flex-none rounded-2xl object-cover" />
              <div className="flex-auto">
                <h3 className="text-xl font-semibold leading-8 tracking-tight text-gray-900">{person.name}</h3>
                <p className="mt-6 mb-4 text-base leading-7 text-gray-600" dangerouslySetInnerHTML={{ __html: person?.description}} />
                {person.note && <span className="italic text-base leading-7 text-gray-600" dangerouslySetInnerHTML={{ __html: person?.note}} />}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
