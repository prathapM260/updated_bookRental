




// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function CardSection() {
//   const [selectedCard, setSelectedCard] = useState(null);
//   const [userData, setUserData] = useState([]);
//   const [designationCounts, setDesignationCounts] = useState({});

//   useEffect(() => {
//     // Fetch user data from the backend API
//     axios.get('http://localhost:5000/api/user/users')
//       .then((response) => {
//         setUserData(response.data);
//         calculateDesignationCounts(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching user data:', error);
//       });
//   }, []);

//   // Function to calculate designation counts
//   const calculateDesignationCounts = (users) => {
//     const counts = {};
//     users.forEach(user => {
//       user.designations.forEach(designation => {
//         if (counts[designation]) {
//           counts[designation].push(user.name);
//         } else {
//           counts[designation] = [user.name];
//         }
//       });
//     });
//     setDesignationCounts(counts);
//   };

//   // Sample data for cards
//   const cards = [
//     { id: 1, designation: 'Authors', image: 'https://letterreview.com/wp-content/uploads/2022/09/best-pens-for-author-book-signings.jpg' },
//     { id: 2, designation: 'Writers', image: 'https://th.bing.com/th/id/OIP.4JQRLB3X9FTZwb6-iGDThAAAAA?rs=1&pid=ImgDetMain' },
//     { id: 3, designation: 'Designers', image: 'https://th.bing.com/th/id/OIP.8wI8D0q8vfcUE8UKyBnx2AHaE8?rs=1&pid=ImgDetMain' },
//     { id: 4, designation: 'Producers', image: 'https://blog.papertrue.com/wp-content/uploads/2023/03/TOP-10-book-publish.png' },
//     { id: 5, designation: 'Publishers', image: 'https://th.bing.com/th/id/OIP.NjjAHfzKfnHCTq827QOmWgAAAA?rs=1&pid=ImgDetMain' },
//     { id: 6, designation: 'Readers', image: 'https://goingivy.com/wp-content/uploads/2017/06/European-History-Tutor-1.jpg' },
//     { id: 7, designation: 'Customers', image: 'https://th.bing.com/th/id/R.2a629ab7e2d490a0fce68c4c160cb98c?rik=qpK4klq9%2bneWiQ&riu=http%3a%2f%2fwww.thebluediamondgallery.com%2fwooden-tile%2fimages%2fdonation.jpg&ehk=FK%2fKRZEZclZ91wzIEmdK8S5O2IrdjOAY36YJ0f49tVQ%3d&risl=&pid=ImgRaw&r=0' },
//   ];

//   // Function to handle card click
//   const handleCardClick = (card) => {
//     setSelectedCard(card);
//   };

//   return (
//     <div className="bg-gradient-to-b from-primary via-[#ffffff] to-white dark:from-gray-700 dark:via-gray-800 dark:to-gray-900 py-8 mt-0 shadow-md dark:text-white">
//       <div className="container mx-auto text-center">
//         <h1 className="text-center text-xl font-bold">Assemble your team of professionals</h1>
//         <h2 className="font-normal mt-2">
//           Our community is home to the best publishing talent on the planet.
//         </h2>
//       </div>
//       <div className="container mx-auto overflow-x-auto">
//         <div className="flex space-x-4 p-4">
//           {cards.map((card) => (
//             <div
//               key={card.id}
//               className={`flex-shrink-0 bg-white dark:bg-gray-800 dark:text-white rounded-lg overflow-hidden shadow-md cursor-pointer ${selectedCard && selectedCard.id === card.id ? 'border-2 border-blue-500' : 'border'}`}
//               onClick={() => handleCardClick(card)}
//               style={{ minWidth: '160px', maxWidth: '160px', minHeight: '240px', maxHeight: '240px' }}
//             >
//               <div className="p-4">
//                 <img src={card.image} alt={card.designation} className="w-full h-32 object-cover mb-4" />
//                 <div className="text-center text-xl font-bold text-black dark:text-white">
//                   {designationCounts[card.designation]?.length || 0}
//                 </div>
//                 <div className="text-center text-xl font-bold text-black dark:text-white">
//                   {card.designation}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Display detailed information based on selected card */}
//       {selectedCard && (
//         <div className="container mx-auto mt-8 p-4 bg-white dark:bg-gray-800 dark:text-white shadow-md">
//           <div className="flex">
//             <div className="w-3/5 pr-4">
//               <h3 className="text-xl font-bold mb-2">{selectedCard.designation}</h3>
//               <p className="text-gray-600 dark:text-gray-300 mb-4">
//                 {`Details about ${selectedCard.designation}.`}
//               </p>
//             </div>
//             <div className="w-2/5 max-h-64 overflow-y-auto">
//               <h4 className="text-lg font-bold mb-2">
//                 Related Persons ({designationCounts[selectedCard.designation]?.length || 0})
//               </h4>
//               <div>
//                 {designationCounts[selectedCard.designation]?.map((name, index) => (
//                   <div key={index} className="bg-white dark:bg-gray-700 dark:text-white rounded-lg overflow-hidden shadow-md border-t-4 border-blue-500 mb-4 p-2">
//                     <div className="text-gray-600 dark:text-gray-300">{name}</div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default CardSection;









import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CardSection() {
  const [users, setUsers] = useState([]);
  const [designationCounts, setDesignationCounts] = useState({});
  const [selectedCard, setSelectedCard] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);

  // Define your cards array here
  const cards = [
    { id: 1, designation: 'Authors', image: 'https://letterreview.com/wp-content/uploads/2022/09/best-pens-for-author-book-signings.jpg' },
    { id: 2, designation: 'Writers', image: 'https://th.bing.com/th/id/OIP.4JQRLB3X9FTZwb6-iGDThAAAAA?rs=1&pid=ImgDetMain' },
    { id: 3, designation: 'Designers', image: 'https://th.bing.com/th/id/OIP.8wI8D0q8vfcUE8UKyBnx2AHaE8?rs=1&pid=ImgDetMain' },
    { id: 4, designation: 'Producers', image: 'https://blog.papertrue.com/wp-content/uploads/2023/03/TOP-10-book-publish.png' },
    { id: 5, designation: 'Publishers', image: 'https://th.bing.com/th/id/OIP.NjjAHfzKfnHCTq827QOmWgAAAA?rs=1&pid=ImgDetMain' },
    { id: 6, designation: 'Readers', image: 'https://goingivy.com/wp-content/uploads/2017/06/European-History-Tutor-1.jpg' },
    { id: 7, designation: 'Customers', image: 'https://th.bing.com/th/id/R.2a629ab7e2d490a0fce68c4c160cb98c?rik=qpK4klq9%2bneWiQ&riu=http%3a%2f%2fwww.thebluediamondgallery.com%2fwooden-tile%2fimages%2fdonation.jpg&ehk=FK%2fKRZEZclZ91wzIEmdK8S5O2IrdjOAY36YJ0f49tVQ%3d&risl=&pid=ImgRaw&r=0' },
  ];

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/user/users');
        const fetchedUsers = response.data;

        // Organize users by their designations
        const counts = fetchedUsers.reduce((acc, user) => {
          user.designations.forEach((designation) => {
            if (!acc[designation]) {
              acc[designation] = [];
            }
            acc[designation].push(user.name);
          });
          return acc;
        }, {});

        setUsers(fetchedUsers);
        setDesignationCounts(counts);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const handleCardClick = (designation) => {
    setSelectedCard(designation);
    setSelectedUser(null); // Reset selected user when a card is clicked
  };

  const handleUserClick = (userName) => {
    // Find the user by name
    const user = users.find((user) => user.name === userName);
    setSelectedUser(user);
  };

  return (
    <div className="bg-gradient-to-b from-primary via-[#eff6fb] to-white dark:from-gray-700 dark:via-gray-800 dark:to-gray-900 py-8 mt-0 shadow-md dark:text-white">
      <div className="container mx-auto text-center items">
        <h1 className="text-center text-xl font-bold">Assemble your team of professionals</h1>
        <h2 className="font-normal mt-2">
          Our community is home to the best publishing talent on the planet.
        </h2>
      </div>
      <div className="container mx-auto overflow-x-auto">
        <div className="flex space-x-4 p-4">
          {cards.map((card) => (
            <div
              key={card.id}
              className={`flex-shrink-0 bg-white dark:bg-gray-800 dark:text-white rounded-lg overflow-hidden shadow-md cursor-pointer ${selectedCard === card.designation ? 'border-2 border-blue-500' : 'border'}`}
              onClick={() => handleCardClick(card.designation)}
              style={{ minWidth: '160px', maxWidth: '160px', minHeight: '240px', maxHeight: '240px' }}
            >
              <div className="p-4">
                <img src={card.image} alt={card.designation} className="w-full h-32 object-cover mb-4" />
                <div className="text-center text-xl font-bold text-black dark:text-white">{designationCounts[card.designation]?.length || 0}</div>
                <div className="text-center text-xl font-bold text-black dark:text-white">{card.designation}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Display detailed information based on selected card */}
      {selectedCard && (
        <div className="container mx-auto mt-8 p-4 rounded-lg bg-transparent dark:bg-gray-800 items-center dark:text-white border shadow-md">
          <div className="flex ">
            {/* Left side with selected user details */}
            <div className="w-3/5 pr-2 h-64 overflow-y-auto scrollbar-hidden "> {/* Fixed height and hide scrollbar */}
              {selectedUser ? (
                <div>
                  <h3 className="text-xl font-bold mb-2">{selectedUser.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Email: {selectedUser.email}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Role: {selectedUser.role}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Designations: {selectedUser.designations.join(', ')}
                  </p>
                </div>
              ) : (
                <div>
                  <h3 className="text-xl font-bold mb-2">{selectedCard}</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {`Details about ${selectedCard}.`}
                  </p>
                </div>
              )}
            </div>
            {/* Right side with members list */}
            <div className="w-2/5 max-h-64 overflow-y-auto scrollbar-hidden">
              <h4 className="text-lg font-bold mb-2">
                Related Persons ({designationCounts[selectedCard]?.length || 0})
              </h4>
              <div>
                {designationCounts[selectedCard]?.map((name, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-700 dark:text-white rounded-lg overflow-hidden shadow-md border-t-4 border-blue-500 mb-4 p-2 cursor-pointer"
                    onClick={() => handleUserClick(name)}
                  >
                    <div className="text-gray-600 dark:text-gray-300">{name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .scrollbar-hidden::-webkit-scrollbar {
          display: none; /* For Chrome, Safari, and Opera */
        }

        .scrollbar-hidden {
          -ms-overflow-style: none; /* For Internet Explorer and Edge */
          scrollbar-width: none; /* For Firefox */
        }
      `}</style>
    </div>
  );
}

export default CardSection;
