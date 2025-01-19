# Copyright year

## Instructions

### Installation

Download [copyyear-min.js](https://github.com/mirojones/copyright-year/blob/main/copyyear-min.js) and add it to your project.

In your HTML file, add the following `script` tag before your other `script` tags:

```javascript
<script src="copyyear-min.js"></script>
```

### Use
#### `set`
Sets the `textContent` of an element with specified `id` to the copyright year.

```javascript
copyrightYear.set(startYear, elementId);
```

- `startYear`: (number) The year you made the content you are copyrighting. For example: 2023
- `elementId`: (string) The unique `id` of the HTML element where you want the copyright year to appear. For example: "my-element"

#### `return`
Returns the copyright year as a string.

```javascript
copyrightYear.return(startYear);
```

- `startYear`: (number) The year you made the content you are copyrighting. For example: 2023
