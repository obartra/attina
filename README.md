
# PROJECT UNMAINTAINED
# Attina 🐟

Mermaid react renderer compatible with React 15.5+ based off [React Mermaid](https://github.com/jasonbellamy/react-mermaid)

Uses [Mermaid](https://mermaidjs.github.io/mermaidAPI.html) under the hood

## Setup

Install with:

```shell
$ yarn add attina
```

## Usage

```js
<Attina
  diagram={`
    graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;`}
/>
```

Will produce the following output:

![](img/output.png)

## Demo

You can modify this example on codesandbox:

[![Edit 7jqo862n7j](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/7jqo862n7j)
