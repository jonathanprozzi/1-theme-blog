/** @jsx jsx */
import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { jsx, Layout as DefaultLayout, css, Styled } from 'theme-ui';
import { Global } from '@emotion/core';

const PostList = () => {
  const data = useStaticQuery(graphql`
    query PostListQuery {
      allMdx {
        nodes {
          fields {
            slug
          }
          frontmatter {
            title
            excerpt
          }
          excerpt
        }
      }
    }
  `);
  return (
    <section>
      <Styled.h2>Recent Posts</Styled.h2>
      {data.allMdx.nodes.map(post => (
        <React.Fragment>
          <Styled.h3>
            <Styled.a
              as={Link}
              to={post.fields.slug}
              sx={{
                textDecoration: 'none',
                transition: 'color 250ms ease-in-out',
                '&:hover': {
                  color: 'secondary',
                },
              }}
            >
              {post.frontmatter.title}
            </Styled.a>
          </Styled.h3>
        </React.Fragment>
      ))}
    </section>
  );
};

export default PostList;
