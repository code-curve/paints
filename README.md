palette
=======

A flexible lightweight Javascript color theme provider.

## Usage

Palette is a breeze to use

```js
palette('reds', 10);
```

This call would return an array of 10 hex colours from the _reds_
theme. Check out [themes](#themes) for a complete list of themes.

## Themes
{{#each theme}}
  - {{@key}}
{{/each}}
