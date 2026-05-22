# Planning

1. Extract assets:
    - [Flag UK](../public/icons/flag_uk.svg)
    - [Flag DE](../public/icons/flag_de.svg)
    - Solar Icons:
      ```tsx
      import { Eye, EyeClosed, Settings, AltArrowLeft } from '@solar-icons/react-perf/Outline'      
      
      <Settings size={64} color='#9fcfe6' />
      ```
    - [Background](../public/backgrounds/bg.png)
2. Extract colors:
   - background.default = #FFFFFF = primary.contrast-text = white
   - grey500p8 = #919EAB14 / 8%
   - grey500p16 = #919EAB29 / 16%
   - primary.main = #000000 = black100
   - text.primary = #1C252E = grey800
   - text.secondary = #637381 = action.active = grey600
   - text.disabled = #919EAB = grey500