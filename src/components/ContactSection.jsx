import React from 'react'

export const ContactSection = () => {
  return (
    <div className="mx-[120px] px-10  py-16">
      <div className="flex flex-raw py-20">
        <div className="space-y-6 w-full ">
          <h2 className="text-5xl font-inter text-primary  mb-8">
            Send us a Message
          </h2>

          <div className="flex items-center space-x-4 mb-10">
            <div className="w-16 h-16 flex items-center justify-center bg-[#ECF4D3] text-white rounded-full">
              <svg
                aria-hidden="true"
                className="w-6 h-6"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path>
              </svg>
            </div>
            <div>
              <h4 className="text-lg font-semibold">Phone</h4>
              <p className="text-gray-600">555-1234-678</p>
            </div>
          </div>

         
          <div className="flex items-center space-x-4 mb-10">
            <div className="w-16 h-16 flex items-center justify-center bg-[#ECF4D3] text-white rounded-full">
              <svg
                aria-hidden="true"
                className="w-6 h-6"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7z"></path>
              </svg>
            </div>
            <div>
              <h4 className="text-lg font-semibold">Email</h4>
              <p className="text-gray-600">example@example.com</p>
            </div>
          </div>

        
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 flex items-center justify-center bg-[#ECF4D3] text-white rounded-full">
              <svg
                aria-hidden="true"
                className="w-6 h-6"
                viewBox="0 0 384 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
              </svg>
            </div>
            <div>
              <h4 className="text-lg font-semibold">Address</h4>
              <p className="text-gray-600">
                2972 Westheimer Rd, Santa Ana, Illinois 85486
              </p>
            </div>
          </div>
        </div>

        <form className="mt-8 space-y-6 w-full">
          <div>
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Phone</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Message</label>
            <textarea
              className="w-full px-4 py-2 border rounded-lg"
              rows="4"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-button text-white py-3 rounded-lg  transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
