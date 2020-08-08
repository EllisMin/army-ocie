import React from "react";
import Card from "../Card";
import * as i from "../../images";

import "./styles.scss";

function App() {
  return (
    <div className="app">
      <header className="App-header">
        <h1>Temporary page</h1>
        <p>Note: numbers in parenthesis refers to last NSN</p>
      </header>
      <div className="main">
        <Card
          title="MISSING: Gloves flyers sz 9 (0112)"
          imageSrc={i.img1}
          missing
          note="lost @ Ft Mccoy. Image from online"
        />

        <Card
          title="Bladder, Hydration system (9698) & Carrier Hydration System (1319)"
          imageSrc={i.img2}
        />

        <Card
          title="Frame, pack molle (6440) & Molded waist belt (1575) & Enhanced frame shoulder straps (1664) & Sustainment pouch (1563) * 2 & Rucksack large field pack (1560) & Load lifter attachment strap (1666) * 2"
          imageSrc={i.img3}
          note="Whole ruck sack; frame, belt, straps, pouches"
        />

        <Card
          title="Field pack (6358)"
          imageSrc={i.img4}
          note="aka assault pack"
        />

        <Card
          title="Jacket, extreme cold weather (0818) & Jacket cold weather (1341) & Jacket, cold weather (1726) & Jacket, cold weather (1640) & Trousers, extreme cold (1791) & Trousers, cold weather (1679)"
          imageSrc={i.img5}
          note="Jacket, extreme cold weather (0818) last NSN doesn't match with real item"
        />

        <Card
          title="Strap Assembly, Chin (0868) & Pad set (9420) & ACH (6344) & Helmet nape retention system (3851) & Cover, advanced combat (2220)"
          imageSrc={i.img6}
          note="0868 is grey and 3851 is OCP"
        />

        <Card
          title="Bag barrack CT OG 107 (3692) & Bag clothing water proof (6909)"
          imageSrc={i.img7}
        />

        <Card
          title="Canteen 1QT * 2 (0026) & Cup water canteen (6838) & Pouch, canteen (9310) * 2"
          imageSrc={i.img8}
        />

        <Card title="Stuff sack (2656) & stuff sack (2670)" imageSrc={i.img9} />

        <Card
          title="Sleeping bag (2694) & Cover, Bivy (2644)"
          imageSrc={i.img10}
        />

        <Card
          title="Insert, individual F (3147) & Pouch, individual FI (3647) & Waist pack (9395) & Bag, ammunition (9413) & Carrier, interchingtool (9405)"
          imageSrc={i.img11}
        />

        <Card
          title="Gloves Flyers 9 (9254) & Gloves, Men’s and women’s (8058)"
          imageSrc={i.img12}
        />

        <Card
          title="Gaiter neck (8509) & Gaiter neck (8509) & Hood cold weather (8790)"
          imageSrc={i.img13}
        />

        <Card
          title="Safety Glasses (4051) & Safety Glasses (4051) & Goggles (8619)"
          imageSrc={i.img14}
        />

        <Card
          title="Liner wet weather (2559) & Tarpaulin (4809)"
          imageSrc={i.img15}
        />

        <Card title="Mat sleeping (SGI) (6515)" imageSrc={i.img16} note="Mat" />

        <Card
          title="Parka Extreme cold (6289) & Trousers extreme cold (9955)"
          imageSrc={i.img17}
        />

        <Card title="Duffle bag (6541)" imageSrc={i.img18} />

        <Card
          title="Drawers, cold weather (0886) * 2 & Drawers, cold weather (1232) & Shirt, cold weather (1821)"
          imageSrc={i.img19}
        />

        <Card
          title="Pads, tactical protective, assault (7517) & Pads, knee (7518)"
          imageSrc={i.img20}
        />

        <Card
          title="Pocket, Ammunition magazine (9431) * 3 & Carrier, grenade (9419) & Pocket, ammunition magazine (9389) * 2 & Carrier, grenade (9377) * 2 & Tactical assault panel (TAP) (8924)"
          imageSrc={i.img21}
          note="9419: aka flash bag pouch"
        />

        {/* <Card title="" imageSrc={i.img} /> */}
      </div>
    </div>
  );
}

export default App;
