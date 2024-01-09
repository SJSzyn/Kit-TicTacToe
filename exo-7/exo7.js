console.log("exo-7");

console.log(jsonDatas); // array from the datas.js file 

// 1
/*
The first instruction is about managing a catalog of articles from a web page. 
The specific task is to browse through the provided articles and display them one by one in the console.

This typically involves writing JavaScript code to iterate through an array of articles and using console.log to display each article. 
Since you have a datas.js file, which might contain the articles, let's start by examining its content to find the article data structure.

I'll take a look at the datas.js file to see how the articles are 
structured and then suggest a JavaScript code snippet that you can use to display each article in the console. 
Let's proceed with that.

The datas.js file contains an array jsonDatas with objects representing different articles, 
each with properties like name, type, description, price, and quantity.

To display each article in the console, you can use a JavaScript loop, such as a forEach loop, 
to iterate over the jsonDatas array. Here's a code snippet that you can use:
*/

jsonDatas.forEach(article => {   // forEach = method | function goes through each article
    console.log("Name:", article.name);  // goes through each property
    console.log("Type:", article.type);
    console.log("Description:", article.description);
    console.log("Price:", article.price);
    console.log("Quantity:", article.quantity);
    console.log("---------------");
});

/*
This code will log the details of each article to the console. 
You can add this snippet to a script in your HTML file or in a separate JavaScript 
file that you include in your HTML.

Let me know if there's anything else you need help with regarding this task or the next one!
*/
/*

Certainly! The code snippet I provided is a simple JavaScript code that is 
used to display information about articles (like name, type, description, price, and quantity) in the console. 
Here's an explanation of each part of the code in simpler terms:

jsonDatas.forEach(article => { ... });

- jsonDatas: This is the name of the array that contains your articles. Each element in this array is an object that represents an article.
- forEach: This is a JavaScript method used to execute a function on each element in an array.
- article => { ... }: This is a function that is executed for each article in the jsonDatas array. Inside this function, article represents the current article being processed.
Inside the forEach function:

console.log("Name:", article.name);: This line of code prints the name of the article to the console. article.name accesses the name property of the current article.
The same pattern is followed for type, description, price, and quantity. Each line prints a different property of the article.
"---------------": This just prints a line of dashes after each article to separate them in the console output, making it easier to read.
So, when this code runs, it will go through each article in your jsonDatas array and print out its details one by one in the console. This is useful for checking the data you have in your articles or for debugging purposes.
*/

//2

const typeTranslations = {
    videoGame: "Jeux Vidéos",
    game: "jeux",
    car: "voiture",
    house: "maison",
    show: "spectacle",
};

jsonDatas.forEach(article => {
    console.log("Name:", article.name);
    console.log("Type (translated):", typeTranslations[article.type]);
    console.log("Description:", article.description);
    console.log("Price:", article.price);
    console.log("Quantity:", article.quantity);
    console.log("---------------");
});

/*
In this example:

typeTranslations is the name of the object.
Inside the curly braces {}, each line represents a translation.
On each line, the word before the colon : is the English type (like videoGame), and the word in quotes after the colon is the French translation (like "Jeux Vidéos").
You can add as many type translations as needed, following the same pattern. To use this object to translate a type, you would access the corresponding property. For example, typeTranslations.videoGame would give you "Jeux Vidéos".

Let me know if you need further assistance with this, or if there's anything else you'd like to do with this object!
*/

/*
In this code snippet, typeTranslations[article.type] is used to get the French translation of the article's type. It looks up the type of the current article in the typeTranslations object and retrieves the corresponding French translation.

For example, if article.type is "videoGame", then typeTranslations[article.type] will be "Jeux Vidéos".

This will display the translated type of each article in the console, along with other details like name, description, price, and quantity.
*/

//3
/*
Define the Translation Object: Continue using the typeTranslations object as defined previously.

Add a New Key to Each Article Object: Loop through the jsonDatas array and add a new key to each article object for the translated type. This can be done without modifying the data.js file, as JavaScript allows you to modify objects in memory.

Repeat the Display Step: After adding the new key, use a loop to display the articles with their translated types.
*/
// Add a new key for the translated type
jsonDatas.forEach(article => {
    article.translatedType = typeTranslations[article.type] || article.type;
});

// Repeat the display step to verify the translated type
jsonDatas.forEach(article => {
    console.log("Name:", article.name);
    console.log("Type (original):", article.type);
    console.log("Type (translated):", article.translatedType);
    console.log("Description:", article.description);
    console.log("Price:", article.price);
    console.log("Quantity:", article.quantity);
    console.log("---------------");
});

/*
In this code:

The first forEach loop adds a translatedType key to each article object. If the type has a translation in typeTranslations, it uses it; otherwise, it keeps the original type.
The second forEach loop is similar to the one we used before but now includes the display of the translatedType.
This approach temporarily extends each article object with a new key (translatedType) for the duration of the script execution, without permanently altering the original data.js file.
*/

// 4
/*
To create an HTML page that lists the articles from your data (in this case, the jsonDatas array from your datas.js file), you will need to write HTML to structure the page and JavaScript to dynamically insert the article data into the HTML. Here's a simple way to do this:

Create the Basic HTML Structure: You'll need a container in your HTML where the articles will be listed.

Include the Data and JavaScript: Include your datas.js file and a script to process and display the articles.

Here's an example of what your HTML file (index.html) might look like:
*/
/*
       // The JavaScript to display the articles goes here

        // Get the container where articles will be displayed
        const articlesContainer = document.getElementById('articles');

        // Loop through each article and add it to the container
        jsonDatas.forEach(article => {
            // Create a new div element for this article
            const articleDiv = document.createElement('div');
            articleDiv.innerHTML = `
                <h2>${article.name}</h2>
                <p>Type: ${article.type}</p>
                <p>Description: ${article.description}</p>
                <p>Price: ${article.price}</p>
                <p>Quantity: ${article.quantity}</p>
            `;

            // Append the new div to the container
            articlesContainer.appendChild(articleDiv);
        });
*/
        /*
        In this example:

- The <div id="articles"></div> is the container where the articles will be displayed.
- The <script src="datas.js"></script> tag includes your data file.
- The second <script> tag contains JavaScript to process the articles. It loops through each article in jsonDatas, creates a new div element for each article, and appends it to the container.
This will create a simple web page that lists all the articles from your data file. You can customize the HTML and CSS further to style the page according to your preferences.
*/

//5

/*
To create a text field and a button on your HTML page, and then display articles of the type entered in the text field when the button is clicked, you'll need to modify your HTML and JavaScript code. Here's how you can do it:

Add the Text Field and Button to the HTML:

Create a text input field where users can enter the article type.
Add a button that users will click to trigger the search.
Modify the JavaScript:

Write a function that gets triggered when the button is clicked.
This function should filter the articles by the type entered in the text field and then display the matching articles.
Here's the modified HTML and JavaScript code:

*/

 // JavaScript to display the articles and handle search
/*
        // Function to display articles
        function displayArticles(articles) {
            const articlesContainer = document.getElementById('articles');
            articlesContainer.innerHTML = ''; // Clear current articles

            articles.forEach(article => {
                const articleDiv = document.createElement('div');
                articleDiv.innerHTML = `
                    <h2>${article.name}</h2>
                    <p>Type: ${article.type}</p>
                    <p>Description: ${article.description}</p>
                    <p>Price: ${article.price}</p>
                    <p>Quantity: ${article.quantity}</p>
                `;
                articlesContainer.appendChild(articleDiv);
            });
        }

        // Initially display all articles
        displayArticles(jsonDatas);

        // Function to handle search
        document.getElementById('searchButton').addEventListener('click', function() {
            const enteredType = document.getElementById('typeInput').value;
            const filteredArticles = jsonDatas.filter(article => article.type === enteredType);
            displayArticles(filteredArticles);
        });
*/
        /*
In this updated version:

The text input field (<input type="text" id="typeInput">) allows users to enter an article type.
The button (<button id="searchButton">Search</button>) triggers the search when clicked.
The displayArticles function is used to display articles in the #articles container. It's called initially to display all articles and then with filtered results on a button click.
The addEventListener for the button sets up a click event listener that filters jsonDatas based on the entered type and then calls displayArticles with the filtered list.
This setup will allow users to enter an article type, click the search button, and see only the articles of that type.
*/

// 6 

/*
To add a checkbox that allows users to choose whether to display out-of-stock articles or not, you need to modify the HTML to include the checkbox and update the JavaScript to handle the checkbox state when displaying articles. Here's how you can do it:

Add the Checkbox to the HTML:

Place a checkbox with a label indicating its purpose.
Modify the JavaScript:

Update the article display function to check the state of the checkbox.
Filter the articles based on whether they are in stock or not, depending on the checkbox state.
Here's the updated HTML and JavaScript code:
 */

 // JavaScript to display the articles and handle search and checkbox
/*
        // Function to display articles
        function displayArticles(articles) {
            const articlesContainer = document.getElementById('articles');
            articlesContainer.innerHTML = ''; // Clear current articles

            articles.forEach(article => {
                // Check if we should display out-of-stock articles
                const includeOutOfStock = document.getElementById('stockCheckbox').checked;
                if (!includeOutOfStock && article.quantity === 0) {
                    return; // Skip this article if it's out of stock and we're not including those
                }

                const articleDiv = document.createElement('div');
                articleDiv.innerHTML = `
                    <h2>${article.name}</h2>
                    <p>Type: ${article.type}</p>
                    <p>Description: ${article.description}</p>
                    <p>Price: ${article.price}</p>
                    <p>Quantity: ${article.quantity}</p>
                `;
                articlesContainer.appendChild(articleDiv);
            });
        }

        // Initially display all articles
        displayArticles(jsonDatas);

        // Function to handle search
        document.getElementById('searchButton').addEventListener('click', function() {
            const enteredType = document.getElementById('typeInput').value;
            const filteredArticles = jsonDatas.filter(article => article.type === enteredType);
            displayArticles(filteredArticles);
        });
*/
        /*
        In this updated version:

The checkbox (<input type="checkbox" id="stockCheckbox">) allows users to select whether to include out-of-stock articles.
The displayArticles function now checks the state of the stockCheckbox. If the checkbox is not checked, articles with a quantity of 0 (out-of-stock) are not displayed.
With this setup, users can use the checkbox to toggle the display of out-of-stock articles according to their preference.
*/

// 7

/**
 To create the functionality for sorting articles by name or price, and to allow users to choose between ascending (ASC) or descending (DESC) order, you'll need to add some interface elements for these options and update the JavaScript to handle the sorting. Here's how you can do it:

Add Sorting Options to the HTML:

Include dropdowns or radio buttons for choosing the sorting criterion (name or price) and the sorting order (ASC or DESC).
Modify the JavaScript:

Write a sorting function that sorts the articles based on the selected criteria and order.
Update the article display function to use the sorted list of articles.
Here's the updated HTML and JavaScript code:
 */
        // JavaScript to display and sort the articles
/*
        // Function to sort articles
        function sortArticles(articles) {
            const criteria = document.getElementById('sortCriteria').value;
            const order = document.getElementById('sortOrder').value;

            return articles.sort((a, b) => {
                let comparison = 0;
                if (criteria === 'name') {
                    comparison = a.name.localeCompare(b.name);
                } else if (criteria === 'price') {
                    comparison = a.price - b.price;
                }

                return (order === 'DESC') ? comparison * -1 : comparison;
            });
        }

        // Function to display articles
        function displayArticles(articles) {
            const sortedArticles = sortArticles(articles);
            const articlesContainer = document.getElementById('articles');
            articlesContainer.innerHTML = ''; // Clear current articles

            sortedArticles.forEach(article => {
                // Check if we should display out-of-stock articles
                const includeOutOfStock = document.getElementById('stockCheckbox').checked;
                if (!includeOutOfStock && article.quantity === 0) {
                    return; // Skip this article if it's out of stock and we're not including those
                }

                const articleDiv = document.createElement('div');
                articleDiv.innerHTML = `
                    <h2>${article.name}</h2>
                    <p>Type: ${article.type}</p>
                    <p>Description: ${article.description}</p>
                    <p>Price: ${article.price}</p>
                    <p>Quantity: ${article.quantity}</p>
                `;
                articlesContainer.appendChild(articleDiv);
            });
        }

        // Initially display all articles
        displayArticles(jsonDatas);

        // Function to handle search and sorting
        document.getElementById('searchButton').addEventListener('click', function() {
            const enteredType = document.getElementById('typeInput').value;
            const filteredArticles = jsonDatas.filter(article => article.type === enteredType);
            displayArticles(filteredArticles);
        });

        // Update display when sort options change
        document.getElementById('sortCriteria').addEventListener('change', function() {
            displayArticles(jsonDatas);
        });

        document.getElementById('sortOrder').addEventListener('change', function() {
            displayArticles(jsonDatas);
        });
*/
        /*
        In this updated version:

Two dropdowns are added: one (#sortCriteria) for choosing the sorting criterion (name or price) and another (#sortOrder) for selecting the sorting order (ascending or descending).
The sortArticles function sorts the articles based on the selected criteria and order.
The displayArticles function now sorts the articles before displaying them.
Event listeners for the change event on both dropdowns call displayArticles again to update the display when sorting options change.
With these changes, users can select how they want the articles to be sorted, and the article list will update accordingly.
*/

// 8 

/*
To add a simple form to your HTML page that allows users to add an article to the list, you will need to:

Add the Form to the HTML: Create a form with input fields for each property of an article (like name, type, description, price, quantity).
Modify the JavaScript: Write a function to handle the form submission, which should add the new article to your articles array and update the display.
Here's how you can update your HTML and JavaScript:
*/

   // JavaScript to handle form submission, sorting, and displaying articles

        // Function to handle adding a new article
        document.getElementById('addArticleForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the form from refreshing the page

            // Create a new article object from form inputs
            const newArticle = {
                name: document.getElementById('newName').value,
                type: document.getElementById('newType').value,
                description: document.getElementById('newDescription').value,
                price: parseFloat(document.getElementById('newPrice').value),
                quantity: parseInt(document.getElementById('newQuantity').value, 10)
            };

            // Add the new article to the jsonDatas array
            jsonDatas.push(newArticle);

            // Clear the form
            this.reset();

            // Update the display
            displayArticles(jsonDatas);
        });

                // JavaScript to display and sort the articles

        // Function to sort articles
        function sortArticles(articles) {
            const criteria = document.getElementById('sortCriteria').value;
            const order = document.getElementById('sortOrder').value;

            return articles.sort((a, b) => {
                let comparison = 0;
                if (criteria === 'name') {
                    comparison = a.name.localeCompare(b.name);
                } else if (criteria === 'price') {
                    comparison = a.price - b.price;
                }

                return (order === 'DESC') ? comparison * -1 : comparison;
            });
        }

        // Function to display articles
        function displayArticles(articles) {
            const sortedArticles = sortArticles(articles);
            const articlesContainer = document.getElementById('articles');
            articlesContainer.innerHTML = ''; // Clear current articles

            sortedArticles.forEach(article => {
                // Check if we should display out-of-stock articles
                const includeOutOfStock = document.getElementById('stockCheckbox').checked;
                if (!includeOutOfStock && article.quantity === 0) {
                    return; // Skip this article if it's out of stock and we're not including those
                }

                const articleDiv = document.createElement('div');
                articleDiv.innerHTML = `
                    <h2>${article.name}</h2>
                    <p>Type: ${article.type}</p>
                    <p>Description: ${article.description}</p>
                    <p>Price: ${article.price}</p>
                    <p>Quantity: ${article.quantity}</p>
                `;
                articlesContainer.appendChild(articleDiv);
            });
        }

        // Initially display all articles
        displayArticles(jsonDatas);

        // Function to handle search and sorting
        document.getElementById('searchButton').addEventListener('click', function() {
            const enteredType = document.getElementById('typeInput').value;
            const filteredArticles = jsonDatas.filter(article => article.type === enteredType);
            displayArticles(filteredArticles);
        });

        // Update display when sort options change
        document.getElementById('sortCriteria').addEventListener('change', function() {
            displayArticles(jsonDatas);
        });

        document.getElementById('sortOrder').addEventListener('change', function() {
            displayArticles(jsonDatas);
        });
/*
        In this update:

        A new form (#addArticleForm) is added with input fields for each property of an article and a submit button.
        The JavaScript now includes an event listener for the form's submit event. When the form is submitted:
        It creates a new article object from the values entered in the form.
        It adds this new article to the jsonDatas array.
        It resets the form to clear the input fields.
        It updates the display to include the newly added article.
        With this setup, users can add new articles to the list using the form, and the displayed list of articles will update to include the new additions.
        */

// 9

/*

To rework the data structure in your data.js file to match the structure described in datas2.js, you'll need to adjust the existing structure so that it groups articles by type and includes a contact field for each article. The new structure will have categories, each with a type key and an items key. The items key will contain all the objects of that category.

Here's an outline of the steps to achieve this:

Review Current Structure: Understand the current structure of your data in data.js.

Design New Structure: Create a new structure where each category has a type and an items array.

Transform Data: Write a script to transform the current data structure into the new one.

Add Contact Information: Add a contact field to each article.

Assuming the current structure in data.js is an array of articles where each 
*/

// Create an object to hold the grouped articles by type
let groupedByType = {};

// Iterate over each article in the original array
jsonDatas.forEach(article => {
    // If the type isn't already a key in the groupedByType object, add it
    if (!groupedByType[article.type]) {
        groupedByType[article.type] = [];
    }


    // Add the article to the appropriate type, including a structured contact field
    groupedByType[article.type].push({
        ...article, 
        contact: {
            name: "lastName",
            phone: "Contact Phone",
            address: "address"
        }
    });
});

// Convert the grouped object into the new array structure
let newJsonDatas = Object.keys(groupedByType).map(type => {
    return {
        type: type,
        items: groupedByType[type]
    };
});

// newJsonDatas now contains the restructured data
console.log(newJsonDatas);

/*
In this script:

typeGroups is an object used to group articles by their type.
Each article is added to the appropriate type group, and a contact field is added.
The for...in loop then creates the final array newJsonDatas with the desired structure.
After this transformation, newJsonDatas will have the structure you described, with each type as a category containing an array of its items. You can then replace the old jsonDatas array in data.js with this new structure.

Please adjust the contact information as needed, as I've added a placeholder there. Also, make sure this new structure aligns with the rest of your code, particularly where you're accessing the data.
 */

// 10 

/*
function displayArticles(articles) {
    const articlesContainer = document.getElementById('articles');
    articlesContainer.innerHTML = ''; // Clear current articles

    articles.forEach(article => {
        const articleDiv = document.createElement('div');
        articleDiv.innerHTML = `
            <h2>${article.name}</h2>
            <p>Type: ${article.type}</p>
            <p>Description: ${article.description}</p>
            <p>Price: ${article.price}</p>
            <p>Quantity: ${article.quantity}</p>
            <p>Contact: ${article.contact.name}, ${article.contact.phone}, ${article.contact.email}</p>
        `;
        articlesContainer.appendChild(articleDiv);
    });
}
*/

/*
// Function to display articles
function displayArticles(categoryData) {
    const articlesContainer = document.getElementById('articles');
    articlesContainer.innerHTML = ''; // Clear current articles

    categoryData.forEach(category => {
        category.items.forEach(article => {
            const articleDiv = document.createElement('div');
            articleDiv.innerHTML = `
                <h2>${article.name}</h2>
                <p>Type: ${category.type}</p>
                <p>Description: ${article.description}</p>
                <p>Price: ${article.price}</p>
                <p>Quantity: ${article.quantity}</p>
                <p>Contact: ${article.contact.name}, ${article.contact.phone}, ${article.contact.email}</p>
            `;
            articlesContainer.appendChild(articleDiv);
        });
    });
}

// Initially display all articles
displayArticles(newJsonDatas); // Assuming newJsonDatas is your new data structure
*/

/*
document.getElementById('addArticleForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Create a new article object from form inputs
    const newArticle = {
        name: document.getElementById('newName').value,
        // other fields...
        contact: {
            name: "New Contact Name", // Update with actual input fields if needed
            phone: "New Contact Phone",
            email: "New Contact Email"
        }
    };

    // Find the type in newJsonDatas or create a new type if it doesn't exist
    const articleType = document.getElementById('newType').value;
    let typeCategory = newJsonDatas.find(category => category.type === articleType);
    if (!typeCategory) {
        typeCategory = { type: articleType, items: [] };
        newJsonDatas.push(typeCategory);
    }

    // Add the new article to the type category
    typeCategory.items.push(newArticle);

    // Clear the form and update the display
    this.reset();
    displayArticles(newJsonDatas);
});
*/

/*
3. Searching and Sorting
For searching and sorting, you will need to adjust these functions to handle the nested structure. For example, if you're implementing a search feature, make sure it searches within each items array of every type. Similarly, sorting should sort the articles within each type based on the selected criteria.

Due to the complexity and specificity of these functions, I'll need more details about how you want them to work to provide accurate code snippets.

These changes ensure that your page's functionalities align with the new data structure. If you have specific requirements for searching or sorting, or if there are other functionalities that need modification, please provide more details for further assistance.
*/