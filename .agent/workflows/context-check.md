---
description: Check project context before tasks and update after completion
---

# Project Context Check Workflow

This workflow manages the project context files under the `.agent/` directory at the start and end of each task.

## At Task Start

// turbo
1. Check for the existence of `AGENT.md` file.
2. Read `AGENT.md` and understand the general project state.
3. Review `.agent/spec/requirement.md`, `.agent/spec/design.md`, or `.agent/spec/tasks.md` as needed.

## During Task

4. Follow the "Coding Standards" in `AGENT.md` when making code changes.
5. If adding a new feature, pay attention to the definitions in `spec/requirement.md` and `spec/design.md`.

## At Task End

6. Reflect the changes made in relevant files:
   - **General Changes:** Add to "Update History" in `AGENT.md`.
   - **Database/UI Changes:** Update `.agent/spec/design.md`.
   - **Completed/New Tasks:** Update `.agent/spec/tasks.md`.
   - **Infrastructure/Stack Changes:** Update `.agent/wiki/architecture.md`.

7. Update the "Last Updated" date in `AGENT.md`.

## File Locations

- **Main Structure:** `AGENT.md`
- **Requirements:** `.agent/spec/requirement.md`
- **Design & DB:** `.agent/spec/design.md`
- **Tasks:** `.agent/spec/tasks.md`
- **Architecture:** `.agent/wiki/architecture.md`

## Update Format

`AGENT.md` > Update History:

```markdown
| Date | Change |
|------|--------|
| YYYY-MM-DD | Brief description of the change made |
```
