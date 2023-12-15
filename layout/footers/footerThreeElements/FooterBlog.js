import Link from "next/link";
import React from "react";
import Slider from "react-slick";
import { footerSlider } from "../../../data/slickSlider";
import NoSsr from "../../../utils/NoSsr";

const FooterBlog = () => {
  return (
    <div className="bottom-blog">
      <div className="slick-between">
        <NoSsr>
          <Slider className="footer-slider" {...footerSlider}>
            <div>
              <div className="media">
                <Link href="/pages/blog-page/left-sidebar">
                  <div className="img-overlay">
                    <img src="/assets/images/footer/1.jpg" alt="" />
                  </div>
                </Link>

                <div className="media-body">
                  <h6>
                    <Link href="/pages/blog-page/left-sidebar">Real Estate Industry</Link>
                  </h6>
                  <p className="font-roboto">
                    <Link href="/pages/blog-page/right-sidebar">An Electronic version of the real estate industry.</Link>
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="media">
                <Link href="/pages/blog-page/left-sidebar">
                  <div className="img-overlay">
                    <img src="/assets/images/footer/2.jpg" alt="" />
                  </div>
                </Link>
                <div className="media-body">
                  <h6>
                    <Link href="/pages/blog-page/left-sidebar">Entertaining Spaces</Link>
                  </h6>
                  <p className="font-roboto">
                    <Link href="/pages/blog-detail-pages/left-sidebar">This home provides wonderful entertaining spaces.</Link>
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="media">
                <Link href="/pages/blog-page/left-sidebar">
                  <div className="img-overlay">
                    <img src="/assets/images/footer/3.jpg" alt="" />
                  </div>
                </Link>
                <div className="media-body">
                  <h6>
                    <Link href="/pages/blog-page/left-sidebar">Estate Agents Work</Link>
                  </h6>
                  <p className="font-roboto">
                    <Link href="/pages/blog-detail-pages/right-sidebar">The market of buying and selling real estate.</Link>
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="media">
                <Link href="/pages/blog-page/left-sidebar">
                  <div className="img-overlay">
                    <img src="/assets/images/footer/4.jpg" alt="" />
                  </div>
                </Link>
                <div className="media-body">
                  <h6>
                    <Link href="/pages/blog-page/left-sidebar">Increase in Demand</Link>
                  </h6>
                  <p className="font-roboto">
                    <Link href="/pages/blog-detail-pages/right-sidebar">The effects of an increase demand in short run.</Link>
                  </p>
                </div>
              </div>
            </div>
          </Slider>
        </NoSsr>
      </div>
    </div>
  );
};

export default FooterBlog;
