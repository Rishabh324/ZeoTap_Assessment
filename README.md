# Rule Engine with AST

## Github Link [https://github.com/Rishabh324/ZeoTap_Assessment](https://github.com/Rishabh324/ZeoTap_Assessment)

## Description

This is a Rule Engine implementation using an Abstract Syntax Tree (AST) in TypeScript. The Rule Engine leverages AST to evaluate JSON data based on one or more rule strings. It can perform the following tasks:

1. Generate an AST from a given rule string.
2. Merge multiple rule strings into a single AST.
3. Evaluate JSON data by comparing it against the AST.

This approach allows for flexible and efficient rule evaluation, making it useful for scenarios where JSON data needs to be validated or processed against complex conditions.

## Node format

The Schema for node with operator is as follows:

```json
{
  "type": "operator",
  "value": string (AND or OR),
  "left": Node,
  "right": Node
}
```

The Schema for node with operand is as follows:

```json
{
  "type": "operand",
  "value": string,
  "left": null,
  "right": null
}
```

## How to run the project

1. In the `server` folder, create an `.env` file with the following content:

```text
MONGODB_URI=
ACCESS_TOKEN_SECRET=
REFRESH_TOKEN_SECRET=
FRONTEND_URL=http://localhost:5173
```

2. In the `client` folder, create an `.env` file with the following content:

```text
VITE_BACKEND_URI=http://localhost:5000
```

3. The project uses the following npm packages. Please make sure to install them.

"dependencies": {
    "@codeium/react-code-editor": "^1.0.12",
    "autoprefixer": "^10.4.20",
    "axios": "^1.7.7",
    "carousel": "^0.0.3",
    "postcss": "^8.4.47",
    "prismjs": "^1.29.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-hot-toast": "^2.4.1",
    "react-icons": "^5.3.0",
    "react-responsive": "^10.0.0",
    "react-responsive-carousel": "^3.2.23",
    "react-router-dom": "^6.27.0",
    "react18-json-view": "^0.2.8"
},

"devDependencies": {
    "@eslint/js": "^9.11.1",
    "@types/react": "^18.3.10",
    "@types/react-dom": "^18.3.0",
    "@vitejs/plugin-react": "^4.3.2",
    "eslint": "^9.11.1",
    "eslint-plugin-react-hooks": "^5.1.0-rc.0",
    "eslint-plugin-react-refresh": "^0.4.12",
    "globals": "^15.9.0",
    "tailwindcss": "^3.4.14",
    "typescript": "^5.5.3",
    "typescript-eslint": "^8.7.0",
    "vite": "^5.4.8"
}

4. In the `server` folder, run the following command:

```bash
npm install
npm run dev
```

5. In the `client` folder, run the following command:

```bash
npm install
npm run dev
```

6. Open the [http://localhost:5173](http://localhost:5173) in the browser.
