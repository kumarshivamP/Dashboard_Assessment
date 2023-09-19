import React, { useEffect, useState } from "react";
import SideNav from "./SideNav";
import Navbar from "./Navbar";
import { Bar, Doughnut } from "react-chartjs-2";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js/auto";
import ProfileForm from "./ProfileForm";
import { apiData } from "../api";

const Dashboard = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  const [isProfile, setIsProfile] = useState(false);
  const [isShowModal, setIsShowModal] = useState(false);
  const [tempData, setTempData] = useState({
    labels: [],
    dataTemp: [],
    dataHum: [],
  });
  const [average, setAverage] = useState({ temp: 0, hum: 0 });
  const [user, setUser] = useState({
    name: "John Doe",
    email: "johndoe@gmail.com",
    phone: "+912993881234",
    insta: "john_official",
    youtube: "john_official",
  });
  const optionsBar = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "right",
      },
      title: {
        display: true,
        text: "Temperature and Humidity",
      },
    },
  };
  const dataBar = {
    labels: tempData.labels,
    datasets: [
      {
        label: "Temperature",
        data: tempData.dataTemp,
        backgroundColor: "#98D89E",
        borderWidth: 1,
      },
      {
        label: "Humidity",
        data: tempData.dataHum,
        backgroundColor: "#EE8484",
        borderWidth: 1,
      },
    ],
  };

  const dataPie = {
    labels: ["Average Temperature", "Average Humidity"],
    datasets: [
      {
        label: "Temperature",
        data: [average.temp, average.hum],
        backgroundColor: ["#98D89E", "#EE8484"],
        borderWidth: 1,
      },
    ],
  };
  const fetchData = () => {
    apiData()
      .then((res) => {
        setTempData({
          labels: res.hourly.time,
          dataTemp: res.hourly.temperature_2m,
          dataHum: res.hourly.relativehumidity_2m,
        });
        setAverage({
          temp: res.hourly.temperature_2m.reduce((a, b) => a + b) / 24,
          hum: res.hourly.relativehumidity_2m.reduce((a, b) => a + b) / 24,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);
  return (
    <div className="flex justify-between">
      <SideNav />
      <div className="flex flex-col w-3/4 mx-16 ">
        <Navbar />
        <main className=" flex flex-col mt-10">
          <div className="flex justify-between">
            <div className="bg-[#FFFFFF] w-72 h-32 rounded-lg px-7 py-5">
              <div className="flex flex-col">
                <div className="bg-[#7FCD93] w-8 h-8 rounded-full flex justify-center items-center">
                  <i className="fa-solid fa-money-bills text-[#FFF] text-xl"></i>
                </div>
                <div className="text-sm w-fit max-w-full mt-1.5 mb-0.5">
                  Total Revenues
                </div>
                <div className="flex justify-between">
                  <div className="text-xl font-['Open_Sans'] font-bold max-w-[60%] w-fit">
                    $125
                  </div>
                  <div className="bg-[#E9F9EB] w-16 text-[#3CC952] rounded-full">
                    +2.5%
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#FFFFFF] w-72 h-32 rounded-lg px-7 py-5">
              <div className="flex flex-col">
                <div className="bg-[#DEBF85] w-8 h-8 rounded-full flex justify-center items-center">
                  <i className="fa-solid fa-tags text-[#FFF] text-xl"></i>
                </div>
                <div className=" text-sm w-fit max-w-full mt-1.5 mb-0.5">
                  Total Transactions
                </div>
                <div className="flex justify-between">
                  <div className="text-xl font-['Open_Sans'] font-bold max-w-[60%] w-fit">
                    1520
                  </div>
                  <div className="bg-[#E9F9EB] w-16 text-[#3CC952] rounded-full">
                    +2.5%
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#FFFFFF] w-72 h-32 rounded-lg px-7 py-5">
              <div className="flex flex-col">
                <div className="bg-[#ECA4A4] w-8 h-8 rounded-full flex justify-center items-center">
                  <i className="fa-regular fa-thumbs-up text-[#FFF] text-xl"></i>
                </div>
                <div className=" text-sm w-fit max-w-full mt-1.5 mb-0.5">
                  Total Likes
                </div>
                <div className="flex justify-between">
                  <div className="text-xl font-['Open_Sans'] font-bold max-w-[60%] w-fit">
                    4654
                  </div>
                  <div className="bg-[#E9F9EB] w-16 text-[#3CC952] rounded-full">
                    +2.5%
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#FFFFFF] w-72 h-32 rounded-lg px-7 py-5">
              <div className="flex flex-col">
                <div className="bg-[#A9B0E5] w-8 h-8 rounded-full flex justify-center items-center">
                  <i className="fa-solid fa-users text-[#FFF] text-xl"></i>
                </div>
                <div className=" text-sm w-fit max-w-full mt-1.5 mb-0.5">
                  Total Users
                </div>
                <div className="flex justify-between">
                  <div className="text-xl font-['Open_Sans'] font-bold max-w-[60%] w-fit">
                    8798
                  </div>
                  <div className="bg-[#E9F9EB] w-16 text-[#3CC952] rounded-full">
                    +2.5%
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#FFFFFF] w-full h-80 mt-10 rounded-3xl px-8 py-2">
            <Bar data={dataBar} options={optionsBar} width={900} height={200} />
          </div>
          <div className="flex justify-between">
            <div
              className="bg-[#FFFFFF] h-64 mt-9 rounded-lg px-6 py-2"
              style={{ width: "47%" }}
            >
              <Doughnut data={dataPie} options={optionsBar} height={100} />
            </div>
            {!isProfile ? (
              <div
                className="bg-[#FFFFFF] h-64 mt-9 rounded-lg flex"
                style={{ width: "47%" }}
              >
                <div className="m-auto">
                  <div className="h-20 w-20 bg-[#F5F5F5] rounded-full flex justify-center items-center">
                    <i
                      className="fa-solid fa-plus text-7xl text-[#999CA0] text-center"
                      onClick={() => {
                        setIsShowModal(true);
                      }}
                    />
                  </div>
                  <p className="font-semibold text-base">Add Profile</p>
                </div>
              </div>
            ) : (
              <div
                className="bg-[#FFFFFF] h-64 mt-9 rounded-lg font-['Figtree'] relative"
                style={{ width: "47%" }}
              >
                <div className="flex flex-col">
                  <div className="text-2xl font-semibold absolute left-10 top-12">
                    {user.name}
                  </div>
                  <div className="absolute left-10 top-32">
                    <div className="grid grid-cols-2 gap-x-20 gap-y-6">
                      <div className="flex w-64 h-7">
                        <div className="bg-[#E9F9EB] w-7 h-7 rounded-full mr-3 flex justify-center items-center">
                          <i className="fa-brands fa-whatsapp text-[#3CC952] text-xl"></i>
                        </div>
                        <p className="text-lg font-normal underline">
                          {user.phone}
                        </p>
                      </div>
                      <div className="flex w-64 h-7">
                        <div className="bg-[#FFE9EC] w-7 h-7 rounded-full mr-3 flex justify-center items-center">
                          <i className="fa-brands fa-instagram text-[#FF4E64] text-xl"></i>
                        </div>
                        <p className="text-lg font-normal underline">
                          {user.insta}
                        </p>
                      </div>
                      <div className="flex w-64 h-7">
                        <div className="bg-[#EBE6F9] w-7 h-7 rounded-full mr-3 flex justify-center items-center">
                          <i className="fa-regular fa-envelope text-[#5C33CF] text-xl"></i>
                        </div>
                        <p className="text-lg font-normal underline">
                          {user.email}
                        </p>
                      </div>
                      <div className="flex w-64 h-7">
                        <div className="bg-[#FFE9E9] w-7 h-7 rounded-full mr-3 flex justify-center items-center">
                          <i className="fa-brands fa-youtube text-[#FF0000] text-xl"></i>
                        </div>
                        <p className="text-lg font-normal underline">
                          {user.youtube}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
      <div>
        {isShowModal && (
          <ProfileForm
            setmodal={setIsShowModal}
            setUser={setUser}
            setProfile={setIsProfile}
            user={user}
          />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
