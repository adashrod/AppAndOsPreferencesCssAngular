/* global document, window */

const CSS_NO_IF_SUPPORT = /body\s*\{\s*\}/;

/**
 * Checks if the browser supports CSS if().
 * @returns true if the browser supports CSS if(), false otherwise
 */
export function supportsCssIf(): boolean {
    if (typeof document === "undefined") {
        return false;
    }

    const style = document.createElement("style");
    style.textContent = `
        body {
            background: if(media(screen): red);
        }
    `;
    document.head.append(style);
    /*
     * In browsers that support if(), cssText will include the background property with the if statement,
     * else, it will just be `body { }`.
     */
    const matchesEmpty = CSS_NO_IF_SUPPORT.test(style.sheet?.cssRules[0].cssText ?? "");
    style.remove();
    return !matchesEmpty;
}

/**
 * Checks if the browser supports container style queries w/ custom properties, e.g.
 * `@container style(--my-prop: 1) { ... }`. Some browsers support container style queries, but not with custom properties,
 * @returns true if the browser supports container style queries w/ custom properties, false otherwise
 */
export function supportsContainerStyleQueriesWithCustomProperties(): boolean {
    if (typeof window === "undefined" || typeof document === "undefined") {
        return false;
    }

    const container = document.createElement("div");
    const child = document.createElement("div");

    container.style.containerType = "inline-size";
    container.style.setProperty("--my-prop", "1");

    child.textContent = "test";

    const style = document.createElement("style");
    style.textContent = `
        @container style(--my-prop: 1) {
            div { color: rgb(1, 2, 3); }
        }
    `;

    document.body.append(container, style);
    container.appendChild(child);

    const applied = window.getComputedStyle(child).color === "rgb(1, 2, 3)";

    style.remove();
    container.remove();

    return applied;
}
