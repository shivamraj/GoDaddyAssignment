# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules. To run this project locally make Sure you have node version v20.18.3. 


## Run Local server

Use below command to run localhost

```js
   yarn dev
```

### Run unit test

Use below command to run unit test case

```js
   yarn test
```

### API Data Fetching

We are using React Query for fetching data from the API. It provides:

- Caching
- Automatic background updates
- Optimistic updates
- Synchronization with minimal boilerplate

#Note

We are not invalidating the cache here, so the data will remain cached for all requests.

### Further Possible Improvements:

- Infinite Scroll or Pagination: Improves performance when displaying a large number of repositories.
- Search & Filter Options: Allows users to quickly find specific repositories.

### Notes

- I used MUI to quickly design a responsive layout, but it doesn’t mean we necessarily need it for this project.
- React Query is an additional package that is useful for handling API-related tasks, but it is not required.
