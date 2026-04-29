import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiShare2 } from "react-icons/ci";
import { FaBookmark } from "react-icons/fa";
import { IoIosStar, IoMdEye } from "react-icons/io";

export default function MidCard({ news }) {
  // console.log(news, "news fork mane kuuuuuuu");
  return (
    <div>
      <div className="card bg-base-100 shadow-sm">
        <div className="card-body p-5 space-y-2">
          {/* author info */}
          <div className="bg-base-300 rounded-md p-4 flex justify-between items-center jus">
            <div className="flex gap-5">
              <Image
                src={news.author?.img}
                alt={news.author?.name || "Author image"}
                className="rounded-full border-2 border-gray-500"
                width={50}
                height={50}
                style={{ width: "50px", height: "50px", objectFit: "cover" }}
              />
              <div className="">
                {" "}
                <h2 className="font-bold">{news.author?.name}</h2>
                <h2 className="text-sm text-gray-500">
                  {news.author?.published_date}
                </h2>
              </div>
            </div>
            <div className="flex gap-3 items-center justify-center">
              <CiShare2 size={30} />
              <FaBookmark size={30} />
            </div>
          </div>

          <h2 className="card-title">{news.title}</h2>

          <figure>
            <Image
              src={news.thumbnail_url}
              alt={news.title}
              width={500}
              height={300}
              style={{ width: "100%", height: "auto" }}
            />
          </figure>
          <p className="text-gray-500 font-semibold line-clamp-3">
            {news?.details}
          </p>
          <div className="flex justify-between items-center">
            <div className="">
              <h1 className="flex items-center gap-2 text-yellow-500">
                <IoIosStar size={20} />{" "}
                <span className=" text-black">{news.rating.number}</span>
              </h1>
              <h1 className="flex items-center gap-2">
                <IoMdEye size={30} />
                {news.total_view}
              </h1>
            </div>

            <Link href={`/news/${news._id}`}>
              <button className="btn btn-primary">Read More</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
