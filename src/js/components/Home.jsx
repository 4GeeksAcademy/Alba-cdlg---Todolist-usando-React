import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  return (
    <div className="container">
      <h1>Todos</h1>
      <ul>
		<input type="text" placeholder="What needs to be done?"/>
        <li>Wash my hands</li>
        <li>Make the bed</li>
        <li>Eat</li>
        <li>Walk the dog</li>
      </ul>
    </div>
  );
};

export default Home;
