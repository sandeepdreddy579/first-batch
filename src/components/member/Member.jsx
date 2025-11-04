import React from "react";

function Member({ city = "no  more city", name = "no user" }) {
  // const { city = "nomore city", name = "no user" } = props;
  // let name = props.name || "guest user";
  // let city = props.city || "no city";
  console.log(name, city);
  return (
    <div className="memeberCard">
      <h1>{name}</h1>
      <h1 className="city">{city}</h1>
      {/* <h1>{values.name}</h1>
      <h2>{values.city}</h2> */}
    </div>
  );
}

export default Member;
