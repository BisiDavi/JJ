import React from "react";
import classes from "./sidebar.module.css";
import {
  mainList,
  Vehicles,
  Property,
  MobilePhones,
  Electronics,
  HomeFurnitureAppliances,
  HealthBeauty,
  Fashion,
  SportsArts,
  SeekingWorkCV,
  Services,
  Jobs,
  BabiesKids,
  AnimalsPets,
  AgricultureFood,
  CommercialEquipmentTools,
  Repair_Construction
} from "./list";

const Sidebar = () => {
  const mySublink = [
    Vehicles,
    Property,
    MobilePhones,
    Electronics,
    HomeFurnitureAppliances,
    HealthBeauty,
    Fashion,
    SportsArts,
    SeekingWorkCV,
    Services,
    Jobs,
    BabiesKids,
    AnimalsPets,
    AgricultureFood,
    CommercialEquipmentTools,
    Repair_Construction
  ];


  const showLinks = productLinks => {
    return productLinks.map(productLink => (
      <li key={productLink}>{productLink}</li>
    ));
  };

  return (
    <div className={classes.Sidebar}>
      <ul>{showLinks(mainList)}</ul>
    </div>
  );
};

export default Sidebar;
