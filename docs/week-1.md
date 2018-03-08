# Setup

## Creating the application

## create-react-app

#### Resources

- https://github.com/tuchk4/awesome-create-react-app
  - "awesome" things about create-react-app (dunno if they're actually awesome)
- https://medium.com/@tuchk4/why-i-love-create-react-app-e63b1be689a3
  - "Why I love create react app", kinda speaks for itself
- http://julian.io/can-we-please-use-the-create-react-app/
  - Going through the thoughts/decisions about transitioning to use create-react-app

#### Thoughts

- `npm run eject` un-hides everything but there's a lot of stuff in there that we might not be able to understand if :fire: happens
- If we do eject, it won't always be the same, so if we're unsure on how things like webpack are
  setup we could be at a disadvantage
  - E.g. Webpack versions could have changed, dependencies updated, etc
- On the flipside, if we do learn how CRA tends to structure things, it gives us a more
  solid foundation than if do a webpack config badly

#### Ejecting or not ejecting

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

### Vanilla

#### Resources

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

### Decision

Decided to go with `create-react-app` on the basis that it provided a
solid base to start from with the ability later down the line to `eject`
if needed, however this does lead to losing some of the benefits of using `create-react-app`

## Storybook

I've always found storybook incredibly useful for developin in react, so I decided to include it
within this project.

Although it recommends setting up using their own globally installed package, you can also do:

```bash
yarn add @storybook/react --dev
```

and then add the following script to package.json

`"storybook": "start-storybook -p 9001 -c .storybook"`

This tells storybook to use the config found inside .storybook, which tells it where to look for stories files.

This is found [here](../.storybook/config.js) which searches all of src for anything called stories.js
and loads those.

Imo Storybook should be included in our setup stuff, and I do wonder at this point if it's good to have some
kind of made-create-react-app which is just a makefile with setup stuff in it which includes extra tools like
this.

## Docker and all that jazz

### Docker

Docker is great(-ish), we should use that.

Using a pretty standard Dockerfile/docker-compose.yml this was pretty easy to get running inside Docker so y'know

Potentially worth wondering if you could make some kind of setup.sh in a madetech-starter-repo that runs create-react-app
inside a docker container so you don't even need to install npm locally, which would be nice because who wants to have to
install npm right?

- Looked into it quickly, can't run create-react-app if you already have a Dockerfile in your folder
-

### All that jazz

#### Makefile

Makefiles are great, and we should use them

**Commands wot we should defo have**

- `make setup` - set that sucker up, probaly just an alias for docker-compose build.
  Depends on your other stuff
- `make serve` - serve up dat sweet sweet app
- `make test` - run those tests (using watching, ty Jest)

#### Tmuxinator

For the benefit of people who have tmuxinator installed, I added a small tmuxinator file which will run both the server
and storybook in separate panes

## CI

### Circle CI

For adding CI I chose circle because it's free, so, yeah?

We also use it for other things outside of Jenkins so - seems good to me

Honestly there's alternatives, but given we use Circle for a lot of our other things this seems
like a sensible choice

Alternatives include Jenkins/Travis/Etc, alignment on what is a good default would be a Good Thing

## CD

### Heroku

In the past i've found Heroku super useful, i think the review-apps are incredibly helpful when developing
as they allow you/your team to easily review the changes without needing to run them locally

Deploying to heroku is ez pz with a create-react-app base, you don't even need a Procfile, and it works
with Yarn staight out the box

## Error reporting

Given we prefer sentry as our method of error reporting, I decided to go with that
