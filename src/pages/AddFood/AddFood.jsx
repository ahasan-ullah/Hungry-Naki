import React, { useContext, useState } from "react";
import AuthContext from "../../layout/Auth/AuthContext";
import axios from "axios";
import Swal from "sweetalert2";

const AddFood = () => {
  const { user } = useContext(AuthContext);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const ingredientsArray = e.target.ingredients.value
      .split(",")
      .map((item) => item.trim());
    const form = e.target;
    const foodName = form.foodName.value;
    const foodImage = form.foodImage.value;
    const foodCategory = form.foodCategory.value;
    const quantity = form.quantity.value;
    const price = form.price.value;
    const addByName = user.displayName;
    const addByEmail = user.email;
    const foodOrigin = form.foodOrigin.value;
    const ingredients = ingredientsArray;
    const makingProcedure = form.makingProcedure.value;
    const purchasedQuantity=0;

    const data = {
      foodName,
      foodImage,
      foodCategory,
      quantity,
      price,
      addBy: {
        name: addByName,
        email: addByEmail,
      },
      foodOrigin,
      description: {
        ingredients,
        makingProcedure,
      },
      purchasedQuantity
    };

    axios
      .post("https://hungry-naki-server-swart.vercel.app/foods", data)
      .then((res) => {
        if (res.status === 200) {
          Swal.fire({
            title: "Product Added Successfully",
            icon: "success",
          });
        }
      })
      .catch((err) => {
        Swal.fire({
          title: "Something went wrong while adding the product.",
          icon: "error",
        });
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4 mt-16">
      <form onSubmit={handleSubmit} className="w-full max-w-xl rounded-lg p-6">
        <h2 className="text-3xl font-bold mb-6 text-center">Add Food</h2>

        {/* Food Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Food Name
          </label>
          <input
            type="text"
            name="foodName"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
          />
        </div>

        {/* Food Image */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Food Image URL
          </label>
          <input
            type="url"
            name="foodImage"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
          />
        </div>

        {/* Food Category */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Food Category
          </label>
          <input
            type="text"
            name="foodCategory"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
          />
        </div>

        {/* Quantity */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Quantity
          </label>
          <input
            type="number"
            name="quantity"
            min={1}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
          />
        </div>

        {/* Price */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Price (USD)
          </label>
          <input
            type="number"
            name="price"
            min={0.01}
            step={0.01}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
          />
        </div>

        {/* Food Origin */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Food Origin (Country)
          </label>
          <input
            type="text"
            name="foodOrigin"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
          />
        </div>

        {/* Ingredients */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Ingredients
          </label>
          <textarea
            name="ingredients"
            required
            placeholder="Add using comma"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
            rows="3"
          />
        </div>

        {/* Making Procedure */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Making Procedure
          </label>
          <textarea
            name="makingProcedure"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
            rows="4"
          />
        </div>

        {/* Added By */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Added By
          </label>
          <div className="flex space-x-4">
            <input
              type="text"
              value={user.displayName}
              readOnly
              className="w-1/2 px-4 py-2 bg-gray-100 border border-gray-300 rounded-md cursor-not-allowed"
            />
            <input
              type="email"
              value={user.email}
              readOnly
              className="w-1/2 px-4 py-2 bg-gray-100 border border-gray-300 rounded-md cursor-not-allowed"
            />
          </div>
        </div>

        {/* Add Item Button */}
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 focus:ring focus:ring-blue-200 focus:outline-none"
        >
          Add Item
        </button>
      </form>
    </div>
  );
};

export default AddFood;
