import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../Component/Card/Card";
import Loader from "../Component/Loader/Loader";
import useCurrency from "../Hooks/useCurrency";
import useHTTP from "../Hooks/useHTTP";
function ContactPage() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-800 flex-col gap-8">
      <h1 className=" text-7xl text-main-white font-montserrat font-bold">
        Reach Me Out!
      </h1>
      <div className="flex gap-8">
        <a>
          <div className="flex justify-center items-center trasition-all duration-200 hover:fill-neutral-300 hover:bg-yellow-600 hover:-translate-y-2 w-16 h-16 bg-main-yellow rounded-full p-3 fill-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
              viewBox="0 0 448 512"
            >
              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
            </svg>
          </div>
        </a>
        <a href="">
          <div className="flex justify-center items-center trasition-all duration-200 hover:fill-neutral-300 hover:bg-yellow-600 hover:-translate-y-2 w-16 h-16 bg-main-yellow rounded-full p-3 fill-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
              viewBox="0 0 448 512"
            >
              <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
            </svg>
          </div>
        </a>
        <a href="">
          <div className="flex justify-center items-center trasition-all duration-200 hover:fill-neutral-300 hover:bg-yellow-600 hover:-translate-y-2 w-16 h-16 bg-main-yellow rounded-full p-3 fill-black">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
              <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
            </svg>
          </div>
        </a>
        <a href="">
          <div className="flex justify-center items-center trasition-all duration-200 hover:fill-neutral-300 hover:bg-yellow-600 hover:-translate-y-2 w-16 h-16 bg-main-yellow rounded-full p-3 fill-black">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              flex justify-center items-center
              <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
            </svg>
          </div>
        </a>
      </div>
    </div>
  );
}
function HomePage() {
  let component;
  let products = useHTTP("get", "https://fakestoreapi.com/products?limit=10");
  if (products.error) {
    component = <h1>Sorry error happened. Please wait for a moment</h1>;
  } else {
    if (products.loading) {
      component = <Loader />;
    } else {
      if (products.data) {
        component = products.data.map((products) => {
          return <Card product={products} />;
        });
      }
    }
  }
  return (
    <>
      <div className="bg-gray-800 md:p-8 min-h-screen translate-y-16 md:translate-y-0 p-9">
        <div className="grid md:grid-cols-5 md:gap-4 w-full">{component}</div>
      </div>
    </>
  );
}
function Detail() {
  const { id } = useParams();
  const disableButton = useRef();
  const product = useHTTP("GET", `https://fakestoreapi.com/products/${id}`);
  const[quantity,setQuantity]=useState(1);
 useEffect(()=>{
  if(quantity===1){
    disableButton.current.disabled = true
  }else{
    disableButton.current.disabled = false
  }
 },[quantity])
  return (
    <>
      <div className="gap-8 p-12 translate-y-16 md:translate-y-0 min-h-screen bg-gray-800 grid md:grid-cols-3 ">
        {/* Image */}
        <div>
          <img
            className="h-40 sm:h-full w-full object-cover rounded-md"
            src={product.data?.image ? "" + product.data?.image : ""}
            alt={product.data?.title}
          />
        </div>
        {/* Title & Desc */}
        <div>
          <h1 className="font-montserrat my-4 text-3xl text-main-white font-semibold">
            {product.data?.title}
          </h1>
          <span className="font-ptsans my-4 text-2xl text-gray-200">
            {useCurrency("USD", product.data?.price)}
          </span>
          <p className="my-4 font-ptsans text-base text-gray-400">{product.data?.description}</p>
        </div>
        {/* User Component */}
        <div className="bg-gray-300 rounded-md h-1/2 border-8 border-gray-400 p-4 flex-col flex justify-center items-center">
          <div className="h-3/4 w-full">
            <h3 className="font-ptsans font-bold">Quantity and Adjustment</h3>
            <div className="my-4 flex border-2 border-gray-400 w-1/4 justify-between items-center rounded-md px-2 py-1">
              <button ref={disableButton} onClick={e=>{
                e.preventDefault();
                setQuantity(quantity-1)
              }}  className="text-2xl text-main-yellow font-bold">-</button>
              <span className="text-xl ">{quantity}</span>
              <button onClick={e=>{
                e.preventDefault();
                setQuantity(quantity+1)
              }}  className="text-2xl text-main-yellow font-bold">+</button>
            </div>
            <div className="flex justify-between" >
              <span className="font-ptsans text-lg">Total :</span>
              <span className="font-ptsans text-lg">{useCurrency('USD',product.data?.price*quantity)}</span>
            </div>
          </div>
          <button className="w-3/4 border-gray-600 rounded-md font-ptsans font-bold bg-main-yellow p-1">BUY NOW</button>
        </div>
      </div>
    </>
  );
}
export { ContactPage, HomePage, Detail };
