import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TopFood = () => {
  const [foods, setFoods] = useState([]);
  // geting all products
  useEffect(() => {
    axios
      .get("https://hungry-naki-server-swart.vercel.app/foods")
      .then((res) => {
        setFoods(res.data.slice(0, 8));
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="mb-10">
      <h3 className="text-3xl font-bold text-center">Top Food</h3>
      {/* Food Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
        {foods.map((food) => (
          <div
            key={food._id}
            className="p-5 rounded-lg hover:shadow-xl transition duration-300 border"
          >
            <img
              src={food.foodImage}
              alt={food.foodName}
              className="h-40 w-full object-cover rounded-md"
            />
            <div className="mt-4">
              <h3 className="font-semibold text-xl text-gray-800">
                {food.foodName}
              </h3>
              <p className="text-sm text-gray-500">{food.foodCategory}</p>
              <p className="text-lg font-semibold text-gray-700 mt-2">
                {food.price} USD
              </p>
              <p className="text-sm text-gray-600">
                Quantity Available: {food.quantity}
              </p>
            </div>
            <div className="mt-4 flex justify-between items-center">
              <Link
                to={`/food/${food._id}`}
                className="text-white bg-blue-500 py-1 px-3 rounded-md hover:bg-blue-700 transition duration-300"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopFood;
