#!/bin/bash

# Use bun instead of npx tsx for faster execution
builtin cd "$CLAUDE_PROJECT_DIR/.claude/hooks" 2>/dev/null || exit 0
cat | bun run skill-activation-prompt.ts 2>/dev/null || exit 0