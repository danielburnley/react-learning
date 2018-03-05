# Setup

## create-react-app

### Resources

- https://github.com/tuchk4/awesome-create-react-app
  - "awesome" things about create-react-app (dunno if they're actually awesome)
- https://medium.com/@tuchk4/why-i-love-create-react-app-e63b1be689a3
  - "Why I love create react app", kinda speaks for itself
- http://julian.io/can-we-please-use-the-create-react-app/
  - Going through the thoughts/decisions about transitioning to use create-react-app

### Thoughts

- `npm run eject` un-hides everything but there's a lot of stuff in there that we might not be able to understand if :fire: happens
- If we do eject, it won't always be the same, so if we're unsure on how things like webpack are 
  setup we could be at a disadvantage
  - E.g. Webpack versions could have changed, dependencies updated, etc
- On the flipside, if we do learn how CRA tends to structure things, it gives us a more 
  solid foundation than if do a webpack config badly

### Ejecting or not ejecting

There's pros and cons to both of these approaches, so heres some list of pros/cons of vanilla CRA
that i wrote by reading the above resources

**Pros**
- Ezpz
- Hides a lot of the crap
  - Makes it easier to pick up a project
- Tools CRA uses are pretty tried and tested
- Written by the react team
- No need to maintain dependencies like webpack config

**Cons**
- Hides too much of the crap?
- Not always compatible with other libraries
- No CSS Preprocessors
  - *yet* - https://github.com/facebook/create-react-app/issues/3815
- Hard to change configs without ejecting
- Library compatibility at the whims of CRA maintainers

## Vanilla

### Resources

- https://www.javascriptstuff.com/build-your-own-starter/#4-webpack 
  - Create react starter project
  - Doesn't include tests, hot reloading, anything more than just react

**Pros**

- More control over configuations

**Cons**

- Takes an age
- Hard to move on from the above tutorial, setting up all the required tools
  - E.g. hot reloading, tests, webpack config for tests, etc etc
- Not easily repeatable
- Have to manage dependency upgrades yourself
- Really tedious

## Decision

Decided to go with `create-react-app` on the basis that it provided a 
solid base to start from with the ability later down the line to `eject`
if needed, however this does lead to losing some of the benefits of using `create-react-app`