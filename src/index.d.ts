declare module 'detect-element-overflow' {
    export interface OverflowProperty {
        collidedTop: boolean,
        collidedBottom: boolean,
        collidedLeft: boolean,
        collidedRight: boolean,
        overflowTop: number,
        overflowBottom: number,
        overflowLeft: number,
        overflowRight: number
    }

    export function detectElementOverflow(element: HTMLElement, container: HTMLElement): OverflowProperty;
}