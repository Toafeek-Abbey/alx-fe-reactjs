function UserProfile() {
    return (
      <div className="hover:shadow-xl bg-gray-100 p-8 md:p-8 sm:p-4 md:max-w-sm max-w-xs mx-auto my-20 rounded-lg shadow-lg">
        <img src="https://via.placeholder.com/150" alt="User" className="rounded-full md:w-36 md:h-36 sm:w-24 sm:h-24 mx-auto hover:scale-110 transition-transform duration-300 ease-in-out"/>
        <h1 className="md:text-xl sm:text-lg text-blue-800 my-4 hover:text-blue-500">John Doe</h1>
        <p className="sm:text-sm sm:text-base text-gray-600 text-base">Developer at Example Co. Loves to write code and explore new technologies.</p>
      </div>
    );
  }
  
  export default UserProfile;