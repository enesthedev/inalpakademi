---
description: Analyze application changes and update documentation
---

# Change Analysis Workflow

This workflow analyzes changes made to the application, detects potential issues, and updates relevant documentation.

## 1. Detect Changes

// turbo
1. Run `git status` or `git diff --stat` to identify which files have changed.
2. Categorize the changed files:
   - **UI/Component:** `.tsx` files under `components/`, `app/[locale]/`
   - **Style:** `globals.css`, Tailwind configuration
   - **Infrastructure:** `proxy.ts`, `lib/`, `next.config.ts`, `package.json`
   - **i18n:** `lib/i18n/`, `messages/`
   - **Form/Validation:** `validations/`, Formik/Zod schemas

## 2. Analyze Changes

// turbo
3. Read the changed files and understand what kinds of changes were made.
4. For each change, perform the following checks:
   - **Import Check:** Are there unused imports?
   - **Type Safety:** Are there TypeScript errors?
   - **Style Consistency:** Are Tailwind classes compatible with globals.css?
   - **Coding Standards:** Are the standards in `AGENT.md` being followed?
   - **Dependencies:** Was a new package added? Was `package.json` updated?

## 3. Report Potential Issues

5. For each detected issue, prepare the following information:
   - **File:** Which file?
   - **Line:** Which line (if possible)?
   - **Issue:** What type of issue?
   - **Suggestion:** How can it be fixed?

6. Report issues to the user and offer fix suggestions.

## 4. Update Documentation

7. Update relevant files based on the changes made:

   **For UI/Component Changes:**
   - `.agent/spec/design.md` → Add new components or UI changes.

   **For Infrastructure/Stack Changes:**
   - `.agent/wiki/architecture.md` → New packages, structural changes.

   **For Task Completion:**
   - `.agent/spec/tasks.md` → Mark completed tasks with `[x]`.

   **For New Task/Issue Detection:**
   - `.agent/spec/tasks.md` → Add new task or known issue.

   **For All Important Changes:**
   - `AGENT.md` → Add new row to "Update History" table.
   - `AGENT.md` → Update "Last Updated" date to today.

## 5. Summary Report

8. Present a brief summary to the user:
   - Number of changed files
   - Number of detected issues
   - Number of updated documents

## Update Format

`AGENT.md` > Update History:

```markdown
| Date | Change |
|------|--------|
| YYYY-MM-DD | Brief description of the change made |
```

## Example Usage

User: `/analyze-changes` or "Analyze changes"
Agent: Runs this workflow.
