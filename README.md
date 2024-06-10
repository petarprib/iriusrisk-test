### Create an `.env.local` with the content:
```
VITE_API_URL=https://swapi.tech/api/
```

### The commands you will need are:
```
pnpm install
pnpm dev
pnpm test
```

### Some notes and things to improve (just so you know I *do* remember :) ), in no particular order:

- Adding a full SCSS theme (haven't worked with it as the main source of design in a long while)

- Browser support

- More accessibility features

- Better design of course. Not implying this is my best by any means. I'm also much better at improving an existing one (especially with UX in mind) than creating one from scratch

- Some environment and linting fixes: SCSS imports are not recognized in the order of imports, test file has squiggly lines (but tests run)

- More and better component/logic/type modularization

- The sorting/ordering is for the results of a given page, not all the results, in order to avoid giant batch requests (both because of loading speed and rate limiting I guess?)

- It's possible I left something stranded somewhere that would otherwise logically better belong elsewhere...

- `<select>` not styled

- Probably something else...

#### That's it from me, wish I had more time and resources to show more of my "real life" capabilities, but hopefully this was convincing enough :)
