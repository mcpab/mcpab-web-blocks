
export type DiagnosticSeverity = 'error' | 'warning' | 'info';
export type DiagnosticOrigin = 'resolver';

// Brand marker – only used by the type system
declare const errorCodeBrand: unique symbol;
type ErrorCodeBrand = { readonly [errorCodeBrand]: true };

export type ErrorCode = string & ErrorCodeBrand;

export const HIERARCHY_ERROR_CODE = {
  // --- Core grid / geometry issues ----------------------------
 
  MISSING_PARENT: 'MISSING_PARENT' as ErrorCode,
  INVALID_PARENT: 'INVALID_PARENT' as ErrorCode,
  INVALID_HIERARCHY: 'INVALID_HIERARCHY' as ErrorCode,
  MISSING_ROOT_ATTACHMENT: 'MISSING_ROOT_ATTACHMENT' as ErrorCode,
  D3_STRATIFY_ERROR: 'D3_STRATIFY_ERROR' as ErrorCode,
  NULL_NODE: 'NULL_NODE' as ErrorCode,
  INVALID_CYCLE: 'INVALID_CYCLE' as ErrorCode,
} as const;


export type HierarchyIssue = {
  code: ErrorCode;
  message: string;
  details?: unknown;
};
