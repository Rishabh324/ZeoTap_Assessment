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

2. In the `client` folder, create an `.env` file with the following content:

```text
VITE_BACKEND_URI=http://localhost:5000
```

3. In the `server` folder, run the following command:

```bash
npm install
npm run dev
```

4. In the `client` folder, run the following command:

```bash
npm install
npm run dev
```

5. Open the [http://localhost:5173](http://localhost:5173) in the browser.
