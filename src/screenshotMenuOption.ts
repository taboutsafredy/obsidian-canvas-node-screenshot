import { Menu } from "obsidian";
import { CanvasNode } from "./@types/types";
import screenshotNodeElement from "./canvasNodeScreenshot";

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