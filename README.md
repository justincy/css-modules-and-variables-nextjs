# CSS Modules and CSS Variables with Next.js

[Next.js](https://nextjs.org/) recently announced [built-in support for CSS modules](https://nextjs.org/blog/next-9-2) and global stylesheets. CSS modules provide us with an alternative to component specific styling offered by CSS-in-JS libraries. CSS-in-JS libraries also offer us tools constraint-based component design, but we can get the same functionality with a feature built-in to modern browsers: CSS variables. Here we explore how these new features of Next.js render CSS-in-JS libraries unnecessary.

## CSS Modules

[CSS Modules](https://github.com/css-modules/css-modules) provide us with scoped CSS. This allows us to declare simple class names without worrying about collisions. We can even use the same class name in multiple files.

Let's use the example from the Next.js announcement. We want to have an error class for our `Button` component. First, we create `components/Button.module.css`:

```css
/*
You do not need to worry about .error {} colliding with any other `.css` or
`.module.css` files!
*/
.error {
  color: white;
  background-color: red;
}
```

Then we import that file into `components/Button.js`:

```jsx
import styles from "./Button.module.css";

export function Button() {
  return (
    <button
      type="button"
      // Note how the "error" class is accessed as a property on the imported
      // `styles` object.
      className={styles.error}
    >
      Destroy
    </button>
  );
}
```

The `.error` styles declared in `Button.module.css` will now be applied to the `Button` component. Of course, you likely don't want all your buttons to have the error styles. This repo shows an example of how you can support different style variants. Take a look at the [Button component file](components/Button.js) and it's [CSS file](components/Button.module.css).

## CSS Variables

[CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) (more properly known as **custom properties**) allows us to define values which can be reused anywhere in the document that is in scope ([browser support is fantastic](https://caniuse.com/#feat=css-variables) if you don't need to support IE). If we want a value to be available everywhere, we can use the recently announced [support for global CSS in Next.js](https://nextjs.org/blog/next-9-2#built-in-css-support-for-global-stylesheets) and declare it on the `html` element:

```css
html {
  --error-color: red;
  --light-text-color: white;
}
```

To have that file loaded onto to the page we just need to import it into a [custom `_app.js` file](https://nextjs.org/docs/advanced-features/custom-app):

```js
import "../styles.css";

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
```

Then we can reference those values anywhere we want to use them, such as on our button. We can modify our `Button` CSS module like this:

```css
.error {
  color: var(--light-text-color);
  background-color: var(--error-color);
}
```

That's fun but not necessary for just one component. It's more useful when scaled up to an entire website. Using CSS variables we can define all values used by our theme: fonts, spacing, colors, radii, shadows, and more. Then we can reference them from our components instead of duplicating values all over our CSS.

You can see a larger set of variables in the [`styles.css`](src/styles.css) file of this repo.

## Conclusion

We don't need Theme UI, Emotion, or Styled Components. Everything we need is now baked into Next.js and the browser.

This solution was inspired by [an article](https://medium.com/trabe/a-simple-react-theme-component-using-css-variables-e20434ae97c) on the [Trabe blog](https://medium.com/trabe).
