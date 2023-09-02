import { Navbar, Hero, About, Projects, Footer, Feedback } from "./sections/index";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      // hero component is working as a child of navbar so on with others
      <Navbar>
        <Hero />
      </Navbar>
    ),
  },
  {
    path: "/about",
    element: (
      <Navbar>
        <About />
      </Navbar>
    ),
  },
  {
    path: "/projects",
    element: (
      <Navbar>
        <Projects />
      </Navbar>
    ),
  },
  {
    path: "/feedback",
    element: (
      <Navbar>
        <Feedback />
      </Navbar>
    ),
  },
]);

const App = () => (
  <main className="sm:mx-[5rem] lg:mx-[10rem] xl:mx-[20rem] 2xl:mx-[30rem] bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20 flex flex-col min-h-screen">
    <div className="flex-grow">
      <section>
        <RouterProvider router={router} />
      </section>
    </div>
    <footer>
      <Footer />
    </footer>
  </main>
);

export default App;
