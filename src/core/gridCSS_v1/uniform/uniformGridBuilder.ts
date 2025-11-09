import { GridErrorShape } from '../core/gridErrorShape';
import { AddNodeFunction } from "../core/nodeManagerTypes";
import { NodeID } from "../ids/kinds";

// type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
// type GridNodeAbsoluteCoordinates = { gridRowStart: number; gridRowEnd: number; gridColumnStart: number; gridColumnEnd: number; }
// type PartialBps<T> = Partial<Record<Breakpoint, T>>
// type AddNodeFunction = (node: PartialBps<GridNodeAbsoluteCoordinates>) => NodeId;

type UniformGridBuilderProps = {
  addNode: AddNodeFunction;
  partitionsX: number; // tiles across (columns)
  partitionsY: number; // tiles down (rows)
  lengthX: number;     // region width  in virtual columns
  lengthY: number;     // region height in virtual rows
  offsetX?: number;    // optional region offset from left (default 1)
  offsetY?: number;    // optional region offset from top  (default 1)
  // optional: 'tile' to keep xs tiled too; default stacks vertically at xs
  xsMode?: 'stack-vertical' | 'tile';
};

/**
 * Uniform tiler:
 *  - md/sm/lg/xl: tiles partitionsX × partitionsY inside [offset, offset+length)
 *  - xs: stacks vertically full-width by default (xsMode='stack-vertical')
 * Coordinates use half-open [start, end) with 1-based grid lines.
 */
export const uniformGridBuilder = ({
  addNode,
  partitionsX,
  partitionsY,
  lengthX,
  lengthY,
  offsetX = 1,
  offsetY = 1,
  xsMode = 'stack-vertical',
}: UniformGridBuilderProps): { nodes: NodeID[]; errors: GridErrorShape[] } => {
  const errors: GridErrorShape[] = [];
  const nodes: NodeID[] = [];

  // ---- Guards (diagnostics, no throws) ----
  if (partitionsX <= 0 || partitionsY <= 0) {
    errors.push({
      code: "PARTITIONS_INVALID",
      message: `partitions must be >= 1 (got ${partitionsX}×${partitionsY})`,
      details: { partitionsX, partitionsY }
    });
    return { nodes, errors };
  }
  if (lengthX <= 0 || lengthY <= 0) {
    errors.push({
      code: "LENGTHS_INVALID",
      message: `lengths must be >= 1 (got ${lengthX}×${lengthY})`,
      details: { lengthX, lengthY }
    });
    return { nodes, errors };
  }
  if (offsetX < 1 || offsetY < 1) {
    errors.push({
      code: "OFFSETS_INVALID",
      message: `offsets must be >= 1 (got ${offsetX}, ${offsetY})`,
      details: { offsetX, offsetY }
    });
    return { nodes, errors };
  }

  // Region bounds
  const regionStartX = offsetX;
  const regionStartY = offsetY;
  const regionEndX = offsetX + lengthX; // end-exclusive
  const regionEndY = offsetY + lengthY; // end-exclusive

  // Base cell spans (eat remainder on last col/row)
  const spanX = Math.max(1, Math.floor(lengthX / partitionsX));
  const spanY = Math.max(1, Math.floor(lengthY / partitionsY));

  // xs vertical stacking cursor (full-width slices)
  let xsCursorY = regionStartY;

  for (let j = 1; j <= partitionsY; j++) {
    const startY = regionStartY + (j - 1) * spanY;
    if (startY >= regionEndY) break;

    const endY = j < partitionsY
      ? Math.min(startY + spanY, regionEndY)
      : regionEndY;
    if (endY <= startY) {
      errors.push({
        code: "ZERO_SPAN_ROW",
        message: `zero/negative Y span at row ${j}`,
        details: { j, startY, endY }
      });
      continue;
    }

    for (let i = 1; i <= partitionsX; i++) {
      const startX = regionStartX + (i - 1) * spanX;
      if (startX >= regionEndX) break;

      const endX = i < partitionsX
        ? Math.min(startX + spanX, regionEndX)
        : regionEndX;
      if (endX <= startX) {
        errors.push({
          code: "ZERO_SPAN_COL",
          message: `zero/negative X span at col ${i}`,
          details: { i, startX, endX }
        });
        continue;
      }

      // Tile for md (and we’ll mirror to sm/lg/xl)
      const mdCoords = {
        gridColumnStart: startX + 0, // keep explicit numbers for clarity
        gridColumnEnd:   endX,
        gridRowStart:    startY,
        gridRowEnd:      endY,
      };

      // xs coords:
      // - default: stack vertically full-width using the tile's height
      // - optional 'tile': same as md (no rearrangement)
      let xsCoords = mdCoords;
      if (xsMode === 'stack-vertical') {
        const sliceHeight = endY - startY;
        xsCoords = {
          gridColumnStart: regionStartX,
          gridColumnEnd:   regionEndX,
          gridRowStart:    xsCursorY,
          gridRowEnd:      xsCursorY + sliceHeight,
        };
        xsCursorY += sliceHeight;
        // guard against overflow (best-effort; renderer may still clip/scroll by policy)
        if (xsCoords.gridRowEnd > regionEndY) {
          errors.push({
            code: "XS_STACK_OVERFLOW",
            message: `xs stacking overflowed region (j=${j}, i=${i})`,
            details: { xsRowEnd: xsCoords.gridRowEnd, regionEndY }
          });
        }
      }

      const id = addNode({
        xs: xsCoords,
        sm: mdCoords, // copy-through
        md: mdCoords,
        lg: mdCoords,
        xl: mdCoords,
      });

      nodes.push(id);
    }
  }

  return { nodes, errors };
};
