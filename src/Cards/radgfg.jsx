<div className="min-w-[250px] w-1/4 h-[30vh] flex-shrink-0 border border-gray-300">
  <div className="flex justify-center bg-secondaryColor py-3 px-4 bg-[#EBF5EE]  text-xl text-secondary border-b border-gray-300">
    <span>Cart Summary</span>
  </div>

  <div className=" px-6 ">
    <div className="flex justify-between text-secondary border-b border-gray-300 py-4">
      <span className="font-inter font-bold">Subtotal:</span>
      {/* <span>R{subtotal}</span> */}
    </div>

    <div className="flex justify-between text-secondary border-b border-gray-300 py-4">
      <span className="font-inter font-bold">Total:</span>
      {/* <span>R{subtotal}</span> */}
    </div>
  </div>

  <div className="p-8">
    <Link
      to="/checkout"
      className="block w-full bg-button rounded-full text-white font-semibold py-3  hover:bg-blue-300 transition text-center"
    >
      Proceed to Checkout
    </Link>
  </div>
</div>;
