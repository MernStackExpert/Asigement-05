
1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
<!-- ans  -->
ANS: getElementById() returns a specific element whose id matches. If the id does not match then it returns null.
getElementsByClassName() returns all elements of a specified class in the form of a live HTMLCollection.
querySelector() returns the first matching element using a CSS selector.
querySelectorAll() returns all matching elements using a CSS selector.

2. How do you **create and insert a new element into the DOM**?
<!-- ans  -->
ANS: document.createElement("tagName") is used to create a new element, then innerText, innerHTML, id, className, etc. are used to set content or attributes, and to insert the element into the DOM appendChild() or append() is used.

3. What is **Event Bubbling** and how does it work?
<!-- ans -->
Event bubbling is a type of event propagation in the DOM where an event that occurs on a child element gradually propagates upwards to its parent elements.

4. What is **Event Delegation** in JavaScript? Why is it useful?
<!-- ans -->
ANS: Event delegation is a technique where, instead of attaching separate listeners to multiple child elements, a listener is attached to a parent element to handle events occurring within it. It is efficient because it uses less memory.

5. What is the difference between **preventDefault() and stopPropagation()** methods?
<!-- ans -->
ANS: preventDefault() stops the default browser behavior of an element, whereas stopPropagation() prevents the event from bubbling or capturing up to parent/ancestor elements.
