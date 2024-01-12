# Use SSH

> SSH = Secure SHell / cryptographic network protocol

example from subject :

````
Depuis votre terminal (git bash par exemple), se connecter au serveur avec la commande :
adresse ip du serveur : 212.47.253.220
(exemple : ssh d.brogniart@2121.47.246.154 )
mot de passe : azerty
````

- ``$ whoami`` to find account `s.szynkarski`

`ssh s.szynkarski@212.47.253.220`  

- then use `passwd` command to change pass

- Clone https://github.com/le-campus-numerique/linux-ops-TreasureHunt

``ssh-keygen -t ed25519 -C "name@email"``  to create new SSH key

``ls -a `` to see hidden files 

``$ cd .ssh`` to go into the file

`$ cat` to see content

- Then past SSH key in Github setting

``exit`` command  to leave server

https://www.digitalocean.com/community/tutorials/how-to-use-ssh-to-connect-to-a-remote-server

https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent