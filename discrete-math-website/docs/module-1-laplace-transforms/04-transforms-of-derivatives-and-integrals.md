---
id: transforms-of-derivatives-and-integrals
title: "Transforms of Derivatives and Integrals"
sidebar_label: "Transforms of Derivatives and Integrals"
---

## Transform of Derivatives

The Laplace transform of a derivative of a function $f(t)$ is related to the Laplace transform of the function itself, and the initial values of the function.

### First Derivative

$$
\mathcal{L}\{f'(t)\} = s\mathcal{L}\{f(t)\} - f(0) = sF(s) - f(0)
$$

### Second Derivative

$$
\mathcal{L}\{f''(t)\} = s^2\mathcal{L}\{f(t)\} - sf(0) - f'(0) = s^2F(s) - sf(0) - f'(0)
$$

### General Formula for the n-th Derivative

$$
\mathcal{L}\{f^{(n)}(t)\} = s^n F(s) - s^{n-1}f(0) - s^{n-2}f'(0) - \dots - f^{(n-1)}(0)
$$

This property is crucial for solving linear ordinary differential equations.

## Transform of Integrals

The Laplace transform of an integral of a function $f(t)$ is given by the following theorem.

### Theorem

If $\mathcal{L}\{f(t)\} = F(s)$, then

$$
\mathcal{L}\left\{\int_0^t f(\tau) \,d\tau\right\} = \frac{1}{s}F(s)
$$

### Example

Find the Laplace transform of the integral of $\sin(2t)$.

Let $f(t) = \sin(2t)$. We know that $\mathcal{L}\{\sin(2t)\} = \frac{2}{s^2+4} = F(s)$.

Therefore,
$$
\mathcal{L}\left\{\int_0^t \sin(2\tau) \,d\tau\right\} = \frac{1}{s} F(s) = \frac{1}{s} \cdot \frac{2}{s^2+4} = \frac{2}{s(s^2+4)}
$$

### Exercises

1. Given $f(t) = t^2$, find $\mathcal{L}\{f'(t)\}$ using the derivative theorem.
   (Hint: $f(0)=0$ and $\mathcal{L}\{t^2\} = \frac{2}{s^3}$)
2. Find the Laplace transform of $\int_0^t e^{3\tau}\cos(4\tau) d\tau$.

### Solutions

1. $f(t) = t^2 \implies f'(t) = 2t$.  Using the formula, $\mathcal{L}\{f'(t)\} = s\mathcal{L}\{t^2\} - f(0) = s\frac{2}{s^3} - 0 = \frac{2}{s^2}$.
   We can verify this: $\mathcal{L}\{2t\} = 2\mathcal{L}\{t\} = 2 \cdot \frac{1}{s^2} = \frac{2}{s^2}$.
2. Let $f(t) = e^{3t}\cos(4t)$.  First, find $F(s) = \mathcal{L}\{e^{3t}\cos(4t)\}$.
   We know $\mathcal{L}\{\cos(4t)\} = \frac{s}{s^2+16}$.  Using the first shifting theorem, $F(s) = \frac{s-3}{(s-3)^2+16}$.
   Now, using the integral theorem, $\mathcal{L}\left\{\int_0^t e^{3\tau}\cos(4\tau) d\tau\right\} = \frac{1}{s}F(s) = \frac{s-3}{s((s-3)^2+16)}$.
