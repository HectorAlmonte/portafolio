---
name: Hector Almonte Portfolio
description: A golden-hour landscape poster you scroll down through, sky to forest floor to night.
colors:
  sky-top: "#fbe3c4"
  sky-mid: "#f8c49a"
  sky-low: "#f2a07c"
  sun: "#fde6b8"
  cloud: "#fffaf2"
  cloud-shade: "#a9c6e8"
  peak-lit: "#f6b08f"
  peak: "#e8866a"
  ridge: "#dc6c58"
  forest-1: "#c4544a"
  forest-2: "#9c3b3d"
  forest-3: "#6e2638"
  forest-4: "#4a1a2c"
  night: "#2c0f1e"
  cream: "#fbe9d2"
  sand: "#f6c69a"
  rust: "#9c3b36"
  ink: "#2c0f1e"
  ink-soft: "#6e3b45"
  ink-on-dark: "#fff4e6"
  ink-on-dark-soft: "#f3c9b8"
  accent: "#c4544a"
typography:
  display:
    fontFamily: "Josefin Sans, Futura, Century Gothic, sans-serif"
    fontSize: "min(calc(var(--u) * 122), fit-to-width, 9.5rem)"
    fontWeight: 700
    lineHeight: 0.92
    letterSpacing: "0.01em"
  headline:
    fontFamily: "Josefin Sans, sans-serif"
    fontSize: "clamp(2.25rem, 4.6vw, 4rem)"
    fontWeight: 700
    lineHeight: 0.95
  title:
    fontFamily: "Josefin Sans, sans-serif"
    fontSize: "1.3rem"
    fontWeight: 700
    lineHeight: 1.05
  body:
    fontFamily: "Figtree, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.6
  lede:
    fontFamily: "Figtree, system-ui, sans-serif"
    fontSize: "clamp(1.15rem, 1.9vw, 1.45rem)"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Figtree, system-ui, sans-serif"
    fontSize: "0.82rem"
    fontWeight: 600
    letterSpacing: "0.02em"
rounded:
  field: "14px"
  frame: "clamp(18px, 2.4vw, 34px)"
  pill: "999px"
spacing:
  gutter: "clamp(16px, 4vw, 48px)"
  section: "clamp(72px, 10vw, 140px)"
components:
  button-primary-dark:
    backgroundColor: "{colors.night}"
    textColor: "{colors.ink-on-dark}"
    rounded: "{rounded.pill}"
    padding: "0.7em 1.4em"
    height: "48px"
  button-primary-dark-hover:
    backgroundColor: "{colors.forest-3}"
  button-primary-light:
    backgroundColor: "{colors.ink-on-dark}"
    textColor: "{colors.night}"
    rounded: "{rounded.pill}"
    padding: "0.7em 1.4em"
    height: "48px"
  button-primary-light-hover:
    backgroundColor: "{colors.sun}"
  chip:
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0.3em 0.8em"
  input:
    backgroundColor: "#fff7ec"
    textColor: "{colors.ink}"
    rounded: "{rounded.field}"
    padding: "14px 16px"
---

# Design System: Hector Almonte Portfolio

## Overview

**Creative North Star: "The Golden Hour Trail"**

The site is a flat, layered landscape poster at sunset, in the lineage of national-park posters and Firewatch-style illustration. The first viewport is the poster itself: a rounded frame on a cream ground, the sky and sun at the back, ridges and treelines stepping forward in warmer and darker silhouettes, and the headline living between the layers so the front trees overlap it. Every layer is its own SVG and drifts at its own depth when you scroll.

Below the poster, the page keeps descending through the same scene. Each band is one layer of the landscape (cream sky, sand, rust forest, plum night) and bands meet on silhouette edges, never on hairlines. Personality lives in the art; content stays plain, direct and readable.

The visual direction was pinned by Hector's reference image. The previous dark terminal look is the anti-reference.

**Key Characteristics:**
- Flat vector silhouettes, no textures, no gradients except the sky and the sun's glow.
- Warm-to-dark progression down the page, mirroring the depth of the scene.
- Uppercase geometric display type over a friendly humanist body face.
- Pill-shaped controls; plum on light grounds, cream on dark ones.
- One authored motion moment: depth parallax in the scene.

## Colors

A sunset palette read from back to front: pale peach sky, coral ridges, rust forest, plum foreground and night.

### Primary
- **Plum Night** (#2c0f1e): primary ink on light grounds, dark buttons, the footer's night sky, focus outlines.
- **Rust Forest** (#9c3b36): ground of the timeline band; cream text sits on it at 6.25:1.

### Secondary
- **Ember Coral** (#c4544a): the accent; the sun in the mark, focus glows, caret, selection-adjacent details. Used sparingly.

### Neutral
- **Cream Sky** (#fbe9d2): page ground and the first content band.
- **Desert Sand** (#f6c69a): second band (projects, principles, impact).
- **Dusk Rose** (#6e3b45): secondary text on light grounds (7.1:1 on cream).
- **Warm Paper** (#fff4e6): text and light buttons on dark grounds.
- **Faded Rose** (#f3c9b8): secondary text on dark grounds.

### Scene layers
Sky #fbe3c4 → #f8c49a → #f2a07c, sun #fde6b8, peaks #e8866a with lit faces #f6b08f, ridge #dc6c58, forests #c4544a, #9c3b3d, #6e2638, #4a1a2c, ground #2c0f1e. Clouds are #fffaf2 with a #a9c6e8 underside.

### Named Rules
**The Descent Rule.** Bands get darker as the page goes down: cream, sand, rust, night. Never place a lighter band below a darker one.

**The Silhouette Seam Rule.** Two bands meet on a Ridge edge (hills, peaks or treeline) in the lower band's color. No horizontal rules or shadows between bands.

## Typography

**Display Font:** Josefin Sans 700 (Futura, Century Gothic fallback)
**Body Font:** Figtree (system-ui fallback)
**Code/Data Font:** JetBrains Mono, only inside the project text previews.

**Character:** A vintage geometric poster face, always uppercase, against a warm, open sans for reading.

### Hierarchy
- **Display** (700, sized to the scene unit and capped to fit the frame width, 0.92): the scene title only.
- **Headline** (700, clamp(2.25rem, 4.6vw, 4rem), 0.95, uppercase): section headings.
- **Title** (700, 1.3rem to 2.5rem, uppercase): list headings, project names, roles.
- **Lede** (400, clamp(1.15rem, 1.9vw, 1.45rem), 1.5, max 38ch): the one paragraph that introduces a section.
- **Body** (400, 17px, 1.6, max 68ch).
- **Label** (600, 0.82rem, 0.02em, tabular numerals): years, periods, kinds.

### Named Rules
**The No-Eyebrow Rule.** Headings stand alone. No kicker or label above a heading.

## Layout

Content sits in a 1240px container with a fluid gutter of clamp(16px, 4vw, 48px). Bands use generous vertical padding (about 72 to 180px), with more space below a band's content where the next Ridge edge will overlap it. Lists are full-width rows separated by 1.5px plum rules; two-column grids collapse to one column under 900px. The scene frame is near full-viewport on the home page (capped at 1100px) and a 400 to 640px band on inner pages. On narrow screens the scene widens its layer boxes to pull the peak and the sun into frame.

## Elevation & Depth

Depth comes from the landscape's layering and parallax, not from shadows. Surfaces are flat. The only shadows are a soft headline glow (0 2px 28px, plum at 45%) for legibility over the sky, the project preview screen (0 24px 48px -16px), and the shortcuts dialog.

## Shapes

Rounded and soft: the scene frame has large radii, controls are full pills, form fields use 14px corners. Silhouettes are hard-edged and pointed (conifers, peaks) in contrast to the round controls. Pieces of the scene (a cloud, the large bird) may break out of the frame onto the cream page.

## Components

### Buttons
- **Shape:** full pill (999px), minimum height 48px.
- **Dark:** Plum Night with Warm Paper text; hover goes to #6e2638.
- **Light:** Warm Paper with plum text; hover goes to the sun color.
- **Ghost:** transparent with a 1.5px border in the current text color.
- **Press:** scale(0.97) over 160ms on the strong ease-out curve. Arrow icons nudge 3px on hover (fine pointers only).

### Chips
- **Style:** transparent, 1px border in the rule color, 0.8rem semibold text, full pill.

### Inputs / Fields
- **Style:** #fff7ec field, 1.5px plum border at 28%, 14px radius.
- **Focus:** border goes to Plum Night with a 4px coral glow.
- **Error:** border in #9c3b3d with an inline message below the fields.

### Navigation
- Lives inside the scene frame. Mark and name left; links, ES/EN segmented toggle and a dark CV pill right. The active link carries a 2px underline that also draws in on hover. Under 860px the links collapse into a full-screen plum sheet with large uppercase links, opened by a round plum button.

### Scene (signature)
Layered SVG landscape with build-time generated treelines (fixed seeds). Each layer has a `data-depth`; scrolling moves it down by depth × scroll, and a fine pointer adds a small horizontal drift eased toward the target. Birds glide on a slow linear loop, clouds sway. With reduced motion, the scene is still and only fades in.

### Ridge
The seam between bands: an SVG edge (hills, peaks or treeline) drawn in the next band's color and pulled up over the previous band.

## Do's and Don'ts

- **Do** keep the headline between layers so the trees can overlap it.
- **Do** use the strong ease-out curve (cubic-bezier(0.23, 1, 0.32, 1)) for UI motion and keep it under 300ms.
- **Do** gate hover effects behind `(hover: hover) and (pointer: fine)`.
- **Don't** add cards, panels or shadows to hold content; use rows and rules.
- **Don't** use monospace or terminal styling as decoration.
- **Don't** add gradients beyond the sky and the sun's glow.
- **Don't** animate keyboard-opened UI (the shortcuts dialog opens instantly).
