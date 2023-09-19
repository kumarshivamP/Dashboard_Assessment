import React, { useState } from "react";

const ProfileForm = ({ setmodal, setUser, setProfile, user }) => {
  const [page, setPage] = useState(1);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="fixed inset-0 bg-[#00000080]"></div>
      <div
        className="fixed w-2/6 h-1/2 top-[50%] left-[50%]"
        style={{ transform: "translate(-50%,-50%)" }}
      >
        <div className="flex flex-col bg-[#FFF] m-auto rounded-xl">
          <header className="flex justify-between border-b-2 border-[#F2F2F2] h-16 items-center px-6">
            <h1 className="text-xl">Add New Profile</h1>
            <i
              className="fa-solid fa-xmark text-2xl"
              onClick={() => {
                setmodal(false);
                setUser({
                  name: "",
                  email: "",
                  phone: "",
                  insta: "",
                  youtube: "",
                });
              }}
            ></i>
          </header>
          <main className="px-6">
            <div className="flex justify-between mt-6">
              <div className="flex flex-col w-[40%]">
                <p className="font-semibold text-lg mb-3">Basic</p>
                <p
                  className={`border-b-[6px] rounded-full`}
                  style={{
                    borderColor: page === 1 ? "#3F84F8" : "#D9D9D9",
                  }}
                ></p>
              </div>
              <div className="flex flex-col w-[40%]">
                <p className="font-semibold text-lg mb-3">
                  {page === 1 ? "Contact" : "Social"}
                </p>
                <p
                  className={`border-b-[6px] rounded-full `}
                  style={{
                    borderColor: page === 2 ? "#3F84F8" : "#D9D9D9",
                  }}
                ></p>
              </div>
            </div>
            {page === 1 ? (
              <div className="my-5">
                <div className="items-start">
                  <label
                    className="text-base text-left float-left"
                    htmlFor="staticName"
                  >
                    Name*
                  </label>
                  <div>
                    <input
                      className="rounded-md w-full mb-3 mt-2.5 h-11 px-4 border-2 border-[#F2F2F2]"
                      type="text"
                      id="staticName"
                      name="name"
                      onChange={handleChange}
                      placeholder="John Doe"
                    />
                  </div>
                </div>
                <div className="items-start">
                  <label
                    className="text-base text-left float-left"
                    htmlFor="staticEmail"
                  >
                    Email Address*
                  </label>
                  <div>
                    <input
                      className="rounded-md w-full mb-3 mt-2.5 h-11 px-4 border-2 border-[#F2F2F2]"
                      type="email"
                      id="staticEmail"
                      name="email"
                      onChange={handleChange}
                      placeholder="johndoe@gmail.com"
                    />
                  </div>
                </div>
                <div className="items-start">
                  <label
                    className="text-base text-left float-left"
                    htmlFor="staticPhone"
                  >
                    Enter Phone*
                  </label>
                  <div>
                    <input
                      className="rounded-md w-full mb-3 mt-2.5 h-11 px-4 border-2 border-[#F2F2F2]"
                      type="tel"
                      id="staticPhone"
                      name="phone"
                      onChange={handleChange}
                      placeholder="+912993881234"
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className="my-5">
                <div className="items-start">
                  <label
                    className="text-base text-left float-left"
                    htmlFor="staticInsta"
                  >
                    Instagram Link
                  </label>
                  <div>
                    <input
                      className="rounded-md w-full mb-3 mt-2.5 h-11 px-4 border-2 border-[#F2F2F2]"
                      type="text"
                      id="staticInsta"
                      name="insta"
                      onChange={handleChange}
                      placeholder="john_official"
                    />
                  </div>
                </div>
                <div className="items-start">
                  <label
                    className="text-base text-left float-left"
                    htmlFor="staticYouTube"
                  >
                    YouTube Link
                  </label>
                  <div>
                    <input
                      className="rounded-md w-full mb-3 mt-2.5 h-11 px-4 border-2 border-[#F2F2F2]"
                      type="text"
                      id="staticYouTube"
                      name="youtube"
                      placeholder="john_official"
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            )}
          </main>
          <footer className="flex justify-end border-t-2 border-[#F2F2F2] h-20 px-6">
            {page === 1 ? (
              <button
                className="bg-[#3E84F8] text-[#FFFFFF] w-20 h-10 my-auto rounded-lg"
                onClick={() => setPage(2)}
              >
                Next
              </button>
            ) : (
              <>
                <button
                  className="border-2 border-[#999CA0] text-[#231F20] w-20 h-10 my-auto rounded-lg font-semibold mr-2.5"
                  onClick={() => setPage(1)}
                >
                  Back
                </button>
                <button
                  className="bg-[#3E84F8] text-[#FFFFFF] w-20 h-10 my-auto rounded-lg"
                  onClick={() => {
                    setProfile(true);
                    setmodal(false);
                  }}
                >
                  Done
                </button>
              </>
            )}
          </footer>
        </div>
      </div>
    </>
  );
};

export default ProfileForm;
