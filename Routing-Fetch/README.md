 1) npm install react-router-dom

 React Routing + API — Short Notes
1. BrowserRouter

Used to enable routing in a React application.

<BrowserRouter>
  ...
</BrowserRouter>
2. Routes and Route

Routes contains all routes, while Route defines which component should display for a URL.

<Routes>
  <Route path="/products" element={<Products />} />
</Routes>
3. Nested Routing

A route can contain another route.

<Route path="/user" element={<User />}>
  <Route path=":userId" element={<Todos />} />
</Route>

This creates:

/user
/user/1
/user/2
4. Outlet

Outlet displays the child route inside the parent component.

<Outlet />

For example:

User
  ↓
Outlet
  ↓
Todos
5. Dynamic Routing

:userId represents a dynamic value in the URL.

<Route path=":userId" element={<Todos />} />

Example:

/user/10
/user/20
6. useParams()

Used to get dynamic values from the URL.

const { userId } = useParams()

For /user/10:

userId = 10
7. useNavigate()

Used to navigate from one route to another using JavaScript.

const navigate = useNavigate()


navigate("/products")

Can also go back:

navigate(-1)
8. useState()

Used to store and update component data.

const [todo, setTodo] = useState(null)
todo → current value
setTodo() → updates value
null → initial value
9. useEffect()

Used for side effects such as API calls.

useEffect(() => {
   // API call
}, [userId])

The effect runs when userId changes.

10. Axios

Used to make HTTP/API requests.

axios.get(url)

Example:

axios.get("https://jsonplaceholder.typicode.com/todos/1")
11. API Response

The API response can be stored in state.

.then(({ data }) => {
    setTodo(data)
})

data contains the actual response from the API.

12. Conditional Rendering

Used to display data only when it is available.

{todo != null && (
    <h1>{todo.title}</h1>
)}

This prevents trying to access properties before the API data arrives.

13. Dynamic API Request

You combined routing with an API call:

const { userId } = useParams()


axios.get(
  "https://jsonplaceholder.typicode.com/todos/" + userId
)

So:

/user/1 → API → /todos/1
/user/2 → API → /todos/2
14. Error Handling

catch() handles API errors.

.catch((error) => {
    console.log(error)
})
15. Important Error Learned

You encountered:

todo is not defined

because JavaScript is case-sensitive.

❌

const [Todos, setTodo] = useState(null)
console.log(todo)

✅

const [todo, setTodo] = useState(null)
console.log(todo)
Overall Concept

You learned how to build a React application where:

URL
 ↓
React Router
 ↓
Dynamic Parameter
 ↓
useParams()
 ↓
Axios API Request
 ↓
useState()
 ↓
Display Data