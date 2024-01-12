# Bash Command CheatSheet/Momo

- https://gist.github.com/riipandi/3097780  
- https://github.com/RehanSaeed/Bash-Cheat-Sheet  
- https://raw.githubusercontent.com/bobbyiliev/introduction-to-bash-scripting/main/ebook/en/export/introduction-to-bash-scripting-dark.pdf

## Fun stuff

- ``tab`` - after a command we can check the files within 
- ``clear`` - clear terminal text
- ``history`` - show the hsitory of input commands

## File Commands

- ``ls`` - List directory
    - ``ls -a`` - List all files in directeroty (show hidden)
    - ``ls -l`` - List logs the rights of the files in folder
    - ``ls -F`` - Lists files and directories with special symbols

- ``cd`` - change directory
    - ``cd ../../`` - to take steps back
    - ``cd /soso/soso`` - to dive into multiple folders

- ``pwd`` - Print working directory will show path

- ``mkdir <name>`` - Makes a new directory

- ``rm <file>`` - deletes the file

- ``cp <file1> <file2>`` - copy file1 to file 2
    - ``cp -r dir1 dir2`` - copies directory 1 to directory2; will create folder if none

- ``mv`` - moves or renames a file
    - ``mv <file1> <file2>`` - will rename the file
    - ``mv <file1> <stuff/stuff>`` - will move the file to the destination folder

- ``touch <file.txt>`` - creates a file

- ``cat <file>`` - concatenates selected files, gives us a view of whats inside

- ``head <file>`` -  Ouput the first 10 lines. Also hows it's directory 

- ``tail <file>`` - Ouput the last 10 lines. Also hows it's directory
    -  ``tail -2`` - we can precise the number of lines

- ``ln`` - Create links between files, symlink (symbolic). Links can be hard (two names for the same file) or soft (a shortcut of the first file).

## SSH

- ``ssh user@host`` – connect to host as user

## Searching

- ``grep`` – search for a specific value in files

## Sorting

- ``sort`` - rearranges in alphabetical order
    - ``sort -n`` - rearranges in numeric order

## System Info

- ``whoami`` – who you are logged in as

## Edit

- ``nano`` - to edit a file
    - ``ctrl + O`` - to save
    - ``ctrl + X`` - to leave

## Transform

- ``alias`` - Create an alias, a shortcut that references a command.
    - ``alias ls='ls -F'`` - Create an alias, a shortcut that references a command.
    - - ``alias ls='ls -F --color=auto'`` - to change color

## Script

- ``./ `` - to execute a script

## Variables

- ``export`` - Used to set an environment/global variable.
    -  ``I=amulet`` VARIABLE_NAME=VALUE 

- ``let`` - Used to perform integer artithmetic on shell variables.

## Loops (Learn this!)

You can achieve the same results by typing the following
brace expansion:
``gzip file{00..99}``

You can also put this into a for loop, like so:

```
for i in {00..99}; do   
    gzip file${i}   
done
```

Yet another loop (that doesn't use a brace expansion) could
be:

```
for file in file*; do
    gzip ${file}
done
```

## Visual layout

- ``tree -F .. `` - A recursive directory listing program that produces a depth-indented listing of files.

## information/help

- ``man <command>`` - shows all the options

- ``<command> --help`` shows info

--- 

> Learn Tmux

crtl D - to leave 