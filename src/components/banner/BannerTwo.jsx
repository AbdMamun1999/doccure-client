import React from "react";
import bannerOne from "../../assets/banner/search-bg.png";

const BannerTwo = () => {
  return (
    <section
      class="section section-search"
      style={{
        background: `url(${bannerOne})  no-repeat bottom center`,
        minHeight: "530px",
        backgroundSize: "100% auto",
        position: "relative",
        backgroundBlendMode: "Darken",
        padding: "160px 0 80px 0",
      }}
    >
      <div class="container-fluid">
        <div class="banner-wrapper">
          <div
            class="banner-header text-center aos aos-init aos-animate"
            data-aos="fade-up"
          >
            <h1>Search Doctor, Make an Appointment</h1>
            <p>
              Discover the best doctors, clinic &amp; hospital the city nearest
              to you.
            </p>
          </div>

          <div class="search-box">
            <form action="search.html">
              <div
                class="form-group search-location aos aos-init aos-animate"
                data-aos="fade-up"
              >
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search Location"
                />
                <span class="form-text">Based on your Location</span>
              </div>
              <div
                class="form-group search-info aos aos-init aos-animate"
                data-aos="fade-up"
              >
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search Doctors, Clinics, Hospitals, Diseases Etc"
                />
                <span class="form-text">Ex : Dental or Sugar Check up etc</span>
              </div>
              <button
                type="submit"
                class="btn btn-primary search-btn mt-0 aos aos-init aos-animate"
                data-aos="fade-up"
              >
                <i class="fas fa-search"></i> <span>Search</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerTwo;
