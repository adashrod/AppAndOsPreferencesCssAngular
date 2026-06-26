export const TS_ADD_PREFERENCE_CLASS_TO_BODY = `
// fired when user selects preference in application UI
// reducedMotionPreference: "animate" | "reduce" | "system"
function setReducedMotionPreference(reducedMotionPreference: string): void {
    // whether "system" effectively means "animate" or "reduce" is determined in CSS, not in code
    this.document.body.classList.remove(
        "animate",
        "reduce",
        "system",
    );
    document.body.classList.add(reducedMotionPreference);
}`;

export const CSS_USAGE = `
/* Since tokens are defined centrally in the wiring section, components only need to use them. */

.animated-component {
    animation-name: slider;
    /* Use tokens and get whatever values they currently have; components
     * don't need to know about settings that determine behavior */
    animation-duration: var(--anim-duration-long);
    animation-iteration-count: var(--anim-iteration-count-infinite);
}`;
