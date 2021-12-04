# cypress-cucumber-task

# Setup

```cd cypress-cucumber-task```

```npm install```

## To Run all tests (in CLI)
```npm run test```
## To Explore tests in Test Runner
```npm run debug```


## Additional Disclaimers (and things I'd do to make tests more scalable)
1. Make a custom cypress functions for steps such as logging in. The function could takes specific user credentials stored in fixtures (e.g. standard, locked-out etc.) so that there's less boilerplate code. 
2. I would add unique identifieers for the secondary header title so that I could avoid using contains() for less flimsy tests
