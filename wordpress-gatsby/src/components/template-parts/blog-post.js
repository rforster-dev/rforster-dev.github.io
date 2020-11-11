import React from "react"

import { Link } from "gatsby"
import { Box, Heading } from "@chakra-ui/core"
import Img from "gatsby-image"
import Layout from "../../components/layout"
import { normalizePath } from "../../utils/get-url-path"

function BlogPost({ data }) {
  const { nextPage, previousPage, page } = data
  const { title, content, featuredImage } = page

  return (
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
            <div className="all-blogs mt-5">
			<a href="/blog" className="wp-block-button__link no-border-radius d-inline"><svg className="bi bi-arrow-left-short" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M7.854 4.646a.5.5 0 010 .708L5.207 8l2.647 2.646a.5.5 0 01-.708.708l-3-3a.5.5 0 010-.708l3-3a.5.5 0 01.708 0z" clip-rule="evenodd"></path>
  <path fill-rule="evenodd" d="M4.5 8a.5.5 0 01.5-.5h6.5a.5.5 0 010 1H5a.5.5 0 01-.5-.5z" clip-rule="evenodd"></path>
</svg>Back to all blogs</a>
			</div>
            </aside>
          <div class="col-lg-6 col-md-8 col-sm-12">
            
      <div dangerouslySetInnerHTML={{ __html: content }} />
    

      </div>
          </div>
        </div>
    </Layout>
    
  )
}

export default BlogPost
