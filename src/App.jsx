import * as React from "react";
// IMPORT ANY NEEDED COMPONENTS HERE

import Chip from "./components/Chip/Chip";

import { createDataSet } from "./data/dataset";
import "./App.css";
import Header from "./components/Header/Header";
import { Instructions } from "./components/Instructions/Instructions";

import {NutritionalLabel} from "./components/NutritionalLabel/NutritionalLabel"

// don't move this!
export const appInfo = {
  title: `Fast Food Feud 🍔!`,
  tagline: `Folks' Favorite Friendly Fuel Finder For Food Facts`,
  description: `Finding healthy food is hard. Sometimes we just settle for what's available. That doesn't mean we shouldn't know what's going into our bodies! Fast Food Feud is here to arm the public with all the nutritional facts needed to make informed decisions about fast food consumption.`,
  dataSource: `All data pulled from the MenuStat.org interactive online database.`,
  instructions: {
    start: `Start by clicking on a food category on the left and a fast food joint from the list above. Afterwards, you'll be able to choose from a list of menu items and see their nutritional content.`,
    onlyCategory: `Now select a fast food restaurant from the list above!`,
    onlyRestaurant: `Now select a category from the list on the left!`,
    noSelectedItem: `Almost there! Choose a menu item and you'll have the fast food facts right at your fingertips!`,
    allSelected: `Great choice! Amazing what a little knowledge can do!`,
  },
};
// or this!
const { data, categories, restaurants } = createDataSet();

export function App() {
  const [selectedCategory, setSelectedCategory] = React.useState(null);
  const selectCategory = (category) => {
    setSelectedCategory(category);
  };
  const [selectedRestaurant, setSelectedRestaurant] = React.useState(null);
  const [selectedMenu, setSelectedMenu] = React.useState(null)
  
  const selectMenu = (menu) => {
    setSelectedMenu(menu)
    console.log(currentMenuItems)
  }

  const selectRestaurant = (restaurant) => {
    setSelectedRestaurant(restaurant);
  };

  var currentMenuItems = [];

  if (selectedCategory != null && selectedRestaurant != null) {
    
    currentMenuItems = data.filter(
      (menuItem) =>
        menuItem.food_category === selectedCategory &&
        menuItem.restaurant === selectedRestaurant
    );
  } else {
    console.log("JO");
  }

  console.log(selectedMenu);

  //Anitya.gupta@codepath.org

  function tabclicked()
  {
// appInfo.instructions
    if (selectedCategory==null && selectedRestaurant == null)
    {
     return  <Instructions instructions={appInfo.instructions.start} />
    }

    if (selectedCategory != null && selectedRestaurant==null)
    {
       return  <Instructions instructions={appInfo.instructions.onlyCategory} />
    }
    if (selectedCategory == null && selectedRestaurant != null)
    {
      return  <Instructions instructions={appInfo.instructions.onlyRestaurant} />
    }
      if (selectedCategory != null && selectedRestaurant != null && selectedMenu==null)
    {
      return  <Instructions instructions={appInfo.instructions.noSelectedItem} />
    }

    if (selectedCategory != null && selectedRestaurant != null && selectedMenu != null)
    {
      return  <Instructions instructions={appInfo.instructions.allSelected} />
    }

    


  }

  return (
    <main className="App">
      {/* CATEGORIES COLUMN */}

      <div className="CategoriesColumn col">
        <div className="categories options">
          <h2 className="title">Categories</h2>
          {/* YOUR CODE HERE */}
          {categories.map((category, idx) => (
            <Chip
              key={category}
              label={category}
              isActive={selectedCategory === category}
              onClick={() => selectCategory(category)}
                onClose={()=>selectCategory(null)}
            />
          ))}
        </div>
      </div>

      {/* MAIN COLUMN */}
      <div className="container">
        {/* HEADER GOES HERE */}
        <Header
          title={appInfo.title}
          tagline={appInfo.tagline}
          description={appInfo.description}
        />

        {/* RESTAURANTS ROW */}
        <div className="RestaurantsRow">
          <h2 className="title">Restaurants</h2>
          <div className="restaurants options">
            {/* YOUR CODE HERE */}
            {restaurants.map((restaurant, idx) => (
              <Chip
                key={restaurant}
                label={restaurant}
                isActive={selectedRestaurant === restaurant}
                onClick={() => selectRestaurant(restaurant)}
                onClose={()=>selectRestaurant(null)}
              ></Chip>
            ))}
          </div>
        </div>

        {/* INSTRUCTIONS GO HERE */}

       {tabclicked()}

        {/* MENU DISPLAY */}
        <div className="MenuDisplay display">
          <div className="MenuItemButtons menu-items">
            <h2 className="title">Menu Items</h2>
            {/* YOUR CODE HERE */}
            {currentMenuItems.map((menu) => 
              <Chip
                key={menu.item_name}
                label={menu.item_name}
                
                isActive={selectedMenu === menu}
                onClick={() => selectMenu(menu)
                }
                  onClose={()=>selectMenu(null)}
      ></Chip>
            )}
          </div>

          {/* NUTRITION FACTS */}
          <div className="NutritionFacts nutrition-facts">
            {/* YOUR CODE HERE */}
            {selectedMenu == null ? "" :
              <NutritionalLabel item={selectedMenu} />
            }

          </div>
        </div>

        <div className="data-sources">
          <p>{appInfo.dataSource}</p>
        </div>
      </div>
    </main>
  );
}

export default App;
