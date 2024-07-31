// import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
// import { ChevronDownIcon } from '@heroicons/react/20/solid'
// import { useState } from 'react';

// const banks = [
//   { key: 'vcb', href: '/vcb', label: 'Vietcombank - XXXX-XXXXXX-VCB' },
//   { key: 'agr', href: '/agr', label: 'Agribank - XXXX-XXXX-XXXX-XXXX' },
//   { key: 'abc', href: '/acb', label: 'ACB - XXXX-XXXX-XXXX-XXXX' },
//   { key: 'momo', href: '/momo', label: 'Momo - XXXX-XXXX-XXXX-XXXX' },
// ]

// export default function PaymentChoices() {
//   const [selectedBank, setSelectedBank] = useState<string>('Chọn tài khoản');
//   const handleSelect = (bank: string) => {
//     setSelectedBank(bank);
//   };

//   return (
//     <Menu as="div" className="relative inline-block text-left w-full">
//       <div>
//         <MenuButton className="inline-flex w-full justify-between gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
//           {selectedBank}
//           <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400" />
//         </MenuButton>
//       </div>

//       <MenuItems
//         className="absolute left-0 z-10 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none "
//       >
//         <div className="py-1">
//           {banks.map((bank) => (
//             <MenuItem key={bank.key}>
//               <button onClick={() => handleSelect(bank.label)} className='block w-full px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-200'>
//                 {bank.label}
//               </button>
//             </MenuItem>
//           ))}
//         </div>
//       </MenuItems>
//     </Menu>
//   )
// }

import { Radio, RadioGroup } from '@headlessui/react'
import { CheckCircleIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'

const plans = [
  { key: 'vcb', href: '/vcb', label: 'Vietcombank - XXXX-XXXXXX-VCB' },
  { key: 'agr', href: '/agr', label: 'Agribank - XXXX-XXXX-XXXX-XXXX' },
  { key: 'abc', href: '/acb', label: 'ACB - XXXX-XXXX-XXXX-XXXX' },
  { key: 'momo', href: '/momo', label: 'Momo - XXXX-XXXX-XXXX-XXXX' },
]

export default function Example() {
  const [selected, setSelected] = useState(plans[0])

  return (
    <div className="w-full px-4">
      <div className="mx-auto w-full max-w-md">
        <RadioGroup value={selected} onChange={setSelected} aria-label="Server size" className="space-y-2">
          {plans.map((plan) => (
            <Radio
              key={plan.key}
              value={plan}
              className="group relative flex cursor-pointer rounded-lg bg-white/5 py-4 px-5 text-white shadow-md transition focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[checked]:bg-white/10"
            >
              <div className="flex w-full items-center justify-between">
                <div className="text-sm/6">
                  <p className="font-semibold text-white">{plan.label}</p>
                  <div className="flex gap-2 text-white/50">
                    <div aria-hidden="true">Thêm thẻ</div>
                  </div>
                </div>
                <CheckCircleIcon className="size-6 fill-white opacity-0 transition group-data-[checked]:opacity-100" />
              </div>
            </Radio>
          ))}
        </RadioGroup>
      </div>
    </div>
  )
}