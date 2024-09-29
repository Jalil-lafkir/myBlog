import React from "react";
import { Auteur } from "../UserComponents/Auteur";
import { Link } from "react-router-dom";

const PostCard = () => {
  return (
    <div className="py-12 px-4">
      <p className="text-sm text-gray">Oct 26, 2003</p>
      <h3 className="lg:text-3xl text-2xl font-bold  text-gray my-3">
        This Is Post Card Title
      </h3>
      <p className="text-md text-gray my-4">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium
        repellendus velit debitis commodi error earum architecto, fugit
        asperiores incidunt laborum ut. Ullam tempore eius officiis doloribus
        nesciunt reiciendis minima reprehenderit{" "}
        <Link
          to={`/posts/:id:${Math.floor(Math.random() * 9999999999999)}`}
          className="text-blue transition-all cursor-pointer duration-150 hover:underline"
        >
          Read more
        </Link>
      </p>
      <Auteur />
    </div>
  );
};

export default PostCard;
