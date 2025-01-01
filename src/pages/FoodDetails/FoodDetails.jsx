import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import LoadingPage from "../LoadingPage/LoadingPage";

const FoodDetails = () => {
  const { id } = useParams();
  const [food, setFood] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://hungry-naki-server-swart.vercel.app/foods/${id}`).then((res) => {
      setFood(res.data);
      setLoading(false);
    });
  }, [id]);

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-4xl mx-auto bg-white rounded-lg overflow-hidden">
        <div className="md:flex justify-center items-center gap-5">
          {/* Left Section: Food Image */}
          <div className="md:w-1/2 h-64 bg-gray-200">
            <img
              className="w-full h-full object-cover"
              src={food.foodImage}
              alt={food.foodName}
            />
          </div>

          {/* Right Section: Food Details */}
          <div className="p-6 md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {food.foodName}
            </h2>
            <p className="text-sm text-gray-500 mb-2">
              <strong>Category:</strong> {food.foodCategory}
            </p>
            <p className="text-sm text-gray-500 mb-2">
              <strong>Origin:</strong> {food.foodOrigin}
            </p>
            <div className="mb-2">
              <p className="text-sm text-gray-500">
                <strong>Added By:</strong> {food.addBy?.name}
              </p>
              <p className="text-sm text-gray-500">
                {food.addBy?.email}
              </p>
            </div>

            <p className="text-lg font-semibold text-gray-700 mb-2">
              <strong>Price:</strong> ${food.price}
            </p>
            <p className="text-sm text-gray-500 mb-2">
              <strong>Quantity Available:</strong> {food.quantity}
            </p>
            <p className="text-sm text-gray-500 mb-2">
              <strong>Purchase Count:</strong> {food.purchasedQuantity || 0}
            </p>

            {/* Ingredients Section */}
            <div className="my-4">
              <h4 className="text-lg font-medium text-gray-800 mb-2">
                Ingredients:
              </h4>
              <ul className="list-disc list-inside text-sm text-gray-500">
                {food.description?.ingredients?.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>

            {/* Making Procedure */}
            <div>
              <h4 className="text-lg font-medium text-gray-800 mb-2">
                Making Procedure:
              </h4>
              <p className="text-sm text-gray-500">
                {food.description?.makingProcedure}
              </p>
            </div>

            {/* Purchase Button */}
            <Link
              to={`/purchase/${id}`}
              className="mt-6 inline-block w-full text-center py-3 px-6 bg-blue-600 text-white font-medium text-lg rounded-md hover:bg-blue-700 focus:ring focus:ring-blue-300"
            >
              Purchase
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
