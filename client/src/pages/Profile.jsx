// ProfilePage.jsx

const Profile = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      {/* Profile Header */}
      <div className="bg-white rounded-lg shadow-md p-8 max-w-4xl mx-auto">
        <div className="flex items-center space-x-6">
          <img
            src="https://via.placeholder.com/150"
            alt="User Avatar"
            className="w-24 h-24 rounded-full object-cover"
          />
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">John Doe</h2>
            <p className="text-gray-600">Real Estate Agent</p>
            <p className="text-gray-500">johndoe@example.com</p>
            <p className="text-gray-500">+123 456 7890</p>
          </div>
          <button className="ml-auto bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500">
            Contact Me
          </button>
        </div>
      </div>

      {/* Listings Section */}
      <div className="mt-8 max-w-4xl mx-auto">
        <h3 className="text-xl font-semibold text-gray-700">My Listings</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
          {/* Example Listing Card */}
          <ListingCard
            image="https://via.placeholder.com/200"
            title="Modern 2-Bedroom Apartment"
            location="Downtown City, NY"
            price="$1200/mo"
          />
          <ListingCard
            image="https://via.placeholder.com/200"
            title="Spacious Family House"
            location="Suburb, CA"
            price="$2500/mo"
          />
          {/* Add more <ListingCard /> as needed */}
        </div>
      </div>

      {/* Contact Form */}
      <div className="mt-12 max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Get in Touch</h3>
        <form>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <textarea
            placeholder="Message"
            rows="4"
            className="w-full mt-4 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

// ListingCard Component for property listings
const ListingCard = ({ image, title, location, price }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h4 className="font-semibold text-lg text-gray-800">{title}</h4>
        <p className="text-gray-600">{location}</p>
        <p className="font-bold text-blue-600 mt-2">{price}</p>
      </div>
    </div>
  );
};

export default Profile;
