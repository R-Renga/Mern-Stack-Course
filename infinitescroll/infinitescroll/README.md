# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


1.list out products using dummy api,then add css to it
2.implement useRef to check dom activities -  <div ref={observerRef} style={{ height: "20px", margin: "20px" }} />
3.when scroll put new intersectionObserver,if any change chnage the state variable skip to 20 +
4.if skip changes again fetch
5.(`https://dummyjson.com/products?limit=20&skip=${skipAmount}`);



const observerRef = useRef(null) - Creates a reference that can hold a DOM element without causing re-renders.


<div ref={observerRef} ... /> - This invisible div at the bottom of your product list gets connected to the observerRef. Now observerRef.current points to this actual DOM element.


if (observerRef.current) { observer.observe(observerRef.current); } - Tells the IntersectionObserver to watch that specific div. When you scroll and that div enters the visible area (intersects with the viewport), it triggers the isIntersecting callback.