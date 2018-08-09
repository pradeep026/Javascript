GIT USER GUIDE
---------------------
Reference Links:

* [git codeschool](http://courseware.codeschool.com.s3.amazonaws.com/git_real_slides.pdf)

General Commands
-------------
|            Label           |      Command     |              Additional info             |
|:--------------------------:|:----------------:|:----------------------------------------:|
| status                     | git status       |                                          |
| check commits log          | git lg           |                                          |
| push changes to remote     | git push --force | to overwrite remote changes with   local |
| list remote                | git remote -v    |                                          |

General clean
-------------
|            Label                      |      Command                                                        |              Additional info                |
|:-------------------------------------:|:-------------------------------------------------------------------:|:----------------------------------------:   |
| remove changes from branch            | git stash                                                           | will keep the files for use in stash branch |
| apply last stash to branch            | git stash pop                                                       | will get the files from stash branch        |
| discard changes in working directory  | git checkout -- \<file\> <BR/> git checkout -- app/model/product.js | reverts modified files                      |
| delete uncomitted files               | git clean -f                                                        | deletes files permanently                   |
| delete uncomitted folders             | git clean -d -f                                                     | deletes files & folders permanently         |


Update Commands
-------------
|           Label           |     Command     |    Additional info    |
|:-------------------------:|:---------------:|:---------------------:|
| get changes from   remote | git fetch       | fetchs current branch |
| get changes from remote   | git fetch --all | fetchs all branches   |
| apply fetch into branch   | git rebase      |                       |


Commit Commands
-------------
|          Label         |                   Command                                                                   |               Additional info               |
|:----------------------:|:-------------------------------------------------------------------------------------------:|:-------------------------------------------:|
| add all files          | git add .                                                                                   |                                             |
| commit                 | git commit -m "\<message-to-commit\>" <BR/> git commit -m "add test case for bill payment"  |                                             |
| push changes to remote | git push                                                                                    |                                             |
| delete local commit    | git reset --soft HEAD~\<index-to-step-down\> <BR/> git reset --soft HEAD~1                  | reverts commit but keeps the   file changes |
| delete local commit    | git reset --hard HEAD~\<index-to-step-down\> <BR/> git reset --hard HEAD~1                  | reverts commit and reverts file   changes   |
| change the commit      | git commit --amend                                                                          | edit most recent commit                     |

Resolve Conflicts
-----------------
|            Label                  |      Command                                                          |              Additional info                |
|:---------------------------------:|:---------------------------------------------------------------------:|:----------------------------------------:   |
| use base copy of a file           | git checkout --ours \<file\> <BR/> git checkout --ours example.js     |                                             |
| use new copy of a file            | git checkout --theirs \<file\> <BR/> git checkout --theirs example.js |                                             |

Change a commit
-------------
|        Label                         |                     Command                              |         Additional info                           |
|:------------------------------------:|:--------------------------------------------------------:|:-------------------------------------------------:|
| Change the content of a commit step1 | git rebase --interactive \<revision no of the commit\>   | opens a interactive console                       |
| Change the content of a commit step2 | in the interactive console                               | use "edit" option to the commit that needs change |
| Change the content of a commit step3 |                                                          | make changes to the file                          |
| Change the content of a commit step4 | git add \<changed file\>                                 | add the changed file                              |
| Change the content of a commit step5 | git commit --amend                                       | verify if the changed files are being tracked     |
| Change the content of a commit step6 | git rebase --continue                                    | allows the operation to complete                  |
| Change the content of a commit step7 | git push -f                                              | push changes to the repository forcefully         |

Branch Commands
-------------
|              Label             |                           Command                                                                        |                       Additional info                      |
|:------------------------------:|:--------------------------------------------------------------------------------------------------------:|:----------------------------------------------------------:|
| switch to an   existing branch | git checkout \<branch-name\> <BR/> git checkout master                                                   |                                                            |
| create a new branch            | git checkout -b \<new-branch-name\> <BR/> git checkout -b release/skn-dfs-2015                          | creates a branch from current   branch. Will need upstream |
| set upstream for new branch    | git push --set-upstream origin \<branch-name\> <BR/> git push --set-upstream origin release/skn-dfs-2015 |                                                            |
| revert branch to revision      | git checkout -B \<branch-to-revert\> \<revision-to-revert-to\> <BR/> git checkout -B master 4f551b6      | will need a force push                                     |
| revert branch to tag           | git checkout -B \<branch-to-revert\> \<tag-to-revert-to\> <BR/> git checkout -B master nfs-id-v2.5       | will need a force push                                     |

Tag Commands
-------------
|     Label    |                            Command                                                                                     | Additional info |
|:------------:|:----------------------------------------------------------------------------------------------------------------------:|:---------------:|
| Create a tag | git tag -a \<tag-name\> -m "\<tag-message\>" \<revision-to-tag\> <BR/> git tag -a nfs-id-v2.5 -m "tag for nfs" 4f551b6 |                 |
| delete a tag | git tag -d \<tag-name\> <BR/> git tag -d nfs-id-v2.5                                                                   |                 |

Optimistic Merge Commands and Release candidate tagging (if release has commits apart from targeted feature)
-------------
|        Label           |               Command                                                      |         Additional info            |
|:----------------------:|:--------------------------------------------------------------------------:|:----------------------------------:|
| Optimistic Merge  | git checkout \<head-commit-of-master-branch\> <BR/> git checkout 4f551b6  | creates a detached branch          |
| Optimistic Merge  | git merge --no-ff \<release-branch\> <BR/> git merge --no-ff release/rcwb-v2.1                   | merge release into detached branch |
| Release Candidate Tagging | git tag -a \<tag-name\> -m \<message> <BR/> git tag -a rc/rcwb-2.0-rc1 -m "RCWB Release "                  | tag the merge commit for release candidate |

Deletes all stale remote-tracking branches under <name>. These stale branches have already been removed from the remote repository referenced by <name>, but are still locally available in "remotes/<name>".
-------------
|        Label           |               Command                                                      |         Additional info            |
|:----------------------:|:--------------------------------------------------------------------------:|:----------------------------------:|
| prune --dry-run | git remote prune --dry-run origin  | Show list of would prune          |
| prune origin    | git remote prune origin            | Remove locally available in remotes |



Advanced commands
-------------
|            Label           |      Command     |              Additional info             |
|:--------------------------:|:----------------:|:----------------------------------------:|
| Split repository into multiple | git filter-branch --prune-empty --subdirectory-filter FOLDER-NAME  BRANCH-NAME | https://help.github.com/articles/splitting-a-subfolder-out-into-a-new-repository  |

Additional Commands
-------------
* lg command setup in ~/.gitconfig <BR/> lg = log --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)\<%an\>%Creset' --abbrev-commit --date=relative
