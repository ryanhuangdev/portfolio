import React from "react"
import PropTypes from "prop-types";
import Title from "./Title"
import Blog from "./Blog"

export const Blogs = ({ blogs, title }) => {
  return <section className='section'>
    <Title title={title} />
    <div className='section-center blogs-center'>
      {blogs.map(blog => {
        return <Blog key={blog.id} {...blog} />
      })}
    </div>
  </section>
};

Blogs.propTypes = {
  blogs: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string.isRequired
};

export default Blogs
