// export breakpoints for JS width hackery
export const breakpoints = [480, 800, 1280, 1440, 1600, 1920]

// keeping it simple for now, mobile first = screen and (min-width)
export const minWidthMediaQueries = breakpoints.map(
 (breakpoint) => `@media screen and (min-width: ${breakpoint}px)`
)
