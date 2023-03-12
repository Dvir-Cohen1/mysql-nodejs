import React, { useEffect, useState } from "react";

export async function getServerSideProps(context) {
  const res = await fetch("http://localhost:4001/weapon");
  const weapons = await res.json();

  return {
    props: { weapons }, // will be passed to the page component as props
  };
}

const index = (props) => {
  return (
    <div>
      {props.weapons.map((w) => (
        <p>{w.name}</p>
      ))}
    </div>
  );
};

export default index;
