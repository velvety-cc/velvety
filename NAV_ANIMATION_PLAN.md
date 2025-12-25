# Mobile Navigation Bar Smooth Height Animation Plan

## Current Implementation

- **Behavior**: Nav bar shrinks/expands in height based on scroll position
- **Expanded state**: `pb-4 pt-16` (padding top: 64px, bottom: 16px)
- **Shrunk state**: `pb-2 pt-12` with `-translate-y-8` (padding top: 48px, bottom: 8px, translate: -32px)
- **Transition**: `duration-300 ease-in-out`
- **Thresholds**: Shrinks when `scrollY > 12px`, expands when `scrollY < 4px`

## Current Issues

1. **Binary State**: Abrupt change between two discrete states causes jerky animation
2. **Basic Easing**: `ease-in-out` may not feel as smooth as other easing functions
3. **Dead Zone**: The threshold gap (12px → 4px) prevents smooth transitions
4. **No Performance Optimization**: Scroll event listener fires on every scroll without throttling
5. **Fixed Values**: Transition happens instantly at thresholds instead of progressively

## Proposed Improvements

### 1. Progressive Height Calculation

- Replace binary `isShrunk` boolean with a numeric scroll progress value (0.0 to 1.0)
- Calculate intermediate padding/transform values based on scroll position
- Smooth interpolation between expanded and shrunk states
- Range: `scrollY 0px` → fully expanded, `scrollY 12px+` → fully shrunk

### 2. Improved Easing & Timing

- Use smoother easing function: `cubic-bezier(0.4, 0, 0.2, 1)` or `ease-out`
- Keep or slightly adjust duration (300ms works well, could try 250-350ms)
- Ensure consistent easing curve for all animated properties

### 3. Smooth Interpolation Formula

- Calculate scroll progress: `Math.min(Math.max((scrollY - 0) / 12, 0), 1)`
- Interpolate padding values:
  - `paddingTop`: `64px - (progress * 16px)` → ranges from 64px to 48px
  - `paddingBottom`: `16px - (progress * 8px)` → ranges from 16px to 8px
- Interpolate transform: `translateY(-8px * progress)` → ranges from 0px to -32px

### 4. Performance Optimizations

- Use `requestAnimationFrame` for scroll handler to sync with browser paint
- Add minimum scroll delta threshold (e.g., 1px) to reduce unnecessary updates
- Use `passive: true` for scroll event listener for better scroll performance

### 5. Implementation Strategy

#### State Management

```typescript
const [scrollY, setScrollY] = useState(0);
// Calculate scroll progress (0.0 to 1.0)
const scrollProgress = Math.min(Math.max((scrollY - 0) / 12, 0), 1);
```

#### Scroll Handler Logic

- Use `requestAnimationFrame` to throttle updates
- Track scroll position continuously (not just thresholds)
- Calculate scroll progress for smooth interpolation
- Update state only when scroll position changes meaningfully

#### Animation Values (calculated from scrollProgress)

- `paddingTop`: `64px - (scrollProgress * 16px)`
- `paddingBottom`: `16px - (scrollProgress * 8px)`
- `translateY`: `-8px * scrollProgress` (convert to rem: `-2rem * scrollProgress`)
- `shadow`: Apply shadow-sm when `scrollProgress > 0.5`

#### CSS Classes Approach

**Option A**: Use inline styles with CSS custom properties

```tsx
style={{
  paddingTop: `${64 - scrollProgress * 16}px`,
  paddingBottom: `${16 - scrollProgress * 8}px`,
  transform: `translateY(${-8 * scrollProgress}px)`,
}}
```

**Option B**: Use Tailwind arbitrary values with calculated classes

- More complex but keeps Tailwind classes
- Would need to calculate class names dynamically

**Recommendation**: Option A (inline styles) for smoother progressive animation

### 6. Edge Cases to Handle

- Initial page load (scrollY = 0, fully expanded)
- Smooth transition when scrolling back to top
- Fast scrolling (animation should remain smooth)
- No jitter on small scroll movements (handled by smooth interpolation)
- Menu open state (keep current behavior, animation still applies)

### 7. Testing Considerations

- Test on different mobile devices (iOS Safari, Chrome Android)
- Test with different scroll speeds (slow, medium, fast)
- Verify smoothness at threshold boundaries (0-12px range)
- Ensure no layout shift or content jump during animation
- Check performance on lower-end devices

## Implementation Steps

1. **Update scroll handler** in `header.tsx`
   - Replace threshold-based logic with continuous scroll tracking
   - Implement `requestAnimationFrame` throttling
   - Calculate scroll progress value

2. **Refactor state management**
   - Keep `scrollY` state (or calculate directly)
   - Remove `isShrunk` boolean
   - Calculate `scrollProgress` derived value

3. **Update CSS/styling**
   - Replace conditional classes with inline styles
   - Use calculated padding and transform values
   - Update transition timing and easing
   - Ensure all properties animate smoothly together

4. **Optimize performance**
   - Implement `requestAnimationFrame` in scroll handler
   - Add scroll delta threshold to prevent micro-updates
   - Ensure proper cleanup of event listeners

5. **Test and refine**
   - Test on mobile devices
   - Adjust scroll progress calculation if needed
   - Fine-tune easing and duration
   - Verify smoothness throughout scroll range

## Expected Outcome

A smooth, progressively animating mobile navigation bar that:

- Gradually shrinks in height as user scrolls down (0-12px scroll range)
- Gradually expands in height as user scrolls back up
- Uses smooth easing curve for natural-feeling animation
- Performs well on mobile devices without jitter
- Maintains current visual design (height change, not hide/show)
