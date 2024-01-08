
Based on the README.md file and the datas.js file you provided, I will outline what the JavaScript code might look like for each step of the project. Note that this is a high-level overview and assumes a basic setup of HTML and JavaScript.

Display Articles in Console:

```javascript
Copy code
var jsonDatas = [/*... your data ...*/];

jsonDatas.forEach(article => {
    console.log(article);
});
```

Create a Translation Object:

```javascript
Copy code
var translations = {
    car: "Voiture",
    house: "Maison",
    game: "Jeu",
    videoGame: "Jeu Vidéo",
    show: "Spectacle"
};
```

Add Translated Type to Objects:

```javascript
Copy code
jsonDatas.forEach(article => {
    article.translatedType = translations[article.type];
    console.log(article);
});
```

Create HTML Page and List Articles:
You would need to write HTML and JavaScript to dynamically create a list in the webpage.

Text Field and Button for Displaying Articles:
Add a text field and button to the HTML, then use JavaScript to filter and display the articles based on the input.

Checkbox for Out-of-Stock Articles:
Add a checkbox to the HTML. Use JavaScript to toggle the display of out-of-stock articles based on the checkbox state.

Sorting Functionality:
Implement JavaScript functions to sort the articles by name or price, either ascending or descending.

Form to Add Articles:
Include a form in your HTML and write JavaScript to handle form submissions and update the articles list.

Restructure Data in data.js:
Modify the data structure as per the new format described, ensuring that existing JavaScript functions still work correctly.

Display All Contacts:
Write JavaScript to iterate through the modified data structure and display all contacts.

Adapt Page to New Data Structure:
Update your JavaScript code to ensure the webpage functions with the newly structured data.

Additional UI/UX Improvements:
Incorporate Bootstrap 5.0:
Load Bootstrap in your HTML and apply Bootstrap classes for styling.

Display Articles and Contacts in a Table:
Use Bootstrap table classes to display your data in a more structured format.

Dynamic Table Updates:
Write JavaScript to dynamically add rows to the table as new articles are added.

Adapt Filter and Sorting to Table:
Modify the existing filter and sorting functionalities to work with the table layout.

Dropdown Filter Based on Data:
Change the text field to a dropdown, populating it dynamically with article types.

Bonus Features:
Selectable Articles:
Add checkboxes to each table row to allow selection of multiple articles.

Add to Cart Button:
Include a button to add selected articles to a cart.

Shopping Cart Functionality:
Implement a shopping cart system, updating the cart count and total price dynamically.

This overview provides a basic structure for your project. Actual implementation will require more detailed coding, especially for handling user interactions and dynamically updating the webpage.