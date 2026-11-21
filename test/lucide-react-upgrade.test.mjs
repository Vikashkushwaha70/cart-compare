import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import * as lucide from "lucide-react";

const sourceFiles = [
  "components/LocationSelector.jsx",
  "components/ProductCard.jsx",
  "components/RecentSearch.jsx",
  "components/SearchBar.jsx",
  "pages/SearchResults.jsx",
];

test("lucide-react exposes the icons added/renamed in 1.68.0", () => {
  // `mango` was added in 1.68.0.
  assert.ok(lucide.Mango, "expected the Mango icon to be exported");
  // Icons that used to end in -alert/-warning now end in -exclamation-point.
  assert.ok(
    lucide.TriangleExclamationPoint,
    "expected TriangleExclamationPoint to be exported"
  );
  assert.ok(
    lucide.SearchExclamationPoint,
    "expected SearchExclamationPoint to be exported"
  );
});

test("every lucide icon imported by the app still resolves", () => {
  for (const file of sourceFiles) {
    const source = readFileSync(new URL(`../src/${file}`, import.meta.url), "utf8");
    const match = source.match(/import\s*{([^}]*)}\s*from\s*["']lucide-react["']/);
    assert.ok(match, `expected ${file} to import from lucide-react`);

    const names = match[1]
      .split(",")
      .map((name) => name.trim())
      .filter(Boolean);

    for (const name of names) {
      assert.ok(lucide[name], `${file} imports missing icon ${name}`);
    }
  }
});
