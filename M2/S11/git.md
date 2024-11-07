SMA@Asus MINGW64 /e/Cursos/TalentoDigital/Javascript
$ mkdir mi_directorio

SMA@Asus MINGW64 /e/Cursos/TalentoDigital/Javascript
$

SMA@Asus MINGW64 /e/Cursos/TalentoDigital/Javascript
$

SMA@Asus MINGW64 /e/Cursos/TalentoDigital/Javascript
$ cd m
M1/            M2/            M3/            M4/            M5/            M6/            mi_directorio/    

SMA@Asus MINGW64 /e/Cursos/TalentoDigital/Javascript
$ cd mi_directorio/

SMA@Asus MINGW64 /e/Cursos/TalentoDigital/Javascript/mi_directorio
$ touch mi_archivo.txt

SMA@Asus MINGW64 /e/Cursos/TalentoDigital/Javascript/mi_directorio
$ git init
Initialized empty Git repository in E:/Cursos/TalentoDigital/Javascript/mi_directorio/.git/

SMA@Asus MINGW64 /e/Cursos/TalentoDigital/Javascript/mi_directorio (master)
$ git status
On branch master

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        mi_archivo.txt

nothing added to commit but untracked files present (use "git add" to track)

SMA@Asus MINGW64 /e/Cursos/TalentoDigital/Javascript/mi_directorio (master)
$ git add mi_archivo.txt 

SMA@Asus MINGW64 /e/Cursos/TalentoDigital/Javascript/mi_directorio (master)
$ git commit -m "primer commit"
[master (root-commit) 2ef673b] primer commit
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 mi_archivo.txt

SMA@Asus MINGW64 /e/Cursos/TalentoDigital/Javascript/mi_directorio (master)
$ git log
commit 2ef673bc89a0b4a8a573f00bffe4575f54fde4e5 (HEAD -> master)
Author: sebaspatric <sebastian.menares@gmail.com>
Date:   Sat Nov 2 20:13:44 2024 -0300

    primer commit

SMA@Asus MINGW64 /e/Cursos/TalentoDigital/Javascript/mi_directorio (master)
$ echo "este es un cambio en el documento" >> mi_archivo.txt 

SMA@Asus MINGW64 /e/Cursos/TalentoDigital/Javascript/mi_directorio (master)
$ cat mi_archivo.txt 
este es un cambio en el documento

SMA@Asus MINGW64 /e/Cursos/TalentoDigital/Javascript/mi_directorio (master)
$ git status
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   mi_archivo.txt

no changes added to commit (use "git add" and/or "git commit -a")

SMA@Asus MINGW64 /e/Cursos/TalentoDigital/Javascript/mi_directorio (master)
$ git diff
warning: in the working copy of 'mi_archivo.txt', LF will be replaced by CRLF the next time Git touches it
diff --git a/mi_archivo.txt b/mi_archivo.txt
index e69de29..5f147db 100644
--- a/mi_archivo.txt
+++ b/mi_archivo.txt
@@ -0,0 +1 @@
+este es un cambio en el documento

SMA@Asus MINGW64 /e/Cursos/TalentoDigital/Javascript/mi_directorio (master)
$ git add mi_archivo.txt 
warning: in the working copy of 'mi_archivo.txt', LF will be replaced by CRLF the next time Git touches it

SMA@Asus MINGW64 /e/Cursos/TalentoDigital/Javascript/mi_directorio (master)
$ git commit -m "segundoCommit"
[master e949570] segundoCommit
 1 file changed, 1 insertion(+)

SMA@Asus MINGW64 /e/Cursos/TalentoDigital/Javascript/mi_directorio (master)
$ git log
commit e949570ab0c7d75ad2b9cbdf1c2fee652a989367 (HEAD -> master)
Author: sebaspatric <sebastian.menares@gmail.com>
Date:   Sat Nov 2 20:17:41 2024 -0300

    segundoCommit

commit 2ef673bc89a0b4a8a573f00bffe4575f54fde4e5
Author: sebaspatric <sebastian.menares@gmail.com>
Date:   Sat Nov 2 20:13:44 2024 -0300

    primer commit

SMA@Asus MINGW64 /e/Cursos/TalentoDigital/Javascript/mi_directorio (master)
$ echo "este es el segundo cambio" 
.git/           mi_archivo.txt

SMA@Asus MINGW64 /e/Cursos/TalentoDigital/Javascript/mi_directorio (master)
$ echo "este es el segundo cambio"
.git/           mi_archivo.txt

SMA@Asus MINGW64 /e/Cursos/TalentoDigital/Javascript/mi_directorio (master)
$ echo "este es el segundo cambio" >> mi_archivo.txt

SMA@Asus MINGW64 /e/Cursos/TalentoDigital/Javascript/mi_directorio (master)
$ gt diff
bash: gt: command not found

SMA@Asus MINGW64 /e/Cursos/TalentoDigital/Javascript/mi_directorio (master)
$ git diff
warning: in the working copy of 'mi_archivo.txt', LF will be replaced by CRLF the next time Git touches it
diff --git a/mi_archivo.txt b/mi_archivo.txt
index 5f147db..380b28a 100644
--- a/mi_archivo.txt
+++ b/mi_archivo.txt
@@ -1 +1,2 @@
 este es un cambio en el documento
+este es el segundo cambio

SMA@Asus MINGW64 /e/Cursos/TalentoDigital/Javascript/mi_directorio (master)
$ cat mi_archivo.txt 
este es un cambio en el documento
este es el segundo cambio

SMA@Asus MINGW64 /e/Cursos/TalentoDigital/Javascript/mi_directorio (master)
$

SMA@Asus MINGW64 /e/Cursos/TalentoDigital/Javascript/mi_directorio (master)
$ git restore --staged mi_archivo.txt 

SMA@Asus MINGW64 /e/Cursos/TalentoDigital/Javascript/mi_directorio (master)
$ cat mi_archivo.txt 
este es un cambio en el documento
este es el segundo cambio

SMA@Asus MINGW64 /e/Cursos/TalentoDigital/Javascript/mi_directorio (master)
$ git diff
warning: in the working copy of 'mi_archivo.txt', LF will be replaced by CRLF the next time Git touches it
diff --git a/mi_archivo.txt b/mi_archivo.txt
index 5f147db..380b28a 100644
--- a/mi_archivo.txt
+++ b/mi_archivo.txt
@@ -1 +1,2 @@
 este es un cambio en el documento
+este es el segundo cambio

SMA@Asus MINGW64 /e/Cursos/TalentoDigital/Javascript/mi_directorio (master)
$ git restore --staged mi_archivo.txt

SMA@Asus MINGW64 /e/Cursos/TalentoDigital/Javascript/mi_directorio (master)
$ cat mi_archivo.txt 
este es un cambio en el documento
este es el segundo cambio

SMA@Asus MINGW64 /e/Cursos/TalentoDigital/Javascript/mi_directorio (master)
$ git log
commit e949570ab0c7d75ad2b9cbdf1c2fee652a989367 (HEAD -> master)
Author: sebaspatric <sebastian.menares@gmail.com>
Date:   Sat Nov 2 20:17:41 2024 -0300

    segundoCommit

commit 2ef673bc89a0b4a8a573f00bffe4575f54fde4e5
Author: sebaspatric <sebastian.menares@gmail.com>
Date:   Sat Nov 2 20:13:44 2024 -0300

    primer commit

SMA@Asus MINGW64 /e/Cursos/TalentoDigital/Javascript/mi_directorio (master)
$ git restore mi_archivo.txt 

SMA@Asus MINGW64 /e/Cursos/TalentoDigital/Javascript/mi_directorio (master)
$ cat mi_archivo.txt 
este es un cambio en el documento

SMA@Asus MINGW64 /e/Cursos/TalentoDigital/Javascript/mi_directorio (master)
$ git log
commit e949570ab0c7d75ad2b9cbdf1c2fee652a989367 (HEAD -> master)
Author: sebaspatric <sebastian.menares@gmail.com>
Date:   Sat Nov 2 20:17:41 2024 -0300

    segundoCommit

commit 2ef673bc89a0b4a8a573f00bffe4575f54fde4e5
Author: sebaspatric <sebastian.menares@gmail.com>
Date:   Sat Nov 2 20:13:44 2024 -0300

    primer commit

SMA@Asus MINGW64 /e/Cursos/TalentoDigital/Javascript/mi_directorio (master)