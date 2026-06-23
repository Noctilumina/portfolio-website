# Four Small DevTools I Kept Wishing I Had

Built these when I got tired of context-switching between my editor, a browser, and some online converter. All four live in this site now. Tiny tools, surprisingly useful.

## Cubic Bezier Editor

Need a custom easing curve? Drag the control handles, watch a live animation preview (a box bouncing or fading), copy the cubic-bezier() value straight to CSS. Also comes with presets: ease-in-out, overshoot, elastic, stuff that usually requires hunting the web for a code snippet. Preview updates frame-by-frame.

## Regex Tester

Type a pattern, type a test string, see live match highlighting. Capture groups (named and numbered) display in a sidebar. Toggle flags (global, case-insensitive, multiline) without retyping. There's a replace preview so you can check substitutions before copy-pasting. Includes a quick token cheatsheet for syntax you always forget.

## QR Code Generator

Text or URL in, QR code out. Pick custom foreground and background colors, set error-correction level, download as SVG or PNG. Uses a solid QR library under the hood. Sits somewhere between quick debugging tool and actually useful for physical linking.

## Contrast Checker

Feed it a foreground and background color pair, get instant WCAG AA and AAA pass/fail. Live sample text shows the actual contrast. When it fails, the tool suggests a passing color by darkening or lightening one channel. Simple but catches those "looks fine on my monitor" bugs before users see them.

Small tools, meant to stay in your workflow.
