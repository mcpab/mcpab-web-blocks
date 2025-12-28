

export type Matrix2x2 = [[number, number],
    [number, number]];

 export type DiagonalMatrix<d1 extends number,d2 extends number> = [[d1, 0],
    [0, d2]];

export type UnitMatrix<d extends number> = DiagonalMatrix<d, d>;

export type SymmetricMatrix<d1 extends number,d2 extends number> = [[d1, d2],
    [d2, d1]];



