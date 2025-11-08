---
title: 关于数学的一些有趣讨论（二：反直觉现象）
published: 2025-11-08
pinned: false
description: 接着上一部分，延伸到数学中的反直觉现象。
tags: [数学, 反直觉, 讨论]
category: 随笔
licenseName: "CC BY-NC-SA 4.0"
author: Milk
draft: false
---

:::tip
本文是 [关于数学的一些有趣讨论（一：圆周率）](https://milk2715093695.github.io/posts/math-discussion/) 的续篇，主要讨论数学中的反直觉现象。
:::

关于数学中反直觉现象的探讨，同样来自于之前的这个话题。

当时我正在向其他人科普第一部分中所述的内容，当然也收到了一些反驳。对于这种需要严谨性的场合，我并不讨厌反驳。但是，很多人在反驳的时候，不是靠眼睛的推导，而是依赖于自己的直觉。直觉在日常生活中非常有效，但在数学的抽象世界里，它却有时会误导我们。例如，直觉可能会让人认为某些看似简单的命题必然成立，或者认为某些极端情况不可能发生，但严格证明往往显示结果完全相反。以下我会举几个例子（尽管未必和 $\pi$ 有关）。

## 目录

- [目录](#目录)
- [1. Borwein 积分](#1-borwein-积分)
  - [1.1. I1](#11-i1)
  - [1.2. 其他 I](#12-其他-i)
  - [1.3. 规律？](#13-规律)
  - [1.4. 解释](#14-解释)

## 1. Borwein 积分

这个相关的内容，其实 3blue1brown（[Youtube](https://www.youtube.com/@3blue1brown)、[Bilibili](https://space.bilibili.com/88461692)）已经讲的很明白了，所以我写这部分主要是验证自己的学习情况，详情可以参考这个视频：

<iframe width="100%" height="468" src="//player.bilibili.com/player.html?bvid=BV18e4y1u7BH&p=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" &autoplay=0> </iframe>

**强烈推荐 3Blue1Brown，他的科普清晰明了，可视化也很好。**

Borwein 积分是指：

$$
I_n = \int_{-\infty}^{\infty} \prod\limits_{k=1}^n \frac{\sin(\frac{x}{2k-1})}{\frac{x}{2k-1}} \, dx
$$

:::note
准确来说，积分上下限带有 $\pm \infty$ 的反常积分上下限应该用 $\lim_{a \to \infty}$ 来表示，但为了方便，我们直接用 $\infty$。这一点不严谨我们暂时忽略。
:::

### 1.1. I1

首先，我们来看 $I_1$：

$$
I_1 = \int_{-\infty}^{\infty} \frac{\sin x}{x} \, dx
$$

![I1 被积函数的图像](1.webp)

![I1 的结果](2.webp)

我们先用**初等方法**（这里指的是不使用高级工具）来推导这个积分，用作微积分练习题。:spoiler[同时也留个悬念，否则容易直接看出来。]

注意到，$\frac{\sin x}{x}$ 是一个偶函数，所以：

$$
I_1 = 2 \int_{0}^{\infty} \frac{\sin x}{x} \, dx
$$

定义：

$$
\begin{aligned}
    I(\alpha) &= \int_{0}^{\infty} \frac{\sin x}{x} e^{-\alpha x} \, dx \\
    &= \int_{0}^{\infty} \frac{\sin x - \sin(0)}{x} e^{-\alpha x} \, dx \\
    &= \int_{0}^{\infty} \int_0^1 cos(tx) \, dt \, e^{-\alpha x} \, dx \\
    &= \int_0^1 \int_{0}^{\infty} cos(tx) e^{-\alpha x} \, dx \, dt
\end{aligned}
$$

接下来，就是经典的分部积分，令：

$$
\begin{aligned}
    J &= \int cos(tx) e^{-\alpha x} \, dx \\
    &= - \frac{1}{\alpha} \int cos(tx) \, de^{-\alpha x} \\
    &= - \frac{1}{\alpha} \left[ cos(tx) e^{-\alpha x} - \int e^{-\alpha x} dcos(tx) \right] \\
    &= - \frac{1}{\alpha} \left[ cos(tx) e^{-\alpha x} + t \int sin(tx) e^{-\alpha x} \, dx \right] \\
\end{aligned}
$$

同样，令：

$$
\begin{aligned}
    K &= \int sin(tx) e^{-\alpha x} \, dx \\
    &= - \frac{1}{\alpha} \int sin(tx) \, de^{-\alpha x} \\
    &= - \frac{1}{\alpha} \left[ sin(tx) e^{-\alpha x} - \int e^{-\alpha x} dsin(tx) \right] \\
    &= - \frac{1}{\alpha} \left[ sin(tx) e^{-\alpha x} - t \int cos(tx) e^{-\alpha x} \, dx \right] \\
\end{aligned}
$$

于是有：

$$
J = - \frac{1}{\alpha} \left[ cos(tx) e^{-\alpha x} + \frac{t}{\alpha} \left( sin(tx) e^{-\alpha x} + t J \right) \right]
$$

解得：

$$
J = \frac{-t sin(tx) e^{-\alpha x} - \alpha \cos(tx) e^{-\alpha x}}{\alpha^2 + t^2}
$$

代入上下限：

$$
\int_{0}^{\infty} cos(tx) e^{-\alpha x} \, dx = \frac{\alpha}{\alpha^2 + t^2}
$$

回代：
$$
\begin{aligned}
    I(\alpha) &= \int_0^1 \int_{0}^{\infty} cos(tx) e^{-\alpha x} \, dx \, dt \\
    &= \int_0^1 \frac{\alpha}{\alpha^2 + t^2} \, dt \\
    &= \arctan(\frac{1}{\alpha})
\end{aligned}
$$

取极限 $\lim_{\alpha \to 0} I(\alpha)$：

$$
\lim_{\alpha \to 0} I(\alpha) = \frac{\pi}{2}
$$

所以：

$$
I_1 = 2 \int_{0}^{\infty} \frac{\sin x}{x} \, dx = \pi
$$

这就是著名的 Dirichlet 积分。

### 1.2. 其他 I

总而言之，Borwein 积分的前面几项是：

$$
\begin{cases}
    I_1 = \int_{-\infty}^{\infty} \frac{\sin x}{x} \, dx = \pi \\
    I_2 = \int_{-\infty}^{\infty} \frac{\sin x}{x} \frac{\sin(x/3)}{x/3} \, dx = \pi \\
    I_3 = \int_{-\infty}^{\infty} \frac{\sin x}{x} \frac{\sin(x/3)}{x/3} \frac{\sin(x/5)}{x/5} \, dx = \pi \\
    \cdots \\
    I_7 = \pi
\end{cases}
$$

### 1.3. 规律？

看到这里，你是否认为你发现了一个伟大的规律：

$$
I_n = \int_{-\infty}^{\infty} \prod\limits_{k=1}^n \frac{\sin(\frac{x}{2k-1})}{\frac{x}{2k-1}} \, dx = \pi
$$

然而，事实上，$I_7 \ne \pi$...

### 1.4. 解释
