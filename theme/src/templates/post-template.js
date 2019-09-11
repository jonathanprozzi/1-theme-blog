import React from 'react';
import { graphql } from 'gatsby';
import PostLayout from '../components/post-layout';

export const query = graphql`
  query PostQuery($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        excerpt
        categories
      }
      timeToRead
      excerpt
      wordCount {
        words
      }
    }
  }
`;

const PostTemplate = ({ data }) => {
  return (
    <div>
      <PostLayout
        title={data.mdx.title}
        date={data.mdx.frontmatter.date}
        categories={data.mdx.frontmatter.categories}
        excerpt={
          data.mdx.frontmatter.excerpt
            ? data.mdx.frontmatter.excerpt
            : data.mdx.excerpt
        }
        body={data.mdx.body}
      ></PostLayout>
    </div>
  );
};

export default PostTemplate;
