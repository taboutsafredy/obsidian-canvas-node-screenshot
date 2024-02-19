import { Menu, Plugin } from "obsidian";
import { CanvasNode, WorkspaceWithCanvas } from "src/@types/types";
import onScreenshotOption from "src/screenshotMenuOption";

/**
 * Plugin to enable canvas node screenshot functionality in Obsidian.
 */
export default class ScreenshotNodePlugin extends Plugin {
	async onload(): Promise<void> {
		
		const workspace: WorkspaceWithCanvas = this.app.workspace as WorkspaceWithCanvas;

		if (!workspace) {
			throw new Error("Workspace not found!");
		}

		this.registerEvent(
			workspace.on("canvas:node-menu", async (menu: Menu, node: CanvasNode) => {
				await onScreenshotOption(menu, node);
			})
		);
	}
}