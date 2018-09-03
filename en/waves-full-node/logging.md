# Logging

## About the used framework

For log writing, we use one of the logging frameworks [logback](https://logback.qos.ch/documentation.html). For the logback correct work, it needs the right configuration, [here](https://logback.qos.ch/manual/configuration.html) you can see how to configure the [logback.xml](https://github.com/wavesplatform/Waves/blob/master/src/main/resources/logback.xml) file.

By [default](https://github.com/wavesplatform/Waves/blob/master/src/main/resources/logback.xml) logs are written to STDOUT and to `waves.log` file in a human-readable format.

## STDOUT

* `-Dlogback.stdout.level={LEVEL_OF_LOGGING}`. The default level is `INFO`. Changes the level of logging, see below about it.

## Files

* `-Dlogback.stdout.level={LEVEL_OF_LOGGING}`. The default level is `DEBUG`. Changes the level of logging, see below about it.
* `-Dlogback.file.directory=/path/to/directory/for/logs`. The default directory is `{waves.directory}/log`.
  Changes the directory for logs. Note, the node must have rights to write files to this directory.

If you want to write logs, for example, to `JSON` files, you should define your own logging configuration and specify a path to it with option:
```
-Dlogback.configurationFile=/path/to/your/logback.xml
```

You can change the place where the log will be written:
* If you set up node from the package: in `{waves.directory}/conf/application.ini` . `{waves.directory}` is set up in [configuration](./configuration-parameters.md);
* If you run the node from the jar: using Java's options, for example, `java -Dsomeoption=somevalue -jar /path/to/waves-all.jar /path/to/config`


According to a [default](https://github.com/wavesplatform/Waves/blob/master/src/main/resources/logback.xml) logging configuration, we have such limits for file logs:
1. Logs older than 30 days are deleted;
2. If total size of logs are larger than 1Gb, oldest logs are deleted to fit this limit.

If you want to change this limits, create own `logback.xml`, edit lines:
```xml
<maxHistory>30</maxHistory>
<totalSizeCap>1GB</totalSizeCap>
```
And specify your logback's config (see above).


## Levels of logging

1. `OFF` - logging is disabled. It's useful when you want to disable file or STDOUT logs;
2. `ERROR` - severe errors. Please read this messages; 
3. `WARN` - warning messages. The Node can work, but it'd better to check the problem;
4. `INFO` - important messages. System works normally;
5. `DEBUG` - an information for debugging;
6. `TRACE` - an information for debugging, when DEBUG doesn't help (rare cases).

Lower levels of logging are included the higher. For example, `DEBUG` includes itself and all higher levels: `INFO`, `WARN` and `ERROR`.
