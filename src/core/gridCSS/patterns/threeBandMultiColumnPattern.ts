import { PathGroup, Path } from "..//geometry/gridPathTypes";
import { ZigZagRight } from "./zigZags";
import { diagonal } from "..//geometry/geometry";
import { getOnes } from "..//geometry/geometry";
import { sumCoordinatesBPS } from "../geometry/geometry";



// type TakeFirstN<
//     T extends readonly any[],
//     N extends number,
//     Acc extends readonly any[] = []
// > =
//     Acc['length'] extends N
//     ? Acc
//     : T extends readonly [infer Head, ...infer Tail]
//     ? TakeFirstN<Tail, N, [...Acc, Head]>
//     : Acc;

// type Blocks<N extends number> = TakeFirstN<Slots, N>[number];
// type AllowedBlocks<N extends number, Extra extends NodeID = never> =
//     Blocks<N> | Extra;

// type ThreeBandMultiColumnPatternProps<N extends number> = {
//     columns: N;
//     headerHeight?: number;
//     footerHeight?: number;
//     columnHeight?: number;

// };

type ThreeBandMultiColumnPatternProps = {
    columns: number;
    headerHeight?: number;
    footerHeight?: number;
    columnHeight?: number;
};
export const ThreeBandMultiColumnPattern = ({
    columns, headerHeight = 1, footerHeight = 1, columnHeight = 1 }: ThreeBandMultiColumnPatternProps
): PathGroup | null => {


    const nCol = columns;

    let headerPath = ZigZagRight({ steps: 1, deltaX: nCol, deltaY: headerHeight });
    let originHeader = getOnes();

    let columnsPath = ZigZagRight({ steps: nCol, deltaX: 1, deltaY: columnHeight });
    let originColumns = sumCoordinatesBPS(originHeader, diagonal(0, headerHeight));


    let offset = diagonal(0, columnHeight);
    offset.xs.y = nCol * columnHeight;

    let footerPath = ZigZagRight({ steps: 1, deltaX: nCol, deltaY: footerHeight });
    let originFooter = sumCoordinatesBPS(originColumns, offset);

    let paths: Path[] = [{
        origin: originHeader,
        steps: headerPath,
    },
    {
        origin: originColumns,
        steps: columnsPath,
    },
    {
        origin: originFooter,
        steps: footerPath,
    }
    ];

    return {
        debugName: `ThreeBandMultiColumn_${nCol}Cols`,
        paths: paths,

    };
}