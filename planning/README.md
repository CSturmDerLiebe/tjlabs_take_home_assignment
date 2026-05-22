# Planning

## Theme

1. Assets:
    - [Flag UK](../public/icons/flag_uk.svg)
    - [Flag DE](../public/icons/flag_de.svg)
    - Solar Icons:
      ```tsx
      import { Eye, EyeClosed, Settings, AltArrowLeft } from '@solar-icons/react-perf/Outline'      
      
      <Settings size={64} color='#9fcfe6' />
      ```
    - [Background](../public/backgrounds/bg.png)
2. Colors:
   - background.default = #FFFFFF = primary.contrast-text = white
   - grey500p8 = #919EAB14 / 8%
   - grey500p16 = #919EAB29 / 16%
   - primary.main = #000000 = black100
   - text.primary = #1C252E = grey800
   - text.secondary = #637381 = action.active = grey600
   - text.disabled = #919EAB = grey500
3. Typography:
   - font-family:
     - heading: Barlow
     - text: Public Sans
   - font-size/line-height:
     - h4 = 24/36
     - buttonLarge = 15/26
     - inputText = 15/22
     - subtitle2 = 14/22 = body2
     - inputLabel = 12/12

## Components

- Card contains:
  1. H4
  2. paragraph: passed as a child component
  3. form: passed as a child component.
- H4:
  - color: text.primary
  - font-weight: semibold
  - text passed as a child component
- Body2:
  - color: text.secondary
  - font-weight: regular
  - text passed as a child component
---
- SignInForm contains: 
  1. EmailInput
  2. PasswordInput
  3. ButtonLarge
- EmailInput contains:
    - InputElement of type email
- InputElement
  - color: text.primary
  - font: inputText
  - font-weight: regular
  - type: passed as a parameter
  - minLength: passed as a parameter
  - defaultText: passed as a parameter
  - defaultTextColor: text.disabled
  - backgroundColor: grey500p8
  - InputLabel: passed as parameter
- InputLabel:
  - color: text.secondary
  - font: inputLabel
  - font-weight: semibold
  - text passed as a child component
- PasswordInput contains:
  - input
    - color: text.primary
    - defaultTextColor: text.disabled
    - backgroundColor: grey500p8
- ButtonLarge:
  - color: primary.contrast-text
  - backgroundColor: primary.main
  - font-weight: bold
  - text passed as a child component
---
- SlotForm contains:
  1. row of `n` SlotElements
  2. ButtonLarge
  3. SmallButton
- SlotElement:
  - color: text.primary
  - backgroundColor: grey500p8
  - text passed as a child component
- SmallButton contains:
  - color: text.primary
  - font: subtitle2
  - font-weight: semibold
  - icon: passed as parameter
  - text passed as a child component

## Layout

- SignIn Page:
  - [Desktop Screen Size](./ui/signup/desktop.png)
  - [Mobile Screen Size](./ui/signup/mobile.png)
- Generator Page:
  - [Desktop Screen Size](./ui/generator/desktop.png)
  - [Mobile Screen Size](./ui/generator/mobile.png)

## Number Generator

1. Generate `n` random but unique digits.
2. Determine their order pattern as a bitmap of length `n-1`.
3. If the pattern matches the last three patterns
   - redo step 2
   - else, add to a set of max length 3, remove the first element if `length == 3` and return