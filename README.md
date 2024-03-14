### A blog made with React (CRA)

  
[How to run the code](#how-to-run-the-code) <br>
[Todos](#todos)



<strong>Initial idea</strong>💡 <br>
Up until this point I have been comfortable making GET requests with fetch API, and I wanted to practice POST, DELETE and PUT methods as well in order to make a CRUD app.

<strong> What the code does </strong> <br>
A simple blog CRUD website (created with create-react-app) to improve my react with; using useState and useEffect hooks; API fetch calls and so forth. You can cread, read, update and delete blogs. There is also a search bar to search blogs by their title.

# How to run the code
```
1- clone the repository.

2- Install modules with <b>npm install

3- Activate json server. => npx json-server --watch api/blogs.json --port 8000(or any other available port)

4- npm start

```

# Updates

Added debouncing to search box, and fixed an issue that arose with a newer version of JSON server. I now redirect the user to the main page after a blog is created. Also added an infinite scrolling. Each time the user reaches to the bottom of the screen, a new fetch call is made; 10 blog posts at a time. As a side effect, I introduce a useSingleFetch hook in order to fetch one desired blog, since useFetch was creating issues when the user tried to fecth a single blog. Introduced useInitialFetch in order to grab the maximum number of pages to be able to make calls in a reverse order while doing the infinite scrolling. I populated to blogs.json to make it easier to demonstrate the infinite scrolling.

# Todos

<s>-Add pagination (or infinite scrolling?) maybe </s>

# Known issue(s)
The search bar will only result already fetched blogs. If, for instance the user tries to search for a blog that is not yet currently rendered by scrolling down, there will be no results. Might have to work around this by fetching all blogs for searches?