import axios from "axios";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const MyFood = () => {
  const foods = useLoaderData();
  const [updatedFood, setUpdatedFood] = useState({});
  //getting single product data
  const getProductData = (foodId) => {
    axios
      .get(`https://hungry-naki-server-swart.vercel.app/foods/${foodId}`)
      .then((res) => setUpdatedFood(res.data));
  };

  //handling update data method
  const handleUpdate = (e) => {
    e.preventDefault();
    const form=e.target;
    const foodName = form.foodName.value;
    const foodImage = form.foodImage.value;
    const foodCategory = form.foodCategory.value;
    const quantity = form.quantity.value;
    const price = form.price.value;
    const foodOrigin = form.foodOrigin.value;
    const ingredients = form.ingredients.value.split(",").map(item=>item.trim());
    const makingProcedure = form.makingProcedure.value;

    const id = updatedFood._id;

    const data = {
      foodName,
      foodImage,
      foodCategory,
      quantity,
      price,
      foodOrigin,
      description: {
        ingredients,
        makingProcedure,
      },
    };


    axios
      .put(`https://hungry-naki-server-swart.vercel.app/foods/${id}`, data)
      .then((res) => {
        if (res.status === 200) {
          Swal.fire({
            title: "Product Updated Successfully",
            icon: "success",
          });
        }
      })
      .catch((err) => {
        Swal.fire({
          title: "Something went wrong while updating the product.",
          icon: "error",
        });
      });
  };

  const clearForm = () => {
    setUpdatedFood({});
  };
  return (
    <div className="overflow-x-auto mt-20 min-h-screen py-10">
      <div className="text-center">
        <h1 className="text-4xl font-semibold text-blue-500 mb-10">My Food</h1>
      </div>
      <table className="table max-w-5xl mx-auto">
        {/* head */}
        <thead>
          <tr>
            <th>Image</th>
            <th>Food Category</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {foods.map((food) => (
            <tr key={food._id}>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src={food.foodImage}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{food.foodName}</div>
                    <div className="text-sm opacity-50">{food.foodOrigin}</div>
                  </div>
                </div>
              </td>
              <td>{food.foodCategory}</td>
              <td>{food.price}</td>
              <th>
                <button
                  onClick={() => {
                    document.getElementById("update-modal").showModal();
                    getProductData(`${food._id}`);
                  }}
                  className="btn btn-neutral"
                >
                  Update
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="update-modal" className="modal">
        <div className="modal-box">
          <div className="modal-action">
            <form
              onSubmit={handleUpdate}
              className="w-full max-w-xl rounded-lg p-6"
            >
              <h2 className="text-3xl font-bold mb-6 text-center">
                Update Food Details
              </h2>

              {/* Food Name */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Food Name
                </label>
                <input
                  type="text"
                  name="foodName"
                  defaultValue={updatedFood.foodName}
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
                  defaultValue={updatedFood.foodImage}
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
                  defaultValue={updatedFood.foodCategory}
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
                  defaultValue={updatedFood.quantity}
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
                  defaultValue={updatedFood.price}
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
                  defaultValue={updatedFood.foodOrigin}
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
                  defaultValue={updatedFood.description?.ingredients?.join(",")}
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
                  defaultValue={updatedFood.description?.makingProcedure}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
                  rows="4"
                />
              </div>
              {/* Add Item Button */}
              <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 focus:ring focus:ring-blue-200 focus:outline-none"
              >
                Update
              </button>
            </form>
          </div>
          <form method="dialog" className="flex justify-center items-center">
            {/* if there is a button in form, it will close the modal */}
            <button onClick={clearForm} className="btn">
              Close
            </button>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default MyFood;
