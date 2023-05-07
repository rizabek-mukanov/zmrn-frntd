## Info

Uses next + socket io client for chat app.

Airbnb eslint rules are enabled. However, i have disabled some of them, since they look useless and/or does not make sense to me.

For example these:

```
1. import/prefer-default-export - From my experience, it is better to not use default import/export at all
2. react/function-component-definition - I prefer arrow functions over function definition
3. import/no-extraneous-dependencies - rule does not understand which dependency should be dev dependency,
```

To sum up, over time devs get own list of preferred rules.

P.S. Some places are cringe, probably should have used state manager or context at least.

## Install

```
yarn
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
