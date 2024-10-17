# Rule Engine with AST

## Github Link [https://github.com/kartikjoshi267/Rule-Engine-with-AST](https://github.com/kartikjoshi267/Rule-Engine-with-AST)

## Description

This is a Rule Engine with AST. It is an implementation of Rule Engine with AST in TypeScript. Rule Engine with AST is a rule engine that uses AST to evaluate JSON data against a given rule string or multiple rule strings that are combined into a single AST and then evaluates the JSON data against the AST. It can be used to perform the following tasks:

1. Create a new AST from a given rule string
2. Combine multiple rule strings into a single AST
3. Evaluate a JSON data against the AST

## Node format

The Schema for node with operator is as follows:

```json
{
  "type": "operator",
  "left": Node,
  "right": Node,
  "value": string (AND or OR)
}
```

The Schema for node with operand is as follows:

```json
{
  "type": "operand",
  "left": null,
  "right": null,
  "value": string
}
```

## How to run the project

### 1. With Docker Compose

1. Download docker desktop from [here](https://www.docker.com/products/docker-desktop/)

2. In the `server` folder, create an `.env` file with the following content:

```text
MONGODB_URI=mongodb://mongo:27017
ACCESS_TOKEN_SECRET=
REFRESH_TOKEN_SECRET=
FRONTEND_URL=http://localhost:5173
```

3. Run the following command in the root directory of the project:

```bash
docker-compose up
```

4. Open the [http://localhost:5173](http://localhost:5173) in the browser.

### 2. Local Without Docker (make sure mongo server is running on the MONGODB_URI specified in the .env file in the first step)

1. In the `server` folder, create an `.env` file with the following content:

```text
MONGODB_URI=
ACCESS_TOKEN_SECRET=
REFRESH_TOKEN_SECRET=
FRONTEND_URL=http://localhost:5173
```

2. The project uses the following npm packages. Please make sure to install them.

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

3. In the `client` folder, create an `.env` file with the following content:

```text
VITE_BACKEND_URI=http://localhost:5000
```

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