import React from "react"
import { Heading, Box, Grid } from "@chakra-ui/core"
import { Link } from "gatsby"
import GatsbyLogo from "../assets/svg/gatsby.inline.svg"
import Slider from "react-slick";
export default () => (
 <header id="masthead" className="site-header">
   <div className="container-fluid">
			<div className="row align-items-center">
				<div className="col">
				<div className="row align-items-center">
					<div className="site-branding">
							<p className="site-title"><a href="https://www.russforster.co.uk/" rel="home">Russ Forster</a></p>
							<p className="site-description">Front end web engineer</p>
					</div>
						<nav id="site-navigation" className="main-navigation col float-right">
						<div className="menu-header-menu-container"><ul id="primary-menu" className="menu"><li id="menu-item-288" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-288"><a href="/about/">About</a></li>
<li id="menu-item-289" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-289"><a href="/blog/">Blog</a></li>
</ul></div>					
            </nav>
				</div>
				</div>
				<div className="site-contact col text-right">
						<a href="mailto:dev@russforster.co.uk">dev@russforster.co.uk</a>
				</div>
			</div>
		</div>
	</header>

)
