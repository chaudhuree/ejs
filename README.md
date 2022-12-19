
#### What is ejs & Why ejs?

- ejs stands for embedded javascript
- ejs is a templating language.
- templating language helps us to manipulate dynamic content in HTML document.
- Templating language: ejs, handlebars, pug etc.
- Ejs allows us to run plain js in HTML
- Ejs simple, light weight, fast
- Most downloaded templating language on npm
- Founded in Feb, 2011
- how to use ejs

  ```js
    // first install ejs:
    npm install ejs

    // inside the server
    app.set('view engine', 'ejs');

    // create index.ejs inside views folder
    res.render('index',{});

  ```

###  Passing data to ejs

- create and pass the data
- syntax: `<%= variable %>`

  ```js
  let pLanguages = ["c", "c++"];

  app.get("/", (req, res) => {
    res.render("index", { plNames: pLanguages });
  });

  //inside the index.ejs
   <li><%= plNames[0] %></li>
  ```

### if else in ejs

- if, else syntax:

  ```js
    <% if () { %>
        // do whatever
     <% } else { %>
        // do whatever
     <% } %>
  ```

  ```js
  <% if(plNames){ %>
  <li><%= plNames[x] %></li>
  <% }else{ %>
  <p>no data found</p>
  <% } %>
  ```

###  loop in ejs

- loop control statement
- syntax:

  ```js
    <% for () { %>
        // do whatever
     <% } %>
  ```

  ```js
  <% for(let x=0; x<plNames.length; x++){ %>
    <li><%= plNames[x] %></li>
    <% } %></plNames.length;
  >
  ```

###  layout in ejs

- create layout and use it anywhere
- To use a layout syntax : <%- include("layout/header") %>


