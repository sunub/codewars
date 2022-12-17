# Recording What I learn

---

## RegExp

```javascript
const regexp = /[_-]\w/g;

str.replace(regexp, (match) => {
  return match.charAt(1).toUpperCase();
});
```

### Character classes

> `\w` : Search matches words in [A-Za-z0-9_] range. And returns the first word.
> `.` : Only `.` means any word in string.

### Assertion

> `$` : Search the words of forward the `$`.
> `^` : Search the words of behind the `^`.
