/** @jsx jsx */
import { jsx, Layout as DefaultLayout, Styled } from 'theme-ui';
import Layout from '../components/layout';
import { MDXRenderer } from 'gatsby-plugin-mdx';

const PostLayout = ({ title, date, categories, body }) => (
  <Layout>
    <Styled.h1>{title}</Styled.h1>
    {date && <span>Written on {date} </span>}
    {categories && <span>&bull; {categories}</span>}
    <MDXRenderer>{body}</MDXRenderer>
  </Layout>
);

export default PostLayout;
