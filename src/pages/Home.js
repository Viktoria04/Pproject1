import React from 'react';
import CardDanger from '../components/cards/CardDanger';
import IngredientsIcon from '../assets/icons/IngredientsIcon';
import SearchBoxIcon from '../assets/icons/SearchBoxIcon';
import DoneIcon from '../assets/icons/DoneIcon';
import CardSuccess from '../components/cards/CardSuccess';

const Home = () => {
    return (
        <div className="Home">
      <CardDanger/>
      {cards.map((card, index) => {
          return (
              <CardSuccess 
                  icon={card.icon}
                  title={card.title}
                  desc={card.desc}
                  tag={card.tag}
                  key={index}
              />
          );
      })}
        </div>
    );
};

const cards = [{
    icon: <IngredientsIcon/>,
    title: "FIRST",
    desc: "Open your fridge and choose a main igredient for your dish.",
    tag: "2 minutes",
}, {
    icon: <SearchBoxIcon/>,
    title: "SECOND",
    desc: "Put your ingredient into our search box to find a perfect dish.",
    tag: "1 minutes",
}, {
    icon: <DoneIcon/>,
    title: "THEN",
    desc: "Select one of our carefully selected dishes, open up tutorial video and get crackin'!.",
    tag: "Done",
}];

export default Home;