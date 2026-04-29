export const data = [
  {
    cat: "shell (unix)",
    cmds: [
      {
        cmd: "cp file.txt copy.txt",
        desc: "Copy a file",
      },
      {
        cmd: "mkdir newdirectory",
        desc: "Create directory",
      },
      {
        cmd: "cd directory",
        desc: "Changes working directory",
      },
      {
        cmd: "pwd",
        desc: "Print working directory",
      },
      {
        cmd: "touch file.txt",
        desc: "Create empty file",
      },
      { cmd: "rm file", desc: "Delete file" },
      {
        cmd: "rmdir somedir",
        desc: "Remove directory",
      },
      {
        cmd: 'echo "line" > file',
        desc: "Write line to file (overwrite)",
      },
      {
        cmd: 'echo "line" >> file',
        desc: "Append line to file",
      },
      { cmd: "cat file", desc: "Print file contents" },
      { cmd: "ls", desc: "List directory contents" },
      { cmd: "cd folder", desc: "Change directory" },
    ],
  },
  {
    cat: "shell (windows)",
    cmds: [
      {
        cmd: "cp file.txt copy.txt",
        desc: "Copy a file",
      },
      {
        cmd: "mkdir newdirectory",
        desc: "Create directory",
      },
      {
        cmd: "cd directory",
        desc: "Changes working directory",
      },
      {
        cmd: "pwd",
        desc: "Print working directory",
      },
      {
        cmd: "type nul > file.txt",
        desc: "Create empty file",
      },
      { cmd: "rm file", cmd: "del file", desc: "Delete file" },
      {
        cmd: "rmdir somedir",
        desc: "Remove directory",
      },
      {
        cmd: "echo line > file",
        desc: "Write line to file (overwrite)",
      },
      {
        cmd: "echo line >> file",
        desc: "Append line to file",
      },
      { cmd: "type file", desc: "Print file contents" },
      { cmd: "dir", desc: "List directory contents" },
      { cmd: "cd folder", desc: "Change directory" },
    ],
  },
  {
    cat: "setup & config",
    cmds: [
      { cmd: "git init", desc: "Initialize empty repository" },
      {
        cmd: "git clone <url>",
        desc: "Clone remote repository",
        example: "https://github.com/USERNAME/REPOSITORY.git",
      },
      {
        cmd: "git clone <src> <dest>",
        desc: "Clone into named directory",
        example: "git clone public_html my_website",
      },
      {
        cmd: "git clone --bare <src> <dest>",
        desc: "public_html.git is identical to public_html but doesn't have working directory",
        example: "git clone --bare ../public_html public_html.git",
      },
      {
        cmd: 'git config user.name "Name"',
        desc: "Set commit author name (local)",
      },
      {
        cmd: 'git config user.email "email"',
        desc: "Set commit author email (local)",
      },
      {
        cmd: 'git config --global user.name "Name"',
        desc: "Set name globally",
      },
      {
        cmd: 'git config --global user.email "email"',
        desc: "Set email globally",
      },
      {
        cmd: "git config --global init.defaultBranch main",
        desc: "Default branch name → main",
      },
      {
        cmd: "git config --unset --global user.email",
        desc: "Remove a config setting",
      },
      {
        cmd: "git config -l, git config --list",
        desc: "List all config values",
        example: "--global, --local, --system",
      },
      {
        cmd: "cat .git/config, type .git/config",
        desc: "Contains settings that apply only to that project",
      },
      { cmd: "git --version", desc: "Show git version" },
      { cmd: "git help --all", desc: "All subcommands" },
      { cmd: "git <cmd> --help", desc: "Help on a specific command" },
    ],
  },
  {
    cat: "staging & commits",
    cmds: [
      { cmd: "git status", desc: "Show working tree status" },
      { cmd: "git add index.html", desc: "Stage a specific file" },
      { cmd: "git add .", desc: "Stage all changes" },
      { cmd: "git add file1 file2", desc: "Stage multiple files" },
      {
        cmd: "git rm --cached file.txt",
        desc: "Unstage file (keep on disk)",
      },
      { cmd: 'git commit -m "message"', desc: "Commit with message" },
      {
        cmd: 'git commit -a -m "message"',
        desc: "Stage tracked files + commit",
      },
      {
        cmd: "git commit --amend",
        desc: "Rewrite last commit (before push)",
      },
      {
        cmd: "git commit --amend --no-edit",
        desc: "Amend without changing message",
      },
      {
        cmd: 'git commit --amend --author "Name <email>"',
        desc: "Fix author on last commit",
      },
      {
        cmd: "git checkout HEAD -- file.txt",
        desc: "Restore file from last commit",
      },
      {
        cmd: "git checkout -- file.txt",
        desc: "Discard working dir changes",
        example:
          "discard unstaged changes in your working directory for that specific file",
        warn: true,
      },
    ],
  },
  {
    cat: "logs & inspection",
    cmds: [
      { cmd: "git log", desc: "Show commit history" },
      { cmd: "git log --oneline", desc: "Compact one-line log" },
      {
        cmd: "git log --graph --oneline --abbrev-commit",
        desc: "Visual branch graph",
      },
      { cmd: "git log -1 -p <hash>", desc: "Show patch for a commit" },
      {
        cmd: "git log -4 --pretty=oneline HEAD",
        desc: "The last 4 commits from the commit currently pointed to by HEAD, in a compact one-line format.",
      },
      {
        cmd: 'git log -S"string" --oneline file',
        desc: "Find commits adding/removing string",
      },
      {
        cmd: "git log --stat main~12..main~10",
        desc: "Stats for a commit range",
      },
      { cmd: "git show", desc: "Details of most recent commit" },
      { cmd: "git show <hash>", desc: "Details of specific commit" },
      { cmd: "git show HEAD~2", desc: "Show commit 2 before HEAD" },
      { cmd: "HEAD", desc: "most recent commit" },
      {
        cmd: "ORIG_HEAD",
        desc: "previous version before certain operations e.g: merge, reset",
      },
      { cmd: "FETCH_HEAD", desc: "head of the last branch fetched" },
      {
        cmd: "MERGE_HEAD",
        desc: "commit that is being merged into head",
      },
      {
        cmd: "git show origin/main:Makefile",
        desc: "Show file on remote branch",
      },
      { cmd: "git diff", desc: "Working dir vs index (staging area)" },
      {
        cmd: "git diff HEAD",
        desc: "Working dir vs last commit snapshot (HEAD)",
      },
      {
        cmd: "git diff HEAD^ HEAD",
        desc: "Previous HEAD vs current HEAD",
      },
      { cmd: "git diff --cached", desc: "Index (staging area) vs HEAD" },
      {
        cmd: "git diff commit1 commit2",
        desc: "Diff between two commits",
        example: "git diff 9da581d910 ec232cddfb",
      },
      {
        cmd: "git diff branch1 branch2 -- path/to/file",
        desc: "Diff between two commits for an specific file",
      },
      {
        cmd: "git diff --stat main~5 main",
        desc: "Changed files summary",
      },
      {
        cmd: 'git diff -S"string" main~50',
        desc: "Diffs containing string in last 50",
      },
      {
        cmd: "git diff -w",
        desc: "Working dir vs index (staging area ignoring whitespace changes)",
      },
      {
        cmd: "git blame -L 35, init/version.c",
        desc: "Who changed each line",
      },
      { cmd: "git reflog", desc: "History of HEAD changes" },
      { cmd: "gitk", desc: "Visual commit browser (GUI)" },
    ],
  },
  {
    cat: "branches",
    cmds: [
      { cmd: "git branch", desc: "List local branches" },
      { cmd: "git branch -a", desc: "List all branches (incl. remote)" },
      { cmd: "git branch -vv", desc: "Branches with tracking info" },
      {
        cmd: "git branch <name>",
        desc: "Create branch",
        example: "git branch prs/pr-1138",
      },
      {
        cmd: "git branch <name> <commit>",
        desc: "Create branch at specific commit",
      },
      { cmd: "git branch -d <name>", desc: "Delete branch (safe)" },
      {
        cmd: "git branch -D <name>",
        desc: "Forcefully delete a local branch",
        example: "-D forces delete even if unmerged",
        warn: true,
      },
      { cmd: "git checkout <branch>", desc: "Switch to branch" },
      {
        cmd: "git checkout -b <branch>",
        desc: "Create and switch to new branch",
      },
      {
        cmd: "git checkout -b <branch> main^",
        desc: "New branch from one before main",
      },
      {
        cmd: "git checkout -m <branch>",
        desc: "Switch, merging local changes",
      },
      { cmd: "git show-branch", desc: "Summary of branches" },
      { cmd: "git show-branch bug/*", desc: "Branches matching pattern" },
      {
        cmd: "git show-branch --more=5",
        desc: "Show 5 more commits per branch beyond the default depth",
      },
      {
        cmd: "git merge-base <b1> <b2>",
        desc: "Find best common ancestor",
      },
      { cmd: "git branch -m master main", desc: "Rename branch" },
    ],
  },
  {
    cat: "merge",
    cmds: [
      { cmd: "git merge <branch>", desc: "Merge branch into current" },
      {
        cmd: "git merge --abort",
        desc: "Cancel in-progress merge",
        example:
          "Cancels an ongoing merge only, restores state to before merge started, keeps unrelated working state safe",
      },
      { cmd: "git ls-files -u", desc: "Show unmerged files" },
      {
        cmd: "git log --merge --left-right -p",
        desc: "Commits from both sides of merge",
      },
      {
        cmd: "git reset --hard HEAD",
        desc: "Discard all, return to HEAD, abandons merge attempt",
        example:
          "During a merge with conflicts, reset the working directory and stafing area to match HEAD, discards all uncommitted changes, remove conflict markers and merge edits in progress.",
        warn: true,
      },
      {
        cmd: "git reset --hard ORIG_HEAD",
        desc: "Reset to the state before the last major Git operation (e.g., merge, pull, rebase).",
        example: "Warning: Can wipe current working state unexpectedly",
        warn: true,
      },
    ],
  },
  {
    cat: "rebase",
    cmds: [
      {
        cmd: "git rebase main",
        desc: "Rebase current branch onto main",
        warn: true,
      },
      { cmd: "git rebase main dev", desc: "Rebase dev onto main", warn: true },
      {
        cmd: "git rebase --onto main maint^ feature",
        desc: "Transplant feature branch",
        warn: true,
      },
      {
        cmd: "git rebase -i HEAD~3",
        desc: "Interactive rebase last 3 commits",
        warn: true,
      },
      {
        cmd: "git rebase --continue",
        desc: "Resume after resolving conflicts",
      },
      {
        cmd: "git rebase --skip",
        desc: "Skip current conflicting commit",
      },
      { cmd: "git rebase --abort", desc: "Cancel rebase" },
      {
        cmd: "git push --force-with-lease",
        desc: "Safe force push after rebase",
      },
    ],
  },
  {
    cat: "reset & revert",
    cmds: [
      {
        cmd: "git reset --soft HEAD^",
        desc: "Undo last commit, keep changes staged (ready to recommit)",
        example:
          "Moves HEAD back 1 commit, but keeps files in staging area so you can immediately recommit",
      },
      {
        cmd: "git reset --mixed HEAD^",
        desc: "Undo last commit, keep changes in working directory (unstaged)",
        example:
          "Moves HEAD back 1 commit and unstages changes, but files remain modified in working directory",
      },
      {
        cmd: "git reset --hard HEAD^",
        desc: "Undo last commit and delete all changes (working directory + staging)",
        example:
          "Moves HEAD back 1 commit and completely removes all changes from files and staging",
        warn: true,
      },
      {
        cmd: "git reset --soft <commit>",
        desc: "Move HEAD to a commit, keep changes staged (ready to recommit)",
        example:
          "Useful to rewrite the last commits into a cleaner single commit before pushing",
      },
      {
        cmd: "git reset --mixed <commit>",
        desc: "Move HEAD to a commit, keep changes in working directory (unstaged)",
        example:
          "Useful when you want to uncommit changes but keep them to edit or re-stage selectively",
      },
      {
        cmd: "git reset --hard <commit>",
        desc: "Move HEAD to a commit and discard all changes (staging + working directory)",
        example:
          "Used to completely discard local changes and return repo to a previous stable state",
      },
      {
        cmd: "git reset --hard HEAD~3",
        desc: "Roll back 3 commits entirely",
        warn: true,
      },
      { cmd: "git reset HEAD <file>", desc: "Unstage a file" },
      {
        cmd: "git revert <commit>",
        desc: "New commit reversing a past commit",
      },
      {
        cmd: "git cherry-pick <commit>",
        desc: "Apply specific commit to current branch",
      },
    ],
  },
  {
    cat: "tags",
    cmds: [
      { cmd: 'git tag -m "msg" v1.0.0', desc: "Create annotated tag" },
      {
        cmd: 'git tag -m "msg" v1.0 <hash>',
        desc: "Tag a specific commit",
      },
      { cmd: "git push origin v1.0.0", desc: "Push one tag" },
      { cmd: "git push --tags", desc: "Push all tags" },
      { cmd: "git rev-parse V1.0", desc: "Resolve tag to commit hash" },
    ],
  },
  {
    cat: "remote & push/pull",
    cmds: [
      { cmd: "git remote add origin <url>", desc: "Add remote" },
      { cmd: "git remote add -f origin <url>", desc: "Add remote" },
      { cmd: "git remote show origin", desc: "Info about origin" },
      {
        cmd: "git remote update",
        desc: "Fetch immediately after adding the remote",
      },
      {
        cmd: "git remote set-head origin main",
        desc: "Set default remote branch",
      },
      { cmd: "git fetch", desc: "Download remote changes (no merge)" },
      { cmd: "git pull", desc: "Fetch + merge" },
      { cmd: "git push", desc: "Push current branch to upstream" },
      { cmd: "git push origin main", desc: "Push local main to origin" },
      {
        cmd: "git push --set-upstream origin <branch>",
        desc: "Push and set tracking",
      },
      { cmd: "git push --force-with-lease", desc: "Safe force push" },
      {
        cmd: "git push --force origin",
        desc: "Force push (dangerous)",
        warn: true,
      },
      { cmd: "git push --tags", desc: "Push all tags" },
      {
        cmd: "git push origin --delete main",
        desc: "Delete remote branch",
      },
      { cmd: "git ls-remote", desc: "List remote refs" },
      { cmd: "git show-ref", desc: "List all refs in repo" },
      {
        cmd: "git log main..origin/main --oneline",
        desc: "Commits on remote not yet merged",
      },
      {
        cmd: "gh repo create <name> --private --source=. --remote=origin --push",
        desc: "Create GitHub repo and push",
      },
      { cmd: "gh auth login", desc: "Authenticate with GitHub CLI" },
    ],
  },
  {
    cat: "file management",
    cmds: [
      { cmd: "git rm <file>", desc: "Remove file from repo and disk" },
      { cmd: "git mv <src> <dest>", desc: "Move or rename file" },
      { cmd: "git ls-files -s", desc: "List staged files with hashes" },
      {
        cmd: "git ls-files -s --abbrev=7",
        desc: "List staged files with hashes 7 digits object names",
      },
      {
        cmd: "git cat-file -p <hash>",
        desc: "prints the human-readable content of a Git object",
        example: "git cat-file -p HEAD",
      },
      {
        cmd: "git rev-parse <prefix>",
        desc: "Look up object by unique prefix",
      },
      {
        cmd: "git hash-object <file>",
        desc: "Compute SHA hash for a file",
      },
      { cmd: "echo main.o >> .gitignore", desc: "Ignore build artifact" },
    ],
  },
  {
    cat: "bisect",
    cmds: [
      { cmd: "git bisect start", desc: "Begin binary search for bug" },
      { cmd: "git bisect bad", desc: "Mark current commit as broken" },
      { cmd: "git bisect good v2.6.27", desc: "Mark known good commit" },
      { cmd: "git bisect log", desc: "Show bisect session log" },
      {
        cmd: "git bisect visualize --pretty=oneline",
        desc: "Visual of remaining range",
      },
      { cmd: "git bisect reset", desc: "End bisect session" },
    ],
  },
  {
    cat: "patches",
    cmds: [
      {
        cmd: "git format-patch -1",
        desc: "Patch for most recent commit",
      },
      {
        cmd: "git format-patch main~5",
        desc: "Patches for last 5 commits",
      },
      {
        cmd: "git send-email -to dev@example.org 0001.patch",
        desc: "Email a patch",
      },
      {
        cmd: "git config --global sendemail.smtpserver smtp.isp.com",
        desc: "Configure SMTP for send-email",
      },
    ],
  },
  {
    cat: "proc: cherry-pick",
    cmds: [
      {
        cmd: "git checkout main",
        desc: "we move to main, with commits A-B-C-D",
        example: "my_dev have commits V-W-X-Y-Z",
      },
      {
        cmd: "git cherry-pick my_dev^",
        desc: "applying Y commit to main",
      },
      {
        cmd: "git cherry-pick my_dev~3",
        desc: "applying W commit to main",
      },
      {
        cmd: "git cherry-pick my_dev~2",
        desc: "applying X commit to main",
      },
      {
        cmd: "git cherry-pick my_dev",
        desc: "applying Z commit to main",
      },
    ],
  },
  {
    cat: "proc: cherry-pick hotfix flow",
    cmds: [
      {
        cmd: "git checkout main",
        desc: "we move to production branch (main)",
        example: "main has commits A-B-C-D (live system)",
      },
      {
        cmd: "git log my_dev --oneline",
        desc: "we identify the bug fix commit inside development branch",
        example: "my_dev contains V-W-X-Y-Z, where Y fixes a critical bug",
      },
      {
        cmd: "git cherry-pick my_dev^",
        desc: "apply Y commit (hotfix) to main",
        example: "only the bug fix is needed, not the rest of the feature work",
      },
      {
        cmd: "git push origin main",
        desc: "deploy hotfix to production",
        example: "main now includes A-B-C-D-Y'",
      },
    ],
  },
  {
    cat: "proc: cherry-pick backport flow",
    cmds: [
      {
        cmd: "git checkout release",
        desc: "we switch to stable release branch",
        example: "release contains A-B-C (stable version used by customers)",
      },
      {
        cmd: "git log main --oneline",
        desc: "we locate the fix commit in main",
        example: "main has A-B-C-D-E where E fixes a production issue",
      },
      {
        cmd: "git cherry-pick main",
        desc: "apply commit E to release branch",
        example: "bringing only the fix, not all new features from main",
      },
      {
        cmd: "git push origin release",
        desc: "update release branch with critical fix",
        example: "release now becomes A-B-C-E'",
      },
    ],
  },
  {
    cat: "proc: cherry-pick feature slice",
    cmds: [
      {
        cmd: "git checkout main",
        desc: "we switch to integration branch",
        example: "main is stable baseline A-B-C-D",
      },
      {
        cmd: "git log my_dev --oneline",
        desc: "we identify a group of related commits to reuse",
        example: "my_dev: V-W-X-Y-Z (feature split into steps)",
      },
      {
        cmd: "git cherry-pick my_dev~3..my_dev",
        desc: "apply W, X, Y, Z commits in order",
        example: "we reuse full feature slice into main",
      },
      {
        cmd: "git push origin main",
        desc: "integrate feature into main branch",
        example: "main becomes A-B-C-D-W'-X'-Y'-Z'",
      },
    ],
  },
  {
    cat: "proc: amend commit (before push)",
    cmds: [
      {
        cmd: "git add .",
        desc: "Stage new changes you forgot to include",
        example: "You forgot to add a modified config file",
      },
      {
        cmd: "git commit --amend",
        desc: "Update last commit to include staged changes + open editor for message",
        example: "Fix commit message or add missing files",
        warn: true,
      },
      {
        cmd: "git commit --amend --no-edit",
        desc: "Update last commit but keep original message",
        example: "You only forgot a file, message is fine",
        warn: true,
      },
    ],
  },
  {
    cat: "proc: fix last commit after push",
    cmds: [
      {
        cmd: "git add .",
        desc: "Stage the missing fix or file",
        example: "Forgot to include a small bug fix",
      },
      {
        cmd: "git commit --amend --no-edit",
        desc: "Rewrite last commit locally with fix included",
        example: "Same commit message, just corrected content",
      },
      {
        cmd: "git push --force-with-lease",
        desc: "Safely update remote branch with amended commit",
        example: "Only if nobody else pushed in the meantime",
      },
    ],
  },
  {
    cat: "proc: squash commits (interactive rebase)",
    cmds: [
      {
        cmd: "git rebase -i HEAD~3",
        desc: "Open interactive rebase for last 3 commits on current branch",
        example: "Used before opening a PR to clean commit history",
      },
      {
        cmd: "pick bc2aafc chore: ...",
        desc: "Keep first commit as base of the squash",
        example: "All other commits will be merged into this one",
      },
      {
        cmd: "squash efa7517 chore: ...",
        desc: "Merge commit into previous one (keeps changes)",
        example: "Changes are combined into bc2aafc",
      },
      {
        cmd: "squash 88cda72 chore: ...",
        desc: "Merge into previous commit, combining all changes",
        example: "Final result becomes a single consolidated commit",
      },
      {
        cmd: "git push --force-with-lease",
        desc: "Safely update remote branch with amended commit",
        example: "Only use if branch has already been pushed",
      },
    ],
  },
  {
    cat: "proc: create GitHub remote repository",
    cmds: [
      {
        cmd: "gh --version",
        desc: "Verify GitHub CLI is installed and available",
        example: "Ensures gh CLI is correctly set up before authentication",
      },
      {
        cmd: "gh auth login",
        desc: "Authenticate GitHub CLI with your GitHub account",
        example: "Opens browser login or token prompt depending on setup",
      },
      {
        cmd: "git status",
        desc: "Check current repository state",
        example:
          "Verify you are inside a git repo and working directory is clean",
      },
      {
        cmd: "git branch -M main",
        desc: "Ensure default branch is named main",
        example: "Renames current branch to main if needed",
      },
      {
        cmd: 'git add . && git commit -m "initial commit"',
        desc: "Create initial commit if repository is empty",
        example: "Required before pushing a new project to GitHub",
      },
      {
        cmd: "gh repo create your-repo-name --private --source=. --remote=origin --push",
        desc: "Create GitHub repository, link it as origin, and push current branch",
        example: "Full automation: repo creation + remote setup + first push",
      },
    ],
  },
  {
    cat: "proc: recover deleted commits / branch",
    cmds: [
      {
        cmd: "git reflog",
        desc: "Show full history of HEAD movements (including deleted commits)",
        example: "Find commit before reset, rebase, or branch deletion",
      },
      {
        cmd: "git checkout -b recovery <commit-hash>",
        desc: "Recreate a branch from a lost commit",
        example: "Restores deleted branch or detached commit safely",
      },
      {
        cmd: "git branch <branch-name> <commit-hash>",
        desc: "Recreate a deleted branch without switching",
        example: "Restores branch pointer to previous state",
      },
    ],
  },
  {
    cat: "proc: move commit to correct branch",
    cmds: [
      {
        cmd: "git log --oneline",
        desc: "Identify the commit that was made on the wrong branch",
        example: "Find commit abc123 that belongs elsewhere",
      },
      {
        cmd: "git checkout correct-branch",
        desc: "Switch to the branch where commit should live",
        example: "Move from feature-a to feature-b",
      },
      {
        cmd: "git cherry-pick abc123",
        desc: "Apply the commit onto the correct branch",
        example: "Copies commit without rewriting history",
      },
      {
        cmd: "git checkout wrong-branch",
        desc: "Return to original branch",
        example: "Optional cleanup step",
      },
      {
        cmd: "git reset --hard HEAD~1",
        desc: "Remove commit from wrong branch (if not pushed)",
        example: "Only safe if commit was not shared remotely",
      },
    ],
  },
  {
    cat: "proc: undo last push safely",
    cmds: [
      {
        cmd: "git log --oneline",
        desc: "Identify commit before the bad push",
        example: "Find last known good commit hash",
      },
      {
        cmd: "git reset --hard <good-commit>",
        desc: "Move local branch back to safe state",
        example: "Removes bad commits locally",
      },
      {
        cmd: "git push --force-with-lease",
        desc: "Update remote safely (prevents overwriting others' work)",
        example: "Safer alternative to --force",
      },
    ],
  },
  {
    cat: "proc: recover after reset --hard",
    cmds: [
      {
        cmd: "git reflog",
        desc: "Find lost commit before reset",
        example: "Shows HEAD history even after destructive actions",
      },
      {
        cmd: "git checkout <commit-hash>",
        desc: "Inspect recovered commit state",
        example: "Temporary recovery step",
      },
      {
        cmd: "git checkout -b recovery-branch <commit-hash>",
        desc: "Restore lost work into a new branch",
        example: "Safest full recovery method",
      },
      {
        cmd: "git reset --hard <commit-hash>",
        desc: "Restore branch pointer permanently",
        example: "Restores repo to recovered state",
      },
    ],
  },
  {
    cat: "proc: rename remote repository + update local",
    cmds: [
      {
        cmd: "rename via GitHub UI",
        desc: "Go to repo → Settings → Repository name → Rename",
        example: "https://github.com/user/old-name → new-name",
      },
      {
        cmd: "git remote -v",
        desc: "Verify current remote URLs",
        example: "origin → https://github.com/user/old-name.git",
      },
      {
        cmd: "git remote set-url origin https://github.com/user/new-name.git",
        desc: "Update local repo to point to new remote name",
        example: "Switch origin from old-name → new-name",
      },
      {
        cmd: "git remote -v",
        desc: "Confirm remote URL was updated",
        example: "origin → https://github.com/user/new-name.git",
      },
      {
        cmd: "git push",
        desc: "Push to ensure everything works with new remote",
        example: "Validates connectivity after rename",
      },
    ],
  },
  {
    cat: "proc: delete history and keep current state",
    cmds: [
      {
        cmd: "git checkout --orphan clean-main",
        desc: "Create a new branch with no previous history",
        example: "Starts a fresh branch without any commits",
      },
      {
        cmd: "git add .",
        desc: "Stage all current project files",
        example: "Keeps the current working directory state",
      },
      {
        cmd: 'git commit -m "Initial commit (history reset)"',
        desc: "Create a single new root commit",
        example: "Repository now has only one commit",
      },
      {
        cmd: "git branch -D main",
        desc: "Delete old branch that contains full history",
        example: "Removes reference to previous commits",
        warn: true,
      },
      {
        cmd: "git branch -m main",
        desc: "Rename new branch to main",
        example: "Replaces original branch name",
      },
      {
        cmd: "git push --force origin main",
        desc: "Overwrite remote repository history with new single commit",
        example: "Remote now contains only the new clean history",
        warn: true,
      },
    ],
  },
];
