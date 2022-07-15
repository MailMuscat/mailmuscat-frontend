import React from 'react'

const EmailTable = () => {
    return (
        <>
          <div class="w-full max-w-screen-md mx-auto bg-darkBlue my-auto">
  <table class="w-full table-auto rounded-sm">
    <thead>
      <tr>
        <th
          class="px-4 py-4 text-left bg-blue-900 text-white text-sm font-medium"
        >
          S.N.
        </th>
        <th
          class="px-4 py-4 text-left bg-blue-900 text-white text-sm font-medium"
        >
          NAME
        </th>
        <th
          class="px-4 py-4 text-left bg-blue-900 text-white text-sm font-medium"
        >
          CREATED AT
        </th>
        <th
          class="px-4 py-4 text-left bg-blue-900 text-white text-sm font-medium"></th>
        <th
          class="px-4 py-4 text-left bg-blue-900 text-white text-sm font-medium"> </th>
      </tr>
    </thead>
    <tbody>
      <tr class="border-gray-300">
        <td class="px-4 py-8 border-t border-b border-gray-300 text-sm">1
        </td>

        <td class="px-4 py-8 border-t border-b border-gray-300 text-sm">
          FORM 1
        </td>
        <td class="px-4 py-8 border-t border-b border-gray-300 text-sm">
          March 1st
        </td>
        <td class="px-4 py-8 border-t border-b border-gray-300 text-sm"><button className='bg-lightGreen px-4 py-1'>EDIT</button></td>
        <td class="px-4 py-8 border-t border-b border-gray-300 text-sm"><button className='bg-lightGreen px-4 py-1'>DOWNLOAD</button></td>
      </tr>

      <tr class="border-gray-300">
        <td class="px-4 py-8 border-t border-b border-gray-300 text-sm">2
        </td>

        <td class="px-4 py-8 border-t border-b border-gray-300 text-sm">
          FORM 2
        </td>
        <td class="px-4 py-8 border-t border-b border-gray-300 text-sm">
          March 1st
        </td>
        <td class="px-4 py-8 border-t border-b border-gray-300 text-sm"><button className='bg-lightGreen px-4 py-1'>EDIT</button></td>
        <td class="px-4 py-8 border-t border-b border-gray-300 text-sm"><button className='bg-lightGreen px-4 py-1'>DOWNLOAD</button></td>
      </tr>
    
     
    </tbody>
  </table>
</div>


        </>
    )
}

export default EmailTable