Demonstration of **cssnano** [issue 620](https://github.com/cssnano/cssnano/issues/620):

>When upgrading cssnano-preset-advanced to any version beyond 4.0.0-rc.2, the optimised css file becomes significantly larger.

Steps to reproduce:

Install postcss-cli:

```
npm install postcss-cli --global
```

Run postcss with config provided in this repo:

```
postcss stylesheet.css > test.css
```

Results with different cssnano-preset-advanced versions:

- `4.0.0-rc.2`: result size: 305 bytes
- `4.0.2`: result siz: 887 bytes