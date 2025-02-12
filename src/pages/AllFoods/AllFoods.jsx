import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
const AllFoods = () => {
  const [foods, setFoods] = useState([]);
  const [filteredFoods, setFilteredFoods] = useState([]);
  const [loading,setLoading]=useState(true);
  const [search, setSearch] = useState("");
  const [totalCount, setTotalCount] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage,setCurrentPage]=useState(0);

  const numberOfPages = Math.ceil(totalCount / itemsPerPage);
  const pages = [...Array(numberOfPages).keys()];

  //getting products count
  useEffect(() => {
    axios
      .get("https://hungry-naki-server-swart.vercel.app/productsCount")
      .then((res) => setTotalCount(res.data.count));
  }, []);

  // geting all products
  useEffect(() => {
    axios
      .get("https://hungry-naki-server-swart.vercel.app/foods")
      .then((res) => {
        setFoods(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(()=>{
    fetch(`https://hungry-naki-server-swart.vercel.app/foods?page=${currentPage}&size=${itemsPerPage}`)
    .then(res=>res.json())
    .then(data=>{
      setFilteredFoods(data);
    })
  },[currentPage,setItemsPerPage])

  //search functionality
  const handleSearch = (e) => {
    setSearch(e.target.value);

    const filtered = foods.filter((food) =>
      food.foodName.toLowerCase().includes(e.target.value.toLowerCase())
    );

    setFilteredFoods(filtered);
  };

  //items per page
  const handlePerPageItems=(e)=>{
    const val=parseInt(e.target.value);
    setItemsPerPage(val);
    setCurrentPage(0);
  }

  const handleSort=()=>{
    const sortedFoods = [...filteredFoods].sort(
      (a, b) => parseFloat(a.price) - parseFloat(b.price)
    );
    setFilteredFoods(sortedFoods);
  }

  return (
    <div className="min-h-screen py-10 mt-16">
      <div className="text-center">
        <h1 className="text-4xl font-semibold text-blue-500">All Foods</h1>
        <p className="text-lg text-gray-600 mt-2">
          Browse through our selection of delicious foods
        </p>
      </div>

      {/* Search Input */}
      <div className="mt-10 text-center space-x-5">
        <input
          type="text"
          defaultValue={search}
          onChange={handleSearch}
          className="p-2 w-72 border rounded-lg shadow-lg mt-4"
          placeholder="Search for food items..."
        />
        <button onClick={handleSort} className="btn btn-error">Sort</button>
      </div>

      {/* Food Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
        {filteredFoods.map((food) => (
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
      {/* pagination */}
      <div className="flex items-center justify-center my-5 space-x-4">
        {pages.map((page) => (
          <button onClick={()=>{setCurrentPage(page)}} key={page} className={currentPage===page ? 'btn btn-neutral' : 'btn'}>
            {page + 1}
          </button>
        ))}
        <select className="select select-bordered w-20" onChange={handlePerPageItems}>
          <option disabled defaultValue={itemsPerPage}>
            {itemsPerPage}
          </option>
          <option>10</option>
          <option>20</option>
          <option>50</option>
        </select>
      </div>
    </div>
  );
};

export default AllFoods;
