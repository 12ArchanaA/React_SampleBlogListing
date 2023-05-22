import React, { useEffect, useState } from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import "./SearchBar.css";
const Cards = () => {
  const [cardData, setCardData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState([]);

  useEffect(() => {
    handleButton();
  }, []);

  const handleButton = () => {
    (async () => {
      let userData;
      try {
        const response = await fetch(
          "https://api.theinnerhour.com/v1/customers/resources/articles/list?page=1&limit=9"
        );
        userData = (await response.json()).data;
        setCardData(userData);
      } catch (error) {
        console.log(error);
        userData = [];
      }
      console.log(userData);
    })();
  };

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = cardData.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
    {
      cardData.filter((value) => {
        if (searchWord === "") {
          return value;
        } else if (
          value.title.toLowerCase().includes(searchWord.toLowerCase())
        ) {
          return value;
        }
      });
    }
  };

  return (
    <section>
      <div className="cards">
        <div className="heading-searchBar">
          <h3 className="heading">AI articles</h3>
          <div className="searchBar-container">
            <div className="searchInputs">
              <input
                type="text"
                placeholder="Search articles"
                value={wordEntered}
                onChange={handleFilter}
              />
            </div>
            {filteredData.length != 0 && (
              <div className="dataResult">
                {Object.values(filteredData).map((card, index) => {
                  return (
                    <a className="dataItem" href={card.short_description}>
                      <p>{card.title}</p>
                    </a>
                  );
                })}
              </div>
            )}
          </div>
        </div>
        <div className="cards_container">
          {Object.values(cardData).map((card, index) => {
            return <CardItem userData={card} key={index} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Cards;
