import { Button } from "@material-ui/core";
import React from "react";
import "./SearchPage.css";
import SearchResult from "./SearchResult";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p>62 stays - 26 august 2quest</p>
        <h1>stays nearby</h1>

        <Button variant="outlined">Cancelation Flexibility</Button>

        <Button variant="outlined">type of place</Button>

        <Button variant="outlined">Rooms and beds</Button>

        <Button variant="outlined">Price</Button>

        <Button variant="outlined">More fileters</Button>
      </div>

      <SearchResult
        img="https://i3.visitchile.com/img/GalleryContent/7526/6835-hotel-radisson-antofagasta.jpg"
        location="Private room center in Berlin"
        title="Stay at this spacious Edward House"
        description="1 guest - 1.5 shared bathrooms -Wifi - kitchen - Free parking - washing machine"
        star={4.73}
        price="$120 / night"
        total="$600 total"
      />

      <SearchResult
        img="https://res-4.cloudinary.com/enchanting/images/w_1600,h_700,c_fill,f_auto/et-web/2017/03/Enchanting-Travels-South-America-Tours-Argentina-Puerto-Iguaz%C3%BA-Panoramic-Iguazu-pool/hotel-panoramic-grand-argentina.jpg"
        location="Private room center in Argentina"
        title="Stay at this beuatiful hotel"
        description="1 guest - 1.5 shared bathrooms -Wifi - kitchen - Free parking - washing machine"
        star={4.93}
        price="$180 / night"
        total="$720 total"
      />
    </div>
  );
}

export default SearchPage;
