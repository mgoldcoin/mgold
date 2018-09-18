- add to your ~/.bashrc for increase memory for jvm:
```
SBT_OPTS="-XX:MaxJavaStackTraceDepth=5000 -Xmx2536M -XX:+CMSClassUnloadingEnabled -Xss2M"
```
- Run at console:
```
sudo apt install sbt
```

- Clone the repository:
```
git clone git@github.com:wavesplatform/Waves.git
```

- Run sbt at project folder:
```
cd waves_project
sbt
packageAll
```

- Import project to Intellij Idea

- Download featured plugins for Intellij:
  - Scala

- On import project check this point
```
[x] Use sbt shell for build and import
```

- Increase heap size to 2048 MB,

- Setup plugin "Scala Fmt"

- Enjoy
