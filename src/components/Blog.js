import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { Link } from "gatsby"
const Blog = ({ id, title, image, slug, desc }) => {
  return <Link to={`/blogs/${slug}`} className='blog' key={id}>
    <article>
      <Image fluid={image.childImageSharp.fluid} className='blog-img' />
      <div className="blog-card">
        <h4>{title}</h4>
        <p>{desc}</p>
      </div>
    </article>
  </Link>
}

Blog.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  slug: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired
}

export default Blog
