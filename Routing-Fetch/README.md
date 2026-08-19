````markdown
# React Routing & API Fetching

This project demonstrates the basics of React Routing, Nested Routing, Dynamic Routes, React Hooks, and API fetching using Axios.

## Concepts Learned

### 1. BrowserRouter
`BrowserRouter` is used to enable routing in a React application.

```jsx
<BrowserRouter>
  <Routes>
    {/* Routes */}
  </Routes>
</BrowserRouter>
````

### 2. Routes & Route

`Routes` contains multiple `Route` components. Each `Route` maps a URL path to a React component.

```jsx
<Route path="/products" element={<Products />} />
```

### 3. Nested Routing

A route can contain child routes.

```jsx
<Route path="/user" element={<User />}>
  <Route path=":userId" element={<Todos />} />
</Route>
```

Example URLs:

```text
/user/1
/user/2
/user/10
```

### 4. Outlet

`Outlet` is used in the parent component to render its child route.

```jsx
<Outlet />
```

Example:

```text
User
 └── Outlet
      └── Todos
```

### 5. Dynamic Routing

Dynamic routes use `:` to represent a variable part of the URL.

```jsx
<Route path=":userId" element={<Todos />} />
```

For `/user/101`, `101` is the dynamic `userId`.

### 6. useParams()

`useParams()` is used to retrieve dynamic parameters from the URL.

```jsx
const { userId } = useParams();
```

For `/user/101`:

```text
userId = 101
```

### 7. useNavigate()

`useNavigate()` is used to navigate between routes programmatically.

```jsx
const navigate = useNavigate();

navigate("/products");
```

It can also be used to go back:

```jsx
navigate(-1);
```

### 8. useState()

`useState()` is used to store and update component data.

```jsx
const [todo, setTodo] = useState(null);
```

* `todo` → stores the current data
* `setTodo()` → updates the data
* `null` → initial value

### 9. useEffect()

`useEffect()` is used for side effects such as API calls.

```jsx
useEffect(() => {
  // API call
}, [userId]);
```

The effect runs when the `userId` value changes.

### 10. Axios

Axios is used to make HTTP requests to an API.

```jsx
axios.get("https://jsonplaceholder.typicode.com/todos/1");
```

The response can be handled using `.then()` and `.catch()`:

```jsx
axios.get(url)
  .then(({ data }) => {
    setTodo(data);
  })
  .catch((error) => {
    console.log(error);
  });
```

### 11. Conditional Rendering

Conditional rendering is used to display API data only when it is available.

```jsx
{todo != null && (
  <h1>{todo.title}</h1>
)}
```

### 12. Dynamic API Requests

Dynamic routing can be combined with API requests.

```jsx
const { userId } = useParams();

axios.get(
  "https://jsonplaceholder.typicode.com/todos/" + userId
);
```

Example:

```text
/user/1  →  /todos/1
/user/2  →  /todos/2
/user/10 →  /todos/10
```

### 13. API Error Handling

`catch()` is used to handle errors during API requests.

```jsx
.catch((error) => {
  console.log(error);
});
```

## Project Flow

```text
User visits /user/1
        ↓
React Router matches the route
        ↓
useParams() gets userId = 1
        ↓
Axios sends API request
        ↓
API returns Todo data
        ↓
useState() stores the data
        ↓
React displays the data
```

## Technologies Used

* React.js
* React Router DOM
* Axios
* JavaScript
* Vite
* JSONPlaceholder API

## Key Learning

Through this project, I learned how to create multiple routes, nested routes, and dynamic routes, navigate between pages, retrieve URL parameters, fetch API data using Axios, manage API data using React Hooks, and conditionally render fetched data.