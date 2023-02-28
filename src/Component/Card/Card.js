import React from "react";
import { Link } from "react-router-dom";
import useCurrency from "../../Hooks/useCurrency";
export default function Card(props) {
  return (
    <>
      <Link to={"/detail/" + props.product.id}>
        <div className="sm:h-80 hover:bg-gray-300 shadow-gray-600 hover:-translate-y-3 transition ease-out duration-500 rounded bg-white border-gray-300 shadow-md overflow-hidden my-2 pb-4">
          <img
            className="h-40 sm:h-52 w-full object-cover "
            src={props.product.image ? "" + props.product.image : ""}
            alt={props.product.title}
          />
          <div className="m-4">
            <span className="font-bold">{props.product.title}</span>
            <span className="block text-gray-500 text-sm">
              {useCurrency('USD',props.product.price)}
            </span>
          </div>
        </div>
      </Link>
    </>
  );
}
