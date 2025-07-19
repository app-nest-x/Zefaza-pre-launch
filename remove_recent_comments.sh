#!/bin/bash

# macOS version: remove comments from files modified in the last 2 hours
MODIFIED_SINCE="$(date -v-2H '+%Y-%m-%d %H:%M:%S')"

# Adjusted directories — since your components/pages are in `src/`
DIRS=("src/components" "src/app" "src/pages" "src/lib")

# File extensions to target
EXTENSIONS=("*.js" "*.jsx" "*.ts" "*.tsx")

echo "🔍 Searching for files modified in the last 2 hours..."

found_any=false

for dir in "${DIRS[@]}"; do
  if [ -d "$dir" ]; then
    for ext in "${EXTENSIONS[@]}"; do
      find "$dir" -type f -name "$ext" -newermt "$MODIFIED_SINCE" | while read -r file; do
        found_any=true
        echo "🧹 Removing comments from: $file"

        # Remove single-line and multi-line comments
        sed -i.bak -E '
          s://.*$::g
          s:/\*[^*]*\*+([^/*][^*]*\*+)*/::g
        ' "$file"

        rm -f "${file}.bak"
      done
    done
  fi
done

if ! $found_any; then
  echo "⚠️ No recently modified component files found."
else
  echo "✅ Comments removed from recently modified files."
fi
