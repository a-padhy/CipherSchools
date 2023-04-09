import React from "react";

const ProfileCardContainer = ({ children }) => (
  <div className="flex flex-wrap justify-center items-center">{children}</div>
);

const ProfileCard = ({ name, imageUrl, location, bio }) => (
  <div className="w-full md:w-1/2 lg:w-1/4 p-4">
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="h-48">
        <div className="h-full w-full flex justify-center items-center">
          <img
            className="h-32 w-32 object-cover rounded-full"
            src={imageUrl}
            alt={`${name} profile`}
          />
        </div>
      </div>
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-2">{name}</h2>
        <p className="text-gray-700 text-base mb-2">College Student</p>
        <p className="text-gray-700 text-base mb-2">12 Followers</p>
        <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded w-full">
          Follow
        </button>
      </div>
    </div>
  </div>
);

const profileCardsData = [
  {
    id: 1,
    name: "John Doe",
    imageUrl: "https://source.unsplash.com/random/800x600",
    location: "New York, NY",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet ex nec felis interdum pretium vel sed urna. Donec auctor magna quam, vel rhoncus nisi semper ac. Praesent vitae urna non orci elementum posuere at at augue.",
  },
  {
    id: 2,
    name: "Jane Smith",
    imageUrl: "https://source.unsplash.com/random/800x601",
    location: "Los Angeles, CA",
    bio: "Praesent rhoncus, sapien vitae sodales tristique, velit libero aliquet nibh, sed gravida quam purus id ipsum. Sed sit amet facilisis enim. Proin sit amet tristique arcu. Curabitur varius auctor metus a porttitor. Sed euismod fringilla odio non rhoncus.",
  },
  {
    id: 3,
    name: "Jane Smith",
    imageUrl: "https://source.unsplash.com/random/800x601",
    location: "Los Angeles, CA",
    bio: "Praesent rhoncus, sapien vitae sodales tristique, velit libero aliquet nibh, sed gravida quam purus id ipsum. Sed sit amet facilisis enim. Proin sit amet tristique arcu. Curabitur varius auctor metus a porttitor. Sed euismod fringilla odio non rhoncus.",
  },
  {
    id: 4,
    name: "Jane Smith",
    imageUrl: "https://source.unsplash.com/random/800x601",
    location: "Los Angeles, CA",
    bio: "Praesent rhoncus, sapien vitae sodales tristique, velit libero aliquet nibh, sed gravida quam purus id ipsum. Sed sit amet facilisis enim. Proin sit amet tristique arcu. Curabitur varius auctor metus a porttitor. Sed euismod fringilla odio non rhoncus.",
  },
  {
    id: 5,
    name: "Jane Smith",
    imageUrl: "https://source.unsplash.com/random/800x601",
    location: "Los Angeles, CA",
    bio: "Praesent rhoncus, sapien vitae sodales tristique, velit libero aliquet nibh, sed gravida quam purus id ipsum. Sed sit amet facilisis enim. Proin sit amet tristique arcu. Curabitur varius auctor metus a porttitor. Sed euismod fringilla odio non rhoncus.",
  },
  {
    id: 6,
    name: "Jane Smith",
    imageUrl: "https://source.unsplash.com/random/800x601",
    location: "Los Angeles, CA",
    bio: "Praesent rhoncus, sapien vitae sodales tristique, velit libero aliquet nibh, sed gravida quam purus id ipsum. Sed sit amet facilisis enim. Proin sit amet tristique arcu. Curabitur varius auctor metus a porttitor. Sed euismod fringilla odio non rhoncus.",
  },
  {
    id: 7,
    name: "Jane Smith",
    imageUrl: "https://source.unsplash.com/random/800x601",
    location: "Los Angeles, CA",
    bio: "Praesent rhoncus, sapien vitae sodales tristique, velit libero aliquet nibh, sed gravida quam purus id ipsum. Sed sit amet facilisis enim. Proin sit amet tristique arcu. Curabitur varius auctor metus a porttitor. Sed euismod fringilla odio non rhoncus.",
  },
];

const Followers = () => {
  return (
    <ProfileCardContainer>
      {profileCardsData.map((profile) => (
        <ProfileCard key={profile.id} {...profile} />
      ))}
    </ProfileCardContainer>
  );
};
export default Followers;
