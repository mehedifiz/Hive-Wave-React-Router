/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import placeholder_img from '../assets/404.jpg'

const Blogcard = ({ blog }) => {
    
    const { cover_image, title, description, published_at , id } = blog;




    return (
      <Link
        rel="noopener noreferrer"
        to={`/blog/${id}`}
        className="transition border-2 hover:scale-105 border-primary hover:border-secondary border-opacity-30   max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50"
      >
        <img
          role="presentation"
          className="object-cover w-full rounded h-44 dark:bg-gray-500"
          src={cover_image || placeholder_img}
        />
        <div className="p-6 space-y-2">
          <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
            {title}
          </h3>
          <span className="text-xs dark:text-gray-600">
            {new Date(blog.published_at).toLocaleDateString()}
          </span>
          <p>{description}</p>
        </div>
      </Link>
    );
};

export default Blogcard;