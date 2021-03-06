# software-testing

- learning to test software

## What Software Testing is not

- It's not finding every single defect
- It's not randomly pressing buttons, hoping that something will break
- It's not somthing you do after all the programming is complete
- It's not something you postpone until users start complaining

## So What is it

- Software testing is a way of providing an estimate of the software quality to stakeholders. By testing software, you can provide a better estimate of how much risk the stakeholders will have to take on. Software testing also involves ensuring that the right software was created
- **verification** is ensuring that you're building the software right, **validation** is ensuring that you're building the right software.
- As more time and resources are spent on fixing defects or improving qua;;ity in other ways, money may be saved in the long run. Developing on a system which has fewer defects(or atleast defects you already know about), is far easier than adding features to software which fails intermittenly and seemingly randomly.
- A system with a good automated test suite will allow you to make changes with the assurance that you have not created additional defects in so doing. This is the paradox of software quality - you may end up spending less money and time for a better product by properly testing.

## Why Test Anyway

- Get an error if you break code
- Save time
- Think about possible issues and bugs
- Integrate into build workflow
- Break up complex dependencies
- Improve your code

## Types of Tests

### Unit Tests

    - Test fully isolated unit of code (e.g testing a function)

### Integration Tests

    - Test the system along with the dependencies

### Full Flow

    - End to end (E2E) Tests

## Types of tools needed when testing

### Test Runner
- Tool that executes your tests and summarizes the results e.g Mocha

### Assertion Library
- Define testing logic conditionals e.g chai

Jest can be both a test runner and assertion library
### Headless Browser
- Simulates browser interaction for e2e testing
e.g Puppeteer