import Image from 'next/image'
import React from 'react'
export default function Article({data,articles}) {
  return (
    <div>
        <div className='bg-gradient-to-bl from-gray-900 to-gray-600  w-full'>
      <h1 className='text-3xl font-bold text-center mr-2 text-stone-100'>
    {data.title}
      </h1>

      {articles.map((remedy, index) => (
        <div
          key={index}
          className='flex flex-col border-b-2 border-blue-900 hover:border-blue-300 md:flex-row '
        >
          <div className='flex-none gap-4 ml-0 mt-10 p-4 rounded-3xl md:ml-10 md:mt-28 md:mb-24'>
            <Image src={remedy.image} alt={remedy.title} width={500} height={400} className='rounded-3xl shadow-md shadow-orange-100' />
          </div>
          {/* <div className='flex-grow gap-4 p-12 text-white'>
            <h1 className='text-2xl font-bold p-4 text-stone-100'>{remedy.title}</h1>
            <p className='font-mono '>{remedy.content}</p>
          </div> */}
                   <div className='fit-to-screen flex-grow gap-4 p-4 text-white'>
  <h1 className='text-2xl font-bold p-4 text-stone-100'>{remedy.title}</h1>
  <p className='font-mono overflow-auto max-w-4xl mx-auto'>{remedy.content}</p>
</div>
        </div>
      ))}
    </div>
    </div>
  )
}


// import Image from 'next/image'
// import React from 'react'

// export default function Article({ data, articles }) {
//   function insertLineBreaks(content) {
//     return content.split('\n').map((line, index) => (
//       <React.Fragment key={index}>
//         {line}
//         <br />
//       </React.Fragment>
//     ));
//   }

//   return (
//     <div>
//       <div className='bg-gradient-to-bl from-gray-900 to-gray-600  w-full'>
//         <h1 className='text-3xl font-bold text-center mr-2 text-stone-100'>
//           {data.title}
//         </h1>

//         {articles.map((remedy, index) => (
//           <div
//             key={index}
//             className='flex flex-col border-b-2 border-blue-900 hover:border-blue-300 md:flex-row '
//           >
//             <div className='flex-none gap-4 ml-0 mt-10  md:ml-10 md:mt-28 md:mb-24'>
//               <Image
//                 src={remedy.image}
//                 alt={remedy.title}
//                 width={500}
//                 height={400}
//                 className='rounded-3xl shadow-md shadow-orange-100'
//               />
//             </div>
//             <div className='flex-grow gap-4 p-12 text-white'>
//               <h1 className='text-2xl font-bold p-4 text-stone-100'>
//                 {remedy.title}
//               </h1>
//               <p className='font-mono'>{insertLineBreaks(remedy.content)}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

