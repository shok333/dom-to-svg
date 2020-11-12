import { isElement, isTextNode } from './dom.js'
import { handleElement } from './element.js'
import { handleTextNode } from './text.js'
import { StackingLayers } from './stacking.js'

export interface TraversalContext {
	readonly svgDocument: XMLDocument
	readonly currentSvgParent: SVGElement
	readonly parentStackingLayer: SVGGElement
	readonly stackingLayers: StackingLayers
	readonly labels: Map<HTMLLabelElement, string>
	readonly captureArea: DOMRectReadOnly
	readonly getUniqueId: (prefix: string) => string
}

export function walkNode(node: Node, context: TraversalContext): void {
	if (isElement(node)) {
		handleElement(node, context)
	} else if (isTextNode(node)) {
		handleTextNode(node, context)
	}
}
