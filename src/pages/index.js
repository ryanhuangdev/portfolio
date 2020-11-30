import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Jobs from "../components/Jobs";
import Projects from "../components/Projects";
import Blogs from "../components/Blogs";
import SEO from '../components/SEO';

export default ({ data }) => {
  const {
    allStrapiProjects: { nodes: projects },
    allStrapiBlogs: { nodes: blogs }
  } = data;

  return (
    <Layout>
      <SEO title='Home' description='this is the home page' />
      <Hero />
      <Services />
      <Jobs />
      <Projects projects={projects} title="featured projects" showLink />
      <Blogs blogs={blogs} title="latest articles" showLink />
    </Layout>
  );
};

export const query = graphql`
  {
    allStrapiProjects(filter: { featured: { eq: true } }) {
      nodes {
        github
        id
        title
        stack {
          id
          title
        }
        description
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    allStrapiBlogs(sort: {order: DESC, fields: date}, limit: 3) {
      nodes {
        slug
        date(formatString: "MMMM Do, YYYY")
        id
        title
        category
        desc
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
