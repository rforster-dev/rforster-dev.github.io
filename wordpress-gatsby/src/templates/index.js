import React from "react"
import { graphql, Link, navigate } from "gatsby"
import ReactPaginate from "react-paginate"

import { Stack, Box, Heading, Text, Grid, Button } from "@chakra-ui/core"

import Layout from "../components/layout"
import { normalizePath } from "../utils/get-url-path"

export default ({ data, pageContext }) => (
  <Layout>
       <header className="blog-header entry-header">
        <div className="project-hero align-items-center row no-gutters">
        <div className="split-hero--white col w-50">
        <div className="project-entry" >
        <h1>Blog</h1>					<h2 className="sub-heading">Opinions, tutorials and sandboxing on all things web/IT related.</h2>
        </div>
        </div>
        <div className="split-hero--img split-hero--blog col w-50 d-none d-sm-block" >
        <img src="https://www.russforster.co.uk/wp-content/themes/russforster/img/blog-cover.jpg"/>
        </div>
        </div>
        </header>
        <div id="articles-layout" className="entry-content container-fluid mx-auto">
          <div className="row">
            <aside className="col-lg-3 col-md-4 col-sm-12">

            </aside>
          <div class="col-lg-6 col-md-8 col-sm-12">
            
        
    <Stack spacing={5}>
      {data.allWpPost.nodes.map((page) => (
        <Box key={page.link}>

            <article className="article-list-item">
                <header className="entry-header">
                  <Heading as="h3">
                    {page.title}
                  </Heading>
                  <span className="post-time">
                    (publish date)
                  </span>
                </header>
                <div className="entry-content">
                  {page.excerpt}
                 <a href={normalizePath(page.uri)} className="wp-block-button__link no-border-radius d-inline">Read article<svg class="bi bi-arrow-right-short" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M8.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L10.793 8 8.146 5.354a.5.5 0 010-.708z" clip-rule="evenodd"></path>
  <path fill-rule="evenodd" d="M4 8a.5.5 0 01.5-.5H11a.5.5 0 010 1H4.5A.5.5 0 014 8z" clip-rule="evenodd"></path>
</svg></a>
                </div>
            </article>
        </Box>
      ))}
    </Stack>
    </div>
          </div>
        </div>
    {pageContext && pageContext.totalPages > 1 && (
      <Box mt={10}>
        <ReactPaginate
          previousLabel={
            pageContext?.page !== 1 && <Button>Previous page</Button>
          }
          nextLabel={
            pageContext?.totalPages !== pageContext.page && (
              <Button>Next page</Button>
            )
          }
          onPageChange={({ selected }) => {
            const page = selected + 1
            const path = page === 1 ? `/blog/` : `/blog/${page}/`
            navigate(path)
          }}
          disableInitialCallback
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={pageContext.totalPages}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
          initialPage={pageContext.page - 1}
        />
      </Box>
    )}
  </Layout>
)

export const query = graphql`
  fragment Thumbnail on File {
    childImageSharp {
      fluid(maxWidth: 500) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }

  query HomePage($offset: Int!, $perPage: Int!) {
    allWpPost(
      limit: $perPage
      skip: $offset
      filter: { nodeType: { in: ["Post", "Page", "Alot"] } }
      sort: { fields: date, order: DESC }
    ) {
      nodes {
        uri
        title
        featuredImage {
          node {
            remoteFile {
              ...Thumbnail
            }
          }
        }
      }
    }
  }
`
