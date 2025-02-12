import axios from "axios";
import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import AuthContext from "../../layout/Auth/AuthContext";

const MyOrder = () => {
  const {user}=useContext(AuthContext);
  const orders = useLoaderData();
  const [foods,setFoods]=useState(orders);
  const handleDelete = (id) => {
    const email=user.email;
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`https://hungry-naki-server-swart.vercel.app/myOrders/${user.email}`,{data: {email,id}}).then((res) => {
          if (res.status === 200) {
            Swal.fire({
              title: "Deleted!",
              text: "Your food has been deleted.",
              icon: "success",
            });
            setFoods(orders.filter((order) => order._id !== id));
          }
        });
      }
    });
  };
  return (
    <div className="overflow-x-auto p-10 max-w-3xl min-h-screen mx-auto mt-20">
      <div className="text-center">
        <h1 className="text-4xl font-semibold text-blue-500 mb-10">My Orders</h1>
      </div>
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Purchase Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {foods.map((order) => (
            <tr key={order._id}>
              <td>{order.foodName}</td>
              <td>{order.price}</td>
              <td>{order.purchasedQuantity}</td>
              <td>{order.buyingDate}</td>
              <th>
                <button
                  onClick={() => {
                    handleDelete(order._id);
                  }}
                  className="btn btn-neutral"
                >
                  Delete
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyOrder;
