fetch("http://localhost:8088/food")
  .then(foods => foods.json())
  .then(parsedFoods => {
    parsedFoods.forEach(food => {
      const foodsAsHTML = foodFactory(food);
      addFoodToDom(foodAsHTML);
    });
  });

fetch(`https://world.openfoodfacts.org/api/v0/product/${foodObj.barcode}.json`)
  .then(response => response.json())
  .then(productInfo => {});

let HTMLfoodSection = `
  <section>
  <h2>${foodObject.name}</h2>
  <p>${foodObject.type}</p>
  <p>${foodObject.ethnicity}</p>
  <p>${foodObject.ingredients}</p>
  <p>Sugars: ${foodObject.sugar}</p>
  <p>Fat: ${foodObject.fat}</p>
  <p>Calories: ${foodObject.calories}</p>
  </section>
  `;
console.log("html string?", HTMLfoodSection);
return HTMLfoodSection;
