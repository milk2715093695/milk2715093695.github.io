---
title: 关于数学的一些有趣讨论（三：一个有趣的数列和它的性质）
published: 2025-11-04
pinned: false
description: 来自一位 b 站网友在学习数列期间自己设计的一个题目。
tags: [数学, 数列, 证明]
category: 随笔
licenseName: "CC BY-NC-SA 4.0"
author: Milk
draft: false
---

令 $\{ a_n \}_{n \ge 1}$ 为正整数数列，满足 $a_1 = 1$，记 $S_n = \sum\limits_{k=1}^n a_k$，$A_n = \{ a_1, a_2, \dots, a_n \}$。对于 $n \ge 2$，$a_n$ 为满足以下条件的最小正整数：

1. $a_n \notin A_{n-1}$
2. $n \mid (S_{n-1} + a_n)$

~~☝️🤓注意力惊人的读者不难发现这个其实就是[A01944](https://oeis.org/A019444)。~~

证明或推翻：$a_i = j \Leftrightarrow a_j = i$。

## 目录

- [目录](#目录)
- [题目背景](#题目背景)
- [1. 观察](#1-观察)
- [2. 编程验证](#2-编程验证)
- [3. 证明](#3-证明)
  - [3.1. 转化](#31-转化)
  - [3.2. 另一个数列](#32-另一个数列)
    - [3.2.1. αn 的性质](#321-αn-的性质)
  - [3.3. 引理 1：原数列的相关性质](#33-引理-1原数列的相关性质)
  - [3.4. 引理 2：原数列的其他性质](#34-引理-2原数列的其他性质)
- [附录](#附录)
  - [附录 A. 计算数列前 n 项的 Python 代码](#附录-a-计算数列前-n-项的-python-代码)
- [参考文献](#参考文献)

## 题目背景

这道题是我在 B 站视频 [【数学杂谈】为什么我不做野题](https://www.bilibili.com/video/BV1DiNxzHE1T) 的评论区看到的，是这位网友在学习数学竞赛期间自己想到的题目，因此不知道命题的真伪。

评论原文：
> 说到野题，我想起本高中生搞数竞时yy出的题：数列满足a1=1，an为满足Sn可被n整除且不在前n-1项出现的最小正整数，证明ai=j等价于aj=i，有没有懂的大佬看一下这个问题。

## 1. 观察

首先列出这个数列的前几项：

| $n$ | $a_n$ | $S_n = \sum\limits_{k=1}^n a_k$ |
| :-: | :---: | :-----------------------------: |
|  1  |   1   |                1                |
|  2  |   3   |                4                |
|  3  |   2   |                6                |
|  4  |   6   |                12               |
|  5  |   8   |                20               |
|  6  |   4   |                24               |
|  7  |   11  |                35               |
|  8  |   5   |                40               |
|  9  |   14  |                54               |
|  10 |   16  |                70               |

在表格中看起来似乎 $a_i = j$ 与 $a_j = i$ 是等价的。

## 2. 编程验证

这个时候我还不是很确定这个命题到底是真是假，所以决定通过代码先验证以下前面若干项是否成立（算法并不高效，但是已经够用了）：

[附录 A. 计算数列前 n 项的 Python 代码](#附录-a-计算数列前-n-项的-python-代码)

经过验证，在前 10000 项中，命题成立，这个时候就比较确信这个命题是正确的了。

## 3. 证明

### 3.1. 转化

首先，为了方便之后的证明，我们用函数表示数列，例如，定义 $f(n) = a_n, n \in \mathbb{N}^+$，这是因为下标表示如果发生嵌套会导致可读性很差

### 3.2. 另一个数列

先抛开这个要证明的数列不谈，看看另一个数列。

:spoiler[~~不要问这个数列怎么想到的，因为我也不知道。~~]

定义：

$\alpha_1 = 1$，$n_k = \frac{\sum\limits_{i=1}^k \alpha_i}{k}$，$\Alpha_i = \{ \alpha_1, \alpha_2, \dots, \alpha_i \}$，有：

$$
\alpha_{k+1} = \begin{cases}
    n_k, & \text{若 } n_k \notin \Alpha_k \\
    n_k + k + 1, & \text{若 } n_k \in \Alpha_k
\end{cases}
$$

同样的，我们也列出这个数列的前 10 项：

| $k$ | $\alpha_k$ | $S_k = \sum\limits_{i=1}^{k} \alpha_i$ | $n_k = \frac{S_k}{k}$ |
| :-: | :---: | :------------------------: | :-----------: |
|  1  |   1   |              1             |       1       |
|  2  |   3   |              4             |      2       |
|  3  |   2   |              6             |       2       |
|  4  |   6   |             12             |      3       |
|  5  |   8   |             20             |       4       |
|  6  |   4   |             24             |      4       |
|  7  |   11  |             35             |       5       |
|  8  |   5   |             40             |      5       |
|  9  |   14  |             54             |       6       |
|  10 |   16  |             70             |      7       |

可以明显感觉到，$a_n$ 大概率和 $\alpha_n$ 是等价的。

定义 $g(k) = \alpha_k$，$h(k) = n_k$。

#### 3.2.1. αn 的性质

不难发现，$h(n)$ 总是一个正整数，以下用归纳法证明：

$n = 1$ 的情景显然成立。

$$
\begin{aligned}
h(m + 1) &= \frac{m \cdot h(m) + g(m + 1)}{m + 1} \\
&= \begin{cases}
    h(m), & \text{若 } h(m) \notin \Alpha_m \\
    h(m) + 1, & \text{若 } h(m) \in \Alpha_m
\end{cases} \\
&\in \mathbb{N}^+
\end{aligned}
$$

那么由数学归纳法，$h(n)$ 总是一个正整数。

在这个简单的归纳中，不难发现其他几个性质：

1. $h(n)$ 是单调不减的
2. $h(n) = \begin{cases}h(n), & \text{当且仅当 } g(n + 1) = h(n) \\ h(n) + 1, & \text{当且仅当 } g(n + 1) = h(n) + n + 1 \end{cases}$
3. $h(n) \le n$（这是因为 $h(n)$ 每次增加的不超过 $1$）

### 3.3. 引理 1：原数列的相关性质

考虑到一个看起来和原数列等价的数列具有这些性质，我们对原数列也进行证明，同样地，我们用 $f(n)$ 表示 $a_n$，用 $h(n)$ 表示 $\frac{S_n}{n}$。

关于这里 $h(n)$ 重复使用的问题不必担心，**从现在开始，关于另一个数列的 $h(n)$ 的定义将被废止，此后的 $h(n)$ 均在原数列中定义**。

<br>

目标：归纳证明

1. $h(n)$ 是单调不减的
2. $h(n) = \begin{cases}h(n), & \text{当且仅当 } g(n + 1) = h(n) \\ h(n) + 1, & \text{当且仅当 } g(n + 1) = h(n) + n + 1 \end{cases}$
3. $h(n) \le n$（这是因为 $h(n)$ 每次增加的不超过 $1$）

<br>

对于前几项的验证不再赘述，感兴趣的读者可以自行验证。

若三条性质对任意 $1 \le j \le n$ 成立，则当 $j = n + 1$ 时，有：

$n + 1 \mid n \cdot h(n) + f(n + 1)$

<br>

接下来做分类讨论：

1. $f(n + 1) < h(n)$
   
   因为有 $n + 1 \mid (n + 1) \cdot h(n)$ 成立
   
   那么 $n + 1 \mid (n + 1) \cdot h(n) - n \cdot h(n) - f(n + 1) = h(n) - f(n + 1)$
   
   又因为 $f(n + 1) < h(n)$，故 $h(n) \ge f(n + 1) + n + 1 \ge n + 1$，与归纳假设 $h(n) \le n$ 矛盾，故不成立。

2. $f(n + 1) \ge h(n)$

    1. $h(n) \notin \{ f(1), f(2), \dots, f(n) \}$

        因为当 $f(n + 1) = h(n)$ 时，有 $n + 1 \mid n \cdot h(n) + f(n + 1)$ 成立。

        而 $f(n + 1) \ge h(n)$，考虑到 $f(n + 1)$ 是最小的满足 $n + 1 \mid n \cdot h(n) + f(n + 1)$ 的正整数。
        
        所以有 $f(n + 1) = h(n)$。

    2. $h(n) \in \{ f(1), f(2), \dots, f(n) \}$

        反设 $h(n) + n + 1$ 已经被占用了，即 $\exists j \le n, \quad f(j) = h(n) + n + 1$。

        根据归纳假设我们知道，$f(j)$ 必然为 $h(j - 1)$ 和 $h(j - 1) + j$ 之一。

        1. $h(n) + n + 1 = f(j) = h(j - 1)$

            那么有 $h(n) = h(j - 1) - n - 1 \le j - 1 - n - 1 < 0$，这与 $f(n)$ 是正整数数列矛盾。

        2. $h(n) + n + 1 = f(j) = h(j - 1) + j$

            那么有 $h(n) - h(j - 1) = j - n - 1 < 0$，这与归纳假设中 $h(n)$ 单调不减矛盾。

        综上所述，反证假设不成立，那么 $h(n) + n + 1$ 并没有被占用。

        又因为 $f(n + 1) \ge h(n)$，且 $h(n)$ 已被占用，故 $f(n + 1) \ge h(n) + n + 1$。
    
        而 $f(n) = h(n) + n + 1$ 能让 $n + 1 \mid n \cdot h(n) + f(n + 1)$ 成立。

        故 $f(n + 1) = h(n) + n + 1$。

综上所述，当归纳假设成立时，$h(n + 1)$ 也成立。

根据数学归纳法，性质得证。

<br>

:::note
其实到目前为止已经可以说明原数列和 $\alpha_n$ 是等价的了，不过后续的证明其实用不到这一点，所以就不再赘述了。
:::

### 3.4. 引理 2：原数列的其他性质

## 附录

### 附录 A. 计算数列前 n 项的 Python 代码


```python
from typing import List, Set


def calculate_sequence(N: int) -> List[int]:
    sequence_list: List[int] = []
    sequence_set: Set[int] = set()
    sequence_sum = 0
    sequence_max = None
    sequence_max_contiguous = None  # 用来减小搜索范围

    for i in range(1, N + 1):
        search_min = 1 if not sequence_max_contiguous else sequence_max_contiguous + 1
        search_max = 1 if not sequence_max else sequence_max + 1
        search_max += i  # 模 i 不可能出现在更大的位置

        for j in range(search_min, search_max):
            if j in sequence_set:
                continue

            if (sequence_sum + j) % i == 0:
                sequence_list.append(j)
                sequence_set.add(j)
                sequence_sum += j

                if not sequence_max or j > sequence_max:
                    sequence_max = j

                if not sequence_max_contiguous:
                    sequence_max_contiguous = j
                elif sequence_max_contiguous and j == sequence_max_contiguous + 1:
                    sequence_max_contiguous = j

                break

    return sequence_list


if __name__ == "__main__":
    N = 10000

    sequence_list = calculate_sequence(N)
    for i in range(1, N + 1):
        if sequence_list[i - 1] - 1 >= len(sequence_list):
            continue
        if sequence_list[sequence_list[i - 1] - 1] != i:
            print(f"失败的序号: {i}, 值: {sequence_list[i - 1]}")
```

## 参考文献

[1] B. J. Venkatachala, "A Curious Bijection on Natural Numbers," *Journal of Integer Sequences*, Vol. 12 (2009), Article 09.8.1. [在线访问](https://cs.uwaterloo.ca/journals/JIS/VOL12/Venkatachala/venkatachala2.html)
