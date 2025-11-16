---
id: laplace-transforms-and-inverse-transforms
title: "Laplace Transforms and Inverse Transforms"
sidebar_label: "Laplace Transforms and Inverse Transforms"
---

## Introduction to Laplace Transforms

The Laplace transform is a powerful mathematical tool used to solve differential equations. It transforms a function of a real variable $t$ (often time) to a function of a complex variable $s$ (frequency).

### Definition

The Laplace transform of a function $f(t)$, denoted as $\mathcal{L}\{f(t)\}$ or $F(s)$, is defined by the integral:

$$
F(s) = \mathcal{L}\{f(t)\} = \int_0^\infty e^{-st} f(t) \,dt
$$

This integral is a one-sided or unilateral Laplace transform, as the integration is from $0$ to $\infty$.

### Example: Laplace Transform of $f(t) = 1$

Let's find the Laplace transform of the constant function $f(t) = 1$.

$$
\mathcal{L}\{1\} = \int_0^\infty e^{-st} \cdot 1 \,dt = \left[ -\frac{1}{s}e^{-st} \right]_0^\infty = \lim_{b \to \infty} \left( -\frac{1}{s}e^{-sb} \right) - \left( -\frac{1}{s}e^{-s \cdot 0} \right)
$$

For the limit to exist, we must have $s > 0$. In this case, $e^{-sb} \to 0$ as $b \to \infty$. Thus,

$$
\mathcal{L}\{1\} = 0 - \left( -\frac{1}{s} \right) = \frac{1}{s}
$$

### Inverse Laplace Transforms

The inverse Laplace transform, denoted as $\mathcal{L}^{-1}\{F(s)\}$, converts a function in the $s$-domain back to a function in the $t$-domain.

$$
f(t) = \mathcal{L}^{-1}\{F(s)\}
$$

### Example: Inverse Laplace Transform of $F(s) = \frac{1}{s}$

From our previous example, we know that $\mathcal{L}\{1\} = \frac{1}{s}$. Therefore,

$$
\mathcal{L}^{-1}\left\{\frac{1}{s}\right\} = 1
$$

### Exercises

1. Find the Laplace transform of $f(t) = e^{at}$.
2. Find the inverse Laplace transform of $F(s) = \frac{1}{s-a}$.

### Solutions

1. $\mathcal{L}\{e^{at}\} = \int_0^\infty e^{-st} e^{at} \,dt = \int_0^\infty e^{-(s-a)t} \,dt = \frac{1}{s-a}$ for $s > a$.
2. $\mathcal{L}^{-1}\left\{\frac{1}{s-a}\right\} = e^{at}$.
