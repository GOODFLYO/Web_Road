<?php
    if(isset($_GET["name"]) && isset($_GET["url"])) {
        $name = htmlspecialchars($_GET["name"]);
        $url = htmlspecialchars($_GET["url"]);
        // 输出欢迎信息
        echo "欢迎访问 $name! 本站网址为：$url";
    } else {
        echo "你好！欢迎访问我们的网站。";
    }
?>