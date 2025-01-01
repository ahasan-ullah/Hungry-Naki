import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import AuthContext from "../../layout/Auth/AuthContext";
import axios from "axios";
import Swal from "sweetalert2";

const ProductPurchase = () => {
  const product=useLoaderData();
  const {user}=useContext(AuthContext);
  const [quantity,setQuantity]=useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const form = e.target;
    const purchasedQuantity = form.quantity.value;
    const foodName = product.foodName;
    const price = product.price;
    const userName = user.displayName;
    const email = user.email;
    const buyingDate = new Date().toLocaleString();
  
    const purchasedFod = {
      foodName,
      price,
      purchasedQuantity,
      userName,
      email,
      buyingDate,
    };
  
    axios.post('https://hungry-naki-server-swart.vercel.app/purchasedFood', purchasedFod)
      .then((res) => {
        if (res.status === 200) {
          Swal.fire({
            title: "Product Purchased Successfully",
            icon: "success"
          });
        }
      })
      .catch((err) => {
        Swal.fire({
          title: "Error",
          text: "Something went wrong while purchasing the product.",
          icon: "error"
        });
      });
  };
  
  return (
    <div className="flex items-center justify-center min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white rounded-lg p-6"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          Product Purchase
        </h2>

        {/* Food Name (Read-only) */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Food Name
          </label>
          <input
            type="text"
            value={product.foodName}
            readOnly
            className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md cursor-not-allowed focus:outline-none"
          />
        </div>

        {/* Price (Read-only) */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Price
          </label>
          <input
            type="text"
            value={product.price}
            readOnly
            className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md cursor-not-allowed focus:outline-none"
          />
        </div>

        {/* Quantity (Editable) */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Quantity
          </label>
          <input
            type="number"
            name="quantity"
            defaultValue={quantity}
            min={1}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
          />
        </div>

        {/* Buyer Name (Read-only) */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Buyer Name
          </label>
          <input
            type="text"
            value={user.displayName}
            readOnly
            className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md cursor-not-allowed focus:outline-none"
          />
        </div>

        {/* Buyer Email (Read-only) */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Buyer Email
          </label>
          <input
            type="email"
            value={user.email}
            readOnly
            className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md cursor-not-allowed focus:outline-none"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:ring focus:ring-blue-200 focus:outline-none"
        >
          Purchase
        </button>
      </form>
    </div>
  );
};

export default ProductPurchase;