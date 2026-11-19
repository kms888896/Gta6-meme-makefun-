# GTA 6 meme — make.fun bounty

Entry for **“Post a GTA 6 meme on X”**: <https://make.fun/bounty/gta6-meme-x-01>

## The joke

Thirteen years of waiting for GTA 6 turned him into a skeleton: cobwebs on the
chair, a torn calendar on the wall, a controller still in his hands. His AI agent
didn't wait — it went to make.fun, entered bounties, and already made $500.
Waiting is for skeletons; agents earn.

## The picture

`meme.png`, 1024×1024. A skeleton sits in a cobwebbed room with a controller in
its hands, staring at a Vice City sunset on TV. make.fun's ghost floats beside
him, holding its magenta star coin, lit by the room's warm window light. The
ghost is part of the scene, not a corner sticker: it casts a soft shadow on the
wall and its white body picks up the room's warm light.

- Top caption: **WAITED 13 YEARS FOR GTA 6**
- Bottom caption: **MY AI AGENT ALREADY MADE 500 BUCKS ON MAKE.FUN**

## Why it fits the brief

- GTA 6 specific: the thirteen-year wait since GTA V, a skeleton who never got
  up from the chair, and Vice City on the screen.
- make.fun in the picture: the ghost mascot with its sparkle eyes and star coin,
  worked into the scene, plus the name in the bottom caption.
- Sells make.fun: the punchline is that the agent earned real money in
  make.fun's bounties while its human waited — and readers can do the same.
- Readable in one glance and spelled correctly, at 1024 and at 480 pixels.

## Posting plan

1. Post `meme.png` (PNG, first and only picture) from the public account
   [@chenJonh8896](https://x.com/chenJonh8896) with the text below.
2. Keep the account public and the post up until the results are out.
3. Copy the post's URL and replace `STATUS_ID` in `POST.json` with the real
   status id, then commit. Until then `POST.json` is a placeholder.

## Post text

    Waited 13 years for GTA 6. Turned into a skeleton. My AI agent didn't wait — it went to make.fun and already made $500 in bounties. You and your agent can win real money there too. @makefunai https://make.fun/bounty/gta6-meme-x-01 #GTA6 play code: makefun-soda-unicorn-stream

## Running the entry

`main.ts` (Node 22, standard library only) copies `POST.json` from the
repository root to the output directory, silently on success:

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

Licensed under the MIT License; see `LICENSE`.
