import { NodeID } from "../layoutIDs"
import { BoxTransformations } from "../../core/boxLayout/boxLayoutTypes";

 
// export const DefaultTransformations: <BoxId extends NodeID>() => BoxTransformations<BoxId> = () => ({
//   xs: [{ stackVertically: {} }],
//   sm: [{ stackHorizontally: {} }],
//   md: [{ stackVertically: {} }],
//   lg: [{ stackHorizontally: {} }],
//   xl: [{ stackVertically: {} }], 
// }) as const;

// const kl = { stackVertically: {} } satisfies SingleBoxMoveProps<NodeID>;

export const DefaultTransformations= {
  xs: [{ stackVertically: {} }],
  sm: [{ stackHorizontally: {} }],
  md: [{ stackHorizontally: {} }],
  lg: [{ stackHorizontally: {} }],
  xl: [{ stackHorizontally: {} }], 
} as const satisfies BoxTransformations<NodeID>;
