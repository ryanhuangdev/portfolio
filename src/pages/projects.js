import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import Projects from "../components/Projects";
import SEO from "../components/SEO";

const ProjectsPage = ({
  data: {
    allStrapiProjects: { nodes: projects },
  },
}) => {
  return <Layout>
    <SEO title="Projects" description="my projects" />
    <section>
      <Projects projects={projects} title='all projects' />
    </section>
  </Layout>
};

export const query = graphql`
  {
    allStrapiProjects(sort: {order: DESC, fields: id}) {
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
  }
`;

export default ProjectsPage;
