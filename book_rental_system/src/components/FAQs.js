// // src/components/FAQs.js

// import React, { useState } from 'react';
// import AOS from 'aos';

// const FAQs = () => {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const toggleAccordion = (index) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   const faqData = [
//     {
//       question: 'What is a book rental system?',
//       answer: 'A book rental system allows users to borrow books for a specified period of time. Users can browse available books, rent them, and return them after use.'
//     },
//     {
//       question: 'How do I rent a book?',
//       answer: 'To rent a book, simply browse our catalog, select the book you want to rent, and click the "Rent" button. Follow the on-screen instructions to complete your rental.'
//     },
//     {
//       question: 'How long can I keep a rented book?',
//       answer: 'The rental period for each book is specified on its detail page. Typically, rental periods range from 7 to 30 days.'
//     },
//     {
//       question: 'What happens if I return a book late?',
//       answer: 'Late returns may incur a late fee. The details of the late fee policy are available on our website. We encourage you to return books on time to avoid any additional charges.'
//     },
//     {
//       question: 'Can I renew a rented book?',
//       answer: 'Yes, you can renew a rented book if it is not reserved by another user. To renew, go to your account, find the book you wish to renew, and click the "Renew" button.'
//     },
//     {
//       question: 'How do I return a rented book?',
//       answer: 'To return a rented book, visit our return section on the website, follow the instructions, and drop the book off at the specified location. You can also mail it back to us if applicable.'
//     }
//   ];

//   return (
//     <section
//       className="bg-primary shadow-lg py-10 md:py-12 lg:py-16 xl:py-20 rounded-md"
//       id="faqs"
//     >
//       <div className="container mx-auto p-4 md:p-6 lg:p-8 xl:p-12">
//         <h2 className="text-3xl font-bold mb-4 text-white">Frequently Asked Questions</h2>
//         <div className="space-y-4">
//           {faqData.map((faq, index) => (
//             <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
//               <div className="border border-gray-300 rounded-md">
//                 <button
//                   onClick={() => toggleAccordion(index)}
//                   className="w-full text-left p-4 focus:outline-none focus:ring-2 focus:ring-primary text-sm"
//                 >
//                   <span className="text-lg font-semibold">{faq.question}</span>
//                 </button>
//                 {activeIndex === index && (
//                   <div className="p-4 border-t border-gray-300 bg-gray-50 text-sm">
//                     <p>{faq.answer}</p>
//                   </div>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FAQs;



import React, { useState } from 'react';

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: 'What is a book rental system?',
      answer: 'A book rental system allows users to borrow books for a specified period of time. Users can browse available books, rent them, and return them after use.',
    },
    {
      question: 'How do I rent a book?',
      answer: 'To rent a book, simply browse our catalog, select the book you want to rent, and click the "Rent" button. Follow the on-screen instructions to complete your rental.',
    },
    {
      question: 'How long can I keep a rented book?',
      answer: 'The rental period for each book is specified on its detail page. Typically, rental periods range from 7 to 30 days.',
    },
    {
      question: 'What happens if I return a book late?',
      answer: 'Late returns may incur a late fee. The details of the late fee policy are available on our website. We encourage you to return books on time to avoid any additional charges.',
    },
    {
      question: 'Can I renew a rented book?',
      answer: 'Yes, you can renew a rented book if it is not reserved by another user. To renew, go to your account, find the book you wish to renew, and click the "Renew" button.',
    },
    {
      question: 'How do I return a rented book?',
      answer: 'To return a rented book, visit our return section on the website, follow the instructions, and drop the book off at the specified location. You can also mail it back to us if applicable.',
    },
  ];

  return (
    <div className="flex flex-col items-center py-10 shadow-lg bg-gradient-to-b from-gray-200 via-white to-gray-100 dark:bg-gradient-to-b dark:from-gray-700 dark:via-gray-800 dark:to-gray-900 dark:text-white">
      <h2 className="text-4xl mb-8 text-center px-4">Frequently Asked Questions</h2>
      <div className="space-y-4 w-full max-w-3xl px-4">
        {faqData.map((faq, index) => (
          <div key={index} data-aos-delay={index * 100}>
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-md shadow-md">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full text-left p-4 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-500 text-sm"
              >
                <span className="text-lg font-bold text-gray-800 dark:text-gray-100">{faq.question}</span>
              </button>
              {activeIndex === index && (
                <div className="p-4 border-t border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-sm">
                  <p className="text-gray-700 dark:text-gray-300">{faq.answer}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
