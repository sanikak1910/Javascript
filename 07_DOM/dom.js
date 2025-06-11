
    //innerText
    //InnerText shows only the visible text content of an element,
    // excluding any hidden text (like the span in the example).
    const title = document.getElementById("title");
    // console.log(title.innerText); // "DOM Tutorial"

    //textContent
    //TextContent retrieves all text content of an element,
    // including hidden text (like the span in the example).
    // console.log(title.textContent); // "DOM Tutorial Document Object Model"
    // textContent is useful when you want to get all text,regardless of whether it's visible or hidden.

    //innerHTML
    //innerHTML retrieves the HTML content of an element,
    // including any HTML tags within it.
    // console.log(title.innerHTML); // "DOM Tutorial <span style="display:none">Document Object Model</span>"
    // innerHTML is useful when you want to get the HTML structure of an element, including any child elements.
    // However, be cautious when using innerHTML, as it can lead to security issues like XSS (Cross-Site Scripting) if not handled properly.


//Query Selectors
// document.querySelector() and document.querySelectorAll() are methods used to select elements from the DOM.
// document.querySelector() selects the first element that matches the specified CSS selector.
    const firstHeading = document.querySelector("h2");
    console.log(firstHeading); // <h1>DOM Tutorial</h1>

    
    // document.querySelectorAll() selects all elements that match the specified CSS selector.
    // It returns a NodeList, which is similar to an array but not exactly the same.
    const allHeadings = document.querySelectorAll("h2");
    console.log(allHeadings); // NodeList of all <h1> elements
    
    //To change the style of any heading, you need to mention the index
    allHeadings[0].style.color = "blue"; // Changes the color of the first <h1> to blue


    // You can also use more complex selectors, like classes or IDs.
    // const specialHeading = document.querySelector(".special-heading");
    // console.log(specialHeading); // <h1 class="special-heading">Special Heading</h1>

//Converting NodeList and HTMLCollection to Array
// NodeList is not exactly an array, but you can convert it to an array using Array.from() or the spread operator.
    const headingsArray = Array.from(allHeadings);
    // or
    // const headingsArray = [...allHeadings];
    
    // Now you can use array methods like forEach on headingsArray
    headingsArray.forEach((heading) => {
        heading.style.fontSize = "20px"; // Changes font size of all headings to 20px
    });