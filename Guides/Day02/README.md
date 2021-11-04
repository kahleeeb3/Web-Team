# Day 02
Please make sure to pull changes to the repo first. See `Day01` for instructions on how this is done.
## CSS and Div Classes
Goals:

1. Copy the `index.html` file and `css_files` folder from the `home` folder into your `user` folder.
2. Create a header and footer within the `main` class of the `body` section of the `index.html` file.
    ```html
    <!DOCTYPE html>
    <html>

    <!--where scripts and css are located-->
    <head>
        <!--Imports the test.css file -->
        <link rel="stylesheet" href="./css_files/test.css">

    </head>

    <!-- The Body of the Document -->

    <body>

        <!-- a div tag with class label "main" -->
        <div class="main">
            ifno about club in here
        </div>

    </body>

    </html>
    ```
    This is how you created [headers](https://www.w3schools.com/tags/tag_header.asp) and [footers](https://www.w3schools.com/tags/tag_footer.asp)
3. Assign [classes](https://www.w3schools.com/html/html_classes.asp) to the header and footer.
4. Use the `test.css` file ([How to use CSS](https://www.w3schools.com/css/)) to make the web page look similar to the [Wabash QSC Page](https://www.wabash.edu/ace/qsc).


## Div Classes
The `<div>` tag defines a division or a section in an HTML document.
```html
<div class="sidenav">
    Put Some Stuff Here
</div>
```
The `<div>` tag is used as a container for HTML elements - which is then styled with CSS or manipulated with JavaScript.
```css
.sidenav {
    height: 100%;
    width: 325px;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: rgb(197, 0, 0);
    overflow-x: hidden;
    padding-top: 20px;
}
```
The `<div>` tag is easily styled by using the class or id attribute. Any sort of content can be put inside the `<div>` tag!

I would like to see progress from everyone on this by our next meeting (Thursday 11/11/21). The goal is to have the home page completed by our next Club Meeting (11/17/21).