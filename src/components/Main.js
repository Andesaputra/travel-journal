import React from "react";

export default function Main({ item, key }) {
  console.log("item", item);
  console.log("key", key);
  return (
    <main>
      <section className="main--section">
        <img
          src={require(`../img/${item.img}`)}
          alt={item.img}
          className="main--img"
        />
        <aside className="main--aside">
          <img className="" />
          <p>
            <span className="text--location">{item.country}</span>
            <a className="text--maps">View on Google Maps</a>
          </p>
          <h1 className="text--title">{item.location}</h1>
          <p className="text--date">{item.date}</p>
          <p className="text--description">{item.description}</p>
        </aside>
      </section>
    </main>
  );
}
