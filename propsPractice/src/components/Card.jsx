function Card({ fname="GTA", lname, image, btnText }) {
  return (
    <div className="w-72 max-w-sm h-auto p-4 bg-gray-800 rounded-xl hover:scale-105 transition-transform duration-200 shadow-lg">
      <img
        src={image}
        className="w-full h-48 object-cover rounded-xl mb-4"
        alt={`${fname} ${lname}`}
      />
      <div className="flex gap-1 text-white text-xl font-semibold justify-center">
        <h2>{fname}</h2>
        <h2>{lname}</h2>
      </div>
      <button
        className="mt-5 w-40 mx-auto block text-white border border-white rounded-lg py-2 hover:bg-red-500 transition-colors hover:cursor-pointer"
      >
        {btnText}
      </button>
    </div>
  );
}


export default Card;
