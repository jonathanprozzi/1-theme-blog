/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import Layout from '../components/layout';
import { MDXRenderer } from 'gatsby-plugin-mdx';

const PostLayout = ({ title, date, categories, body }) => (
  <Layout>
    <Styled.h1>{title}</Styled.h1>
    {date && <span>Written on {date} </span>}
    {categories && <span>&bull; {categories}</span>}

    <section
      css={{
        maxWidth: '800px',
      }}
    >
      <MDXRenderer>{body}</MDXRenderer>
    </section>
  </Layout>
);

export default PostLayout;
