---
title: 多格式文件：同一个文件可以是多个格式吗？
published: 2025-11-13
pinned: false
description: 想象一下，同一个文件，当后缀是 mp4 的时候能看到一个视频，后缀是 png 的时候是一个图片，后缀是 pdf 的时候是一个文档...
tags: [编程, 文件, 格式]
category: 实验
licenseName: "CC BY-NC-SA 4.0"
author: Milk
draft: false
---

[文件样本链接](https://wwwe.lanzouq.com/iZTlX3b2loqd)

[文件样本 MD5](https://wwwe.lanzouq.com/i32QG3b3ljib)

:::important
**安全声明**：为保证安全性请不要字节在生产环境从不可信来源运行/双击不知来源的文件，我的文件样本也未必可信。
:::

:::tip
为了正常上传到网盘，文件样本被压缩成了 `压缩包.zip`，请先解压得到名为 `output` 的无后缀文件后再操作。
:::

![output 文件](1.webp)

乍看之下，这是一个普通的文件，唯一的不寻常之处在于：它没有后缀名。

<br>

重命名这个文件，将它的后缀改为 `.mp4`，得到了 `output.mp4`：

![output.mp4](2.webp)

并且它完全可以正常播放，你可以看到我用 `figlet` 输出了 `hello, world`：

![播放 output.mp4](3.webp)

那么似乎很明了了：这个文件完全没有什么奇怪的，就是一个正常的 MP4 视频，只不过我把它的后缀去掉了！

但是事情真的有这么简单吗？:spoiler[废话，要是简单的话我为什么要写这篇文章。]

<br>

如果再把他改成 `output.png`：

![output.png](4.webp)

![打开 output.png](5.webp)

居然变成了一张图片？而且图片的内容和视频完全不同，变成了我的博客截图。

<br>

如果再改成 `output.pdf` 会发生什么呢？

![打开 output.pdf](6.webp)

居然又变成了一份文档，并且内容又一次和之前完全不一样，这次则是我的 FireFox 浏览器的主页。

<br>

再试试 `output.zip` 呢？

这次变成了一个压缩包，并且可以成功解压出一个目录和一个新的文件。

<br>

甚至还可以改成 `output.html`！改完之后双击或者从浏览器打开，甚至能看到一个网站。**这个 HTML 文件里面我放了彩蛋，所以就不展示了，希望读者自行体验。**

一个文件，它居然可以同时是 `mp4, png, pdf, zip, html`。那么，这是怎么做到的呢？

## 目录

- [目录](#目录)
- [1. 写作背景与免责声明](#1-写作背景与免责声明)
- [2. 思路讲解](#2-思路讲解)
  - [2.1. 一种可能的实现](#21-一种可能的实现)
  - [2.2. Polyglot 文件简介](#22-polyglot-文件简介)
  - [2.3. 正确的实现](#23-正确的实现)
  - [2.3.1. 电脑是怎么看待文件的](#231-电脑是怎么看待文件的)
  - [2.3.2. 文件魔数](#232-文件魔数)
  - [2.3.3. 文件类型选择](#233-文件类型选择)
    - [2.3.3.1. MP4 文件的格式](#2331-mp4-文件的格式)
- [附录](#附录)
  - [附录 A. Polyglot 代码](#附录-a-polyglot-代码)
    - [附录 A.1. Polyglot 代码作为 bash](#附录-a1-polyglot-代码作为-bash)
    - [附录 A.2. Polyglot 代码作为 PHP](#附录-a2-polyglot-代码作为-php)
    - [附录 A.3. Polyglot 代码作为 C](#附录-a3-polyglot-代码作为-c)
- [参考资料](#参考资料)

## 1. 写作背景与免责声明

我在 Bilibili 发现了 [一个视频](https://www.bilibili.com/video/BV18wshzSExd/)，里面的内容引起了我的兴趣，讲的就是本文的内容。

:::important
只是为了详细描述我的写作背景而提到了这个 Bilibili 视频，但是事实上本人强烈不推荐、以及从版权角度上反对这个视频，原因包括但不限于：机翻、转载投自制、未给出原视频链接、完全照搬。如果需要了解，请观看 [原创内容](https://www.youtube.com/watch?v=o7qx-wgl3jo)
:::

这个视频的风格和内容我十分喜欢，但是由于糟糕的翻译，比如：

![视频截图](7.webp)

这段将 PNG 翻译为“巴布亚新几内亚（Papua New Guinean）”，而这只是众多糟糕翻译中的一例，这导致整个视频令人完全看不懂。由于这个视频没有指明原视频的链接，我废了一番功夫找到了 [原视频](https://www.youtube.com/watch?v=o7qx-wgl3jo)，并认为十分有趣，由于国内的读者可能受限于英语能力或者糟糕机翻而无福享受，本人将其重新理解并写成博客。

:::tip
本文虽然受到原视频的启发，但是对于一些原视频没有提及的细节、以及一些原视频受限于长度无法展示的内容，我也会进行补充。

同时，不同于原视频使用 `javascript` 编写代码，本文使用 `python` 进行了重构，并且对其中一些可读性很差的地方进行了优化，同时对于某些算法可能有所改进，因此我认为本文可以算是原创。
:::

## 2. 思路讲解

### 2.1. 一种可能的实现

部分敏锐的读者也许会想：想要实现这种功能，也许可以让一段代码在在后台监听文件的变化，而动态地修改文件的内容。

但刚刚的演示读者完全可以在自己的机器上复现，而读者的机器上并没有我的后台代码正在运行，总不可能这个文件一旦被解压就会释放一个可以绕过读者的隐秘并执行吧？

事实上，刚才的效果完全依靠文件本身的特性来实现，这种文件也有一个名字：**Polyglot 文件（混合类型文件）**。

### 2.2. Polyglot 文件简介

![Polyglot](8.webp)

图片来源：[维基百科：Polyglot](https://en.wikipedia.org/wiki/Polyglot_%28computing%29)

不过这个名称通常用来指代的是：同时可以成为多种编程语言的合法代码的文件，例如：

[Polyglot 代码作为合法的 bash](#附录-a1-polyglot-代码作为-bash)

[Polyglot 代码作为合法的 PHP](#附录-a2-polyglot-代码作为-php)

[Polyglot 代码作为合法的 C](#附录-a3-polyglot-代码作为-c)

它同时是合法的 `bash, PHP, C`，它的构造方法就是巧妙的利用不同语言的不同注释方式。

所以构造 Polyglot 代码文件的关键几乎都是利用好注释，**这点很重要，它为我们构造 Polyglot 多媒体文件提供了指导思想。**

事实上，有些恶意软件也会通过 polyglot 文件传播。

### 2.3. 正确的实现

### 2.3.1. 电脑是怎么看待文件的

只要了解计算机的大概都知道，任何文件都是以二进制的形式存储在计算机上面的，计算机并不认识所谓“图片”，“视频”，所有文件操作其实都是对二进制进行的。

那文件后缀到底有什么用呢？其实它的作用就是：告诉计算机用什么程序处理，乃至用哪个函数处理这个文件：用图片查看器处理 `.png, .ico, .jpg`，用视频播放器处理 `.mp4, .mov`，用浏览器查看 `.html`，但是浏览器也可以查看各种图片……

因此，文件后缀对于计算机来说其实并没有什么意义，你完全可以手动右键选择处理方式，文件后缀存在的目的只是为了给你一个方便，让你不再需要指定用什么程序来处理这个文件。而我们要做的，就是构造一种二进制序列，让它可以是多种格式的合法文件。

比如，其实可以完全不重命名我的 `output`，直接右键选择打开方式使用图片查看器，自然也能看到图片。

也许会有读者提出疑问：尽管文件后缀是用来指定处理程序的，但是也可以有其他用途啊，比如，既然一种程序可以处理多种后缀，那后缀能不能用来指定处理的方式呢？其实是可以的，但是大部分软件并不这么做：当你把一个 PNG 文件的后缀改为 `.jpg` 而不改变实际格式，理论上程序用 `.jpg` 的方式处理就会出错，但是通常来说，当你用图片查看器打开的时候，还是能正常的看到图片。

那么很自然的，既然一种程序可以处理多种后缀，而具体的处理方式又和后缀无关，那么必然有什么文件内部的东西告诉了程序用什么方式处理。这种东西就是**文件魔数（magic number）**。

### 2.3.2. 文件魔数

用二进制/十六进制编辑器打开任何一个 PNG 文件，你大概会看到这样的东西：

![PNG 文件](9.webp)

PNG 文件的前四个字节永远是 `\x89 \x50 \x4E \x47 \x0D \x0A \x1A \x0A`。

而如果把它改成这个值以外的任何值，都会让图片查看器崩溃：

![修改后的 PNG](10.webp)

![图片查看器崩溃](11.webp)

类似的，大部分的多媒体文件的魔数都位于前几个字节：

| 文件格式            | 魔数（Hex）                   | 说明                         |
| --------------- | ------------------------- | -------------------------- |
| **PNG**         | `89 50 4E 47 0D 0A 1A 0A` | 最经典的标志，以 `89 50 4E 47` 开头。 |
| **JPG / JPEG**  | `FF D8 FF`                | 以 FF D8 开头，以 `FF D9` 结束。   |
| **GIF87a**      | `47 49 46 38 37 61`       | ASCII 为 `GIF87a`。          |
| **GIF89a**      | `47 49 46 38 39 61`       | ASCII 为 `GIF89a`。          |
| **BMP**         | `42 4D`                   | ASCII 为 `BM`。              |
| **WEBP (RIFF)** | `52 49 46 46`             | RIFF 容器，以 RIFF/WEBP 包含。    |
| **ICO**         | `00 00 01 00`             | 图标文件。                      |

但是等等……这岂不是说无论如何构造，总会在魔数上发生冲突？

### 2.3.3. 文件类型选择

事实上，如果我们选用的全都为魔数在头部的文件类型，那这个任务就不可能完成了，但是万幸：

1. 有一些文件的魔数可以不在前几个字节。
2. 另一些文件则没有魔数。
3. 还有的文件，尽管标准规定魔数在头部，但是解析器的宽容让它可以整体往后移动。

而 MP4 就恰好属于第一类。

#### 2.3.3.1. MP4 文件的格式





## 附录

### 附录 A. Polyglot 代码

#### 附录 A.1. Polyglot 代码作为 bash

```bash
#define a /*
#<?php
echo "\010Hello, world!\n";// 2> /dev/null > /dev/null \ ;
// 2> /dev/null; x=a;
$x=5; // 2> /dev/null \ ;
if (($x))
// 2> /dev/null; then
return 0;
// 2> /dev/null; fi
#define e ?>
#define b */
#include <stdio.h>
#define main() int main(void)
#define printf printf(
#define true )
#define function
function main()
{
printf "Hello, world!\n"true/* 2> /dev/null | grep -v true*/;
return 0;
}
#define c /*
main
#*/
```

#### 附录 A.2. Polyglot 代码作为 PHP

```php
#define a /*
#<?php
echo "\010Hello, world!\n";// 2> /dev/null > /dev/null \ ;
// 2> /dev/null; x=a;
$x=5; // 2> /dev/null \ ;
if (($x))
// 2> /dev/null; then
return 0;
// 2> /dev/null; fi
#define e ?>
#define b */
#include <stdio.h>
#define main() int main(void)
#define printf printf(
#define true )
#define function
function main()
{
printf "Hello, world!\n"true/* 2> /dev/null | grep -v true*/;
return 0;
}
#define c /*
main
#*/
```

#### 附录 A.3. Polyglot 代码作为 C

```c
#define a /*
#<?php
echo "\010Hello, world!\n";// 2> /dev/null > /dev/null \ ;
// 2> /dev/null; x=a;
$x=5; // 2> /dev/null \ ;
if (($x))
// 2> /dev/null; then
return 0;
// 2> /dev/null; fi
#define e ?>
#define b */
#include <stdio.h>
#define main() int main(void)
#define printf printf(
#define true )
#define function
function main()
{
printf "Hello, world!\n"true/* 2> /dev/null | grep -v true*/;
return 0;
}
#define c /*
main
#*/
```

## 参考资料

1. PortalRunner. *Renaming This File Changes what it Does* [V/OL]. YouTube, 2024-08-10. [在线访问](https://www.youtube.com/watch?v=o7qx-wgl3jo)
2. Wikipedia contributors. *Polyglot (computing)*. Wikipedia, the Free Encyclopedia. [在线访问](https://en.wikipedia.org/wiki/Polyglot_%28computing%29)

