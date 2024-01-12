# Network Systems

## Goals
- Finish subject 1 and 2 : Thursday
- Finish subject 3 : Friday

## Subject 1

[Qu'est-ce que Linux ? | HD Français](https://www.youtube.com/watch?v=mUKtIpZ_Vz0)

- example

Depuis votre terminal (git bash par exemple), se connecter au serveur avec la commande :
-  adresse ip du serveur : 212.47.253.220
(exemple : ssh d.brogniart@2121.47.246.154 )
-  mot de passe : azerty

- ``$ whoami`` to find account `s.szynkarski`

`ssh s.szynkarski@212.47.253.220`  

- then use `passwd` command to change pass

- Clone https://github.com/le-campus-numerique/linux-ops-TreasureHunt

``ssh-keygen -t ed25519 -C "name@email"``  

``ls -a `` to see hidden files

``$ cd .ssh`` to go into the file

`$ cat` to see content

- SSH = Secure SHell / cryptographic network protocol

### Step 1

creates file in folder    `$ touch my_team.txt`
input into a file  ``echo -e "Name=Sergies\nMotto=Food_is_life\nEmail=serge.szynkarski@le-campus-numerique.fr" > my_team.txt``

- ``echo`` = add input to file  
- ``-e`` = enables interpretation of backslash escapes  
- ``\n`` = skips a line  
- ``>`` = towards the file I want   

``subscribe_team.sh`` to validate Bourne shell script

### Step 2

go in sponsors

list of sponsors

Get 3 with the most

List of most

Uk /FreeWave_Technologies.sponsor = 32560
spain / Harman_International_Industries.sponsor  = 32353
Swiss / Beazer_Homes_USA.sponsor = 32065

``mv`` to move file to another file 

````
cat */* | sort -n | tail -n3
 grep -E "31312|31663|31684" */*
 grep -E "31312|31663|31684" */* > test.txt
 grep -E "31312|31663|31684" */* >> test.txt to add
 sort -n -t: -k test.txt
 ````
 
 

### Part 3

budget : ``96978``

sort -k = key

sort -t =  specified character

cat Players/*/*/* | sort -t= -k2 -n

grep this_word Players/*/*/* 


tail -n -2 Players/*/*/*

tail -n -2 Players/*/*/* |

cat -n -2 Players/*/*/* | 

https://regexr.com/

grep -rl "LEVEL=[8-9][0-9]" Players/ | xargs grep -l "VALUE" | xargs grep -E "LEVEL=[8-9][0-9]|VALUE" | cut -d'=' -f1,2,3 | awk -F'=' '{sum += $3} sum < 95000 {print $1, $2, $3} END {print "Initial VALUE = 95000\nTotal VALUE =", sum, "\nMax VALUE to not exceed = 95000 - " sum}' | sort -r -t= -k 3 -n | head -n 15