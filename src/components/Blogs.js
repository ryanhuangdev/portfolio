import React from "react"
import PropTypes from "prop-types";
import Title from "./Title"
import Blog from "./Blog"
import { Link } from "gatsby"

export const Blogs = ({ blogs, title, showLink }) => {
  return <section className='section'>
    <Title title={title} />
    <div className='section-center blogs-center'>
      {blogs.map(blog => {
        return <Blog key={blog.id} {...blog} />
      })}
    </div>
    {showLink && <Link to='/blog' className='btn center-btn'>blog</Link>}
  </section>
};

Blogs.propTypes = {
  blogs: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string.isRequired,
  showLink: PropTypes.bool.isRequired
};

export default Blogs
