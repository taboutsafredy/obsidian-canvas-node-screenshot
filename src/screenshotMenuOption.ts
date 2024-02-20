import { Menu } from "obsidian";
import { CanvasNode } from "./@types/types";
import screenshotNodeElement from "./canvasNodeScreenshot";

/**
 * Add "Capture node screenshot" option on the current node menu.
 * @param {Menu} menu - Where we will add option.
 * @param {CanvasNode} node - Current node.
 */
export default async function onScreenshotOption (menu: Menu, node: CanvasNode) {

    menu.addSeparator();

    menu.addItem((targetNode) => {
        targetNode
            .setTitle("Capture node screenshot")
            .setIcon("scissors-square-dashed-bottom")
            .onClick( async () => {
               await screenshotNodeElement(node);
            });
    });

}