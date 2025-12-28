// debug/logDiagnostics.ts
import type { DiagnosticEntry } from '../gridErrorShape';

export function logDiagnostics(diags: readonly DiagnosticEntry[]) {
  if (!diags || diags.length === 0) {
    console.log(
      "%c✔ No grid diagnostics. Layout looks clean.",
      "color: #4CAF50; font-weight: bold;"
    );
    return;
  }

  console.groupCollapsed(
    `%c⚠ Grid Diagnostics (${diags.length})`,
    "color: #FF9800; font-weight: bold; font-size: 14px;"
  );

  diags.forEach((d, i) => {
    const { severity, origin, issue } = d;
    const { code, message, elementId, details } = issue;

    const color =
      severity === "error"
        ? "color: #F44336"
        : severity === "warning"
        ? "color: #FFC107"
        : "color: #2196F3"; // new: info = blue

    const title = `%c${i + 1}. [${severity.toUpperCase()}] ${code}`;
    const style = `${color}; font-weight: bold;`;

    console.groupCollapsed(title, style);

    console.log(
      "%cMessage:%c",
      "color:#2196F3;font-weight:bold",
      "color:inherit",
      message
    );

    if (elementId) {
      console.log(
        "%cElement:%c " + elementId,
        "color:#9C27B0;font-weight:bold",
        "color:inherit"
      );
    }

    if (origin  ) {
      console.log(
        "%cOrigin:%c " + origin,
        "color:#673AB7;font-weight:bold",
        "color:inherit"
      );
    }

    if (details !== undefined) {
      console.log(
        "%cDetails:%c",
        "color:#795548;font-weight:bold",
        "color:inherit",
        details
      );
    }

    console.groupEnd();
  });

  console.groupEnd();
}
