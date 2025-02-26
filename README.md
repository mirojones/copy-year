# Copyright year
## Instructions
### Installation
Download [copyyear-min.js](https://github.com/mirojones/copyright-year/blob/main/copyyear-min.js) and add it to your project.

In your HTML file, add the following `script` tag before your other `script` tags:

```html
<script src="copyyear-min.js"></script>
```

### Use
#### `set`
Sets the `textContent` of an element to the copyright year.

```javascript
copyrightYear.set(startYear, element);
```

- `startYear`: (number) The year you made the content you are copyrighting. For example: 2023
- `element`: (HTMLElement) The HTML element where you want the copyright year to appear. Retrieve with methods such as [`getElementById()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById) or [`querySelector()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector). For example: document.querySelector(".my-element")

#### `return`
Returns the copyright year as a string.

```javascript
copyrightYear.return(startYear);
```

- `startYear`: (number) The year you made the content you are copyrighting. For example: 2023
