import React from "react";
import Layout from "../components/Layout";
import { Link } from "gatsby";
import SEO from "../components/SEO";

const Error = () => {
  return (
    <Layout>
      <SEO title='Error' description='error page' />
      <main className="error-page">
        <div className="error-container">
          <h1>This is not a valid page</h1>
          <Link to="/" className="btn">
            back home
          </Link>
        </div>
      </main>
    </Layout>
  );
};

export default Error;
