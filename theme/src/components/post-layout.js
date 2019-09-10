/** @jsx jsx */
import {
  jsx,
  Layout as DefaultLayout,
  Header,
  Footer,
  Main,
  Container,
  Styled,
} from 'theme-ui';
import Layout from '../components/layout';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Global } from '@emotion/core';

const PostLayout = ({ title, date, categories, excerpt, body }) => (
  <Layout>
    <h1>{title}</h1>
    {date && <span>Written on {date} </span>}
    {categories && <span>&bull; {categories}</span>}
    <p>{excerpt}</p>
    <MDXRenderer>{body}</MDXRenderer>
  </Layout>
);

export default PostLayout;
