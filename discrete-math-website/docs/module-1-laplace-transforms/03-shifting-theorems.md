---
id: shifting-theorems
title: "Shifting Theorems"
sidebar_label: "Shifting Theorems"
---

## First Shifting Theorem (s-Shifting)

The first shifting theorem, also known as the s-shifting theorem, states that if the Laplace transform of $f(t)$ is $F(s)$, then the Laplace transform of $e^{at}f(t)$ is $F(s-a)$.

### Theorem

$$
\mathcal{L}\{e^{at} f(t)\} = F(s-a)
$$

### Proof

$$
\mathcal{L}\{e^{at} f(t)\} = \int_0^\infty e^{-st} (e^{at} f(t)) \,dt = \int_0^\infty e^{-(s-a)t} f(t) \,dt
$$

This is the definition of the Laplace transform of $f(t)$, with $s$ replaced by $s-a$. Therefore, the result is $F(s-a)$.

### Example

Find the Laplace transform of $f(t) = e^{3t}\cos(2t)$.

We know that $\mathcal{L}\{\cos(2t)\} = \frac{s}{s^2+4} = F(s)$.

Using the first shifting theorem with $a=3$, we get:

$$
\mathcal{L}\{e^{3t}\cos(2t)\} = F(s-3) = \frac{s-3}{(s-3)^2+4}
$$

## Second Shifting Theorem (t-Shifting)

The second shifting theorem, or t-shifting theorem, is used to find the Laplace transform of a function that has been shifted in the t-domain. It involves the unit step function, $u(t-a)$.

### Theorem

If $\mathcal{L}\{f(t)\} = F(s)$, then

$$
\mathcal{L}\{f(t-a)u(t-a)\} = e^{-as}F(s)
$$

where $u(t-a)$ is the Heaviside step function:
$u(t-a) = \begin{cases} 0 & t < a \\ 1 & t \ge a \end{cases}$

### Example

Find the Laplace transform of $g(t) = (t-2)^3 u(t-2)$.

Here, $f(t) = t^3$ and $a=2$. We know that $\mathcal{L}\{t^3\} = \frac{3!}{s^4} = \frac{6}{s^4} = F(s)$.

Using the second shifting theorem:

$$
\mathcal{L}\{(t-2)^3 u(t-2)\} = e^{-2s}F(s) = e^{-2s}\frac{6}{s^4}
$$

### Exercises

1. Find the Laplace transform of $f(t) = e^{-2t}\sin(4t)$.
2. Find the inverse Laplace transform of $F(s) = \frac{e^{-3s}}{s^2}$.

### Solutions

1. $\mathcal{L}\{\sin(4t)\} = \frac{4}{s^2+16} = F(s)$.  Using the first shifting theorem with $a=-2$, we get $\mathcal{L}\{e^{-2t}\sin(4t)\} = F(s-(-2)) = F(s+2) = \frac{4}{(s+2)^2+16}$.
2. We have $F(s) = e^{-3s} \frac{1}{s^2}$. Here $a=3$ and the unshifted transform is $\frac{1}{s^2}$. We know that $\mathcal{L}^{-1}\{\frac{1}{s^2}\} = t = f(t)$. Using the second shifting theorem, the inverse transform is $f(t-3)u(t-3) = (t-3)u(t-3)$.
