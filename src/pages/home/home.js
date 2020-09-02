import React from "react";
import {
  Layout,
  Sidebar,
  Homebanner,
  Sellbanner
} from "../../components/import";
import classes from "./home.module.css";

const Home = () => {
  return (
    <Layout>
      <div className={classes.homeBanner}>
        <div className={classes.imageone}></div>
        <div className={classes.bannersearch}>
          <h4>
            Find anything in
            <span className={classes.country}>All Nigeria</span>
          </h4>
          <form>
            <input placeholder="Type your search here" />
            <button>Search</button>
          </form>
        </div>
        <div className={classes.imagetwo}></div>
      </div>
      <div className={classes.main_section}>
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className={classes.main_content}>
          <div className={classes.section_1}>
            <div className={classes.home_banner}>
              <Homebanner />
            </div>
            <div className={classes.sell_banner}>
              <Sellbanner />
            </div>
          </div>

          <h3>Trending Ads</h3>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
