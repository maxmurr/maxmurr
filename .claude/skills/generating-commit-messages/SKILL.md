---
name: generating-commit-messages
description: MANDATORY skill for ALL git commits. Use EVERY TIME before running git commit. Enforces conventional commit format with commitlint validation.
---

# Generating Commit Messages

## Process

1. Run `git diff --staged` to see changes
2. Analyze changes and determine type/scope
3. Generate commit message following format below

## Conventional Commit Format

```
<type>(<scope>): <subject>

<body>
```

### Subject Line (required)

- Format: `type(scope): description`
- Under 72 characters total
- Use imperative mood: "add" not "added"
- Lowercase, no period at end

### Types

| Type       | Use for                                 |
| ---------- | --------------------------------------- |
| `feat`     | New feature                             |
| `fix`      | Bug fix                                 |
| `refactor` | Code change (no new feature or fix)     |
| `perf`     | Performance improvement                 |
| `style`    | Formatting, whitespace (no code change) |
| `docs`     | Documentation only                      |
| `test`     | Adding/updating tests                   |
| `chore`    | Build, config, dependencies             |
| `ci`       | CI/CD changes                           |

### Scope

Use the primary affected area: `eval`, `chat`, `ui`, `search`, `api`, `db`, `ci`, `docs`, etc.

### Body (optional)

- Explain WHAT and WHY (not how)
- Wrap at 72 characters
- Separate from subject with blank line

## Examples

```
fix(eval): remove server-only imports for evalite compatibility
```

```
feat(ui): add reranker status badge with tooltip

Display current reranker health status in the search interface
to help users understand when results may be degraded.
```

```
refactor(search): extract health check into shared context

Move reranker health check logic to React context to avoid
redundant API calls across components.
```

## Forbidden

- `Generated with [Claude Code]` footer
- `Co-Authored-By: Claude` footer
- Generic messages like "update files" or "fix bug"
