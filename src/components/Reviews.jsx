import React, { useState } from "react";

export const Reviews = () => {
  const [activeTab, setActiveTab] = useState("description");
  const [rating, setRating] = useState(null); // State to track selected rating

  // Function to handle rating selection
  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  return (
    <div className="mx-[120px] p-20">
      <div className="w-full border-b ">
        <ul className="flex space-x-4" role="tablist">
          <li
            className={`border-b-2 ${
              activeTab === "description"
                ? "border-button"
                : "border-transparent"
            }`}
            id="tab-title-description"
          >
            <button
              onClick={() => setActiveTab("description")}
              role="tab"
              aria-controls="tab-description"
              aria-selected={activeTab === "description"}
              className={`p-2 ${
                activeTab === "description" ? "text-button" : "text-secondary"
              }`}
            >
              Description
            </button>
          </li>
          <li
            className={`border-b-2 ${
              activeTab === "reviews" ? "border-button" : "border-transparent"
            }`}
            id="tab-title-reviews"
          >
            <button
              onClick={() => setActiveTab("reviews")}
              role="tab"
              aria-controls="tab-reviews"
              aria-selected={activeTab === "reviews"}
              className={`p-2 ${
                activeTab === "reviews" ? "text-button" : "text-secondary"
              }`}
            >
              Reviews (0)
            </button>
          </li>
        </ul>
      </div>

      {/* Description Tab */}
      <div
        id="tab-description"
        role="tabpanel"
        aria-labelledby="tab-title-description"
        className={`space-y-5 py-10 ${
          activeTab === "description" ? "block" : "hidden"
        }`}
      >
        <p className="text-gray-700">
          Faucibus lacus tincidunt molestie accumsan nibh non odio aenean
          molestie purus tristique sed tempor consequat risus tellus amet augue
          egestas mauris scelerisque donec ultrices.<br></br> <br></br>{" "}
          Tincidunt mauris, pharetra aliquam in magnis ornare sit mi velit, quis
          semper ut a malesuada pharetra volutpat euismod vulputate pellentesque
          et risus in malesuada pellentesque dictumst amet vitae vitae ut
          phasellus quam et enim feugiat eget mauris aenean eu volutpat, dictum
          donec gravida nunc egestas viverra justo sed.<br></br> <br></br>{" "}
          Sollicitudin facilisis massa pellentesque in ultrices enim nunc ac
          egestas elementum ut in ornare sit malesuada.
        </p>
      </div>

      {/* Reviews Tab */}
      <div
        id="tab-reviews"
        role="tabpanel"
        aria-labelledby="tab-title-reviews"
        className={`p-4 ${activeTab === "reviews" ? "block" : "hidden"}`}
      >
        <div id="reviews" className="space-y-4">
          <h2 className="text-xl font-semibold">Reviews</h2>
          <ul className="space-y-2">
            <li className="flex space-x-3 p-2 ">
              <img
                className="w-12 h-12 rounded-full"
                src="https://secure.gravatar.com/avatar/1e3295d48c820f3f90f8fd41512b42c6?s=60&d=mm&r=g"
                alt=""
              />
              <div>
                <div className="text-secondary">★★★★★</div>
                <p className="text-sm text-gray-600 italic">
                  Your review is awaiting approval
                </p>
                <p className="text-gray-700">hjvggh</p>
              </div>
            </li>
          </ul>
        </div>

        <div id="review_form_wrapper" className="mt-4">
          <div className="p-4 border border-gray-300">
            <h3 className="text-lg font-inter ">Add a review</h3>
            <form className="space-y-2">
              <div>
                <label className="block font-medium">
                  Your rating <span className="text-red-500">*</span>
                </label>
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      onClick={() => handleRatingChange(star)}
                      onMouseEnter={() => setRating(star)}
                      onMouseLeave={() => setRating(null)}
                      className={`cursor-pointer text-2xl ${
                        (rating || 0) >= star ? "text-button" : "text-gray-300"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <label className="block font-medium">
                  Your review <span className="text-red-500">*</span>
                </label>
                <textarea
                  className="border p-2 w-full border-gray-300"
                  rows="4"
                ></textarea>
              </div>
              <div>
                <label className="block font-medium">
                  Name <span className="text-red-500 ">*</span>
                </label>
                <input
                  type="text"
                  className="border p-2 w-full border-gray-300"
                />
              </div>
              <div>
                <label className="block font-medium">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  className="border p-2 w-full border-gray-300"
                />
              </div>
              <div>
                <input
                  type="checkbox"
                  id="comment-cookies-consent"
                  className="mr-2 bg-button"
                />
                <label htmlFor="comment-cookies-consent" className="text-sm">
                  Save my name, email, and website in this browser for the next
                  time I comment.
                </label>
              </div>
              <button
                type="submit"
                className="bg-button text-white px-4 py-2 rounded"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
