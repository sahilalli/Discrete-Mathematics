---
id: linearity-property
title: "Linearity Property"
sidebar_label: "Linearity Property"
---

## Linearity Property of Laplace Transforms

One of the most important properties of the Laplace transform is its linearity. This property allows us to break down complex problems into simpler ones.

### Theorem

If $f(t)$ and $g(t)$ are two functions with Laplace transforms $F(s)$ and $G(s)$ respectively, and $a$ and $b$ are any constants, then:

$$
\mathcal{L}\{a f(t) + b g(t)\} = a \mathcal{L}\{f(t)\} + b \mathcal{L}\{g(t)\} = a F(s) + b G(s)
$$

### Proof

The proof follows directly from the definition of the Laplace transform and the linearity of integration:

$$
\mathcal{L}\{a f(t) + b g(t)\} = \int_0^\infty e^{-st} [a f(t) + b g(t)] \,dt
$$

$$
= \int_0^\infty (a e^{-st} f(t) + b e^{-st} g(t)) \,dt
$$

$$
= a \int_0^\infty e^{-st} f(t) \,dt + b \int_0^\infty e^{-st} g(t) \,dt
$$

$$
= a \mathcal{L}\{f(t)\} + b \mathcal{L}\{g(t)\} = a F(s) + b G(s)
$$

### Example

Find the Laplace transform of $f(t) = 3 \cdot 1 + 5e^{2t}$.

Using the linearity property, we have:

$$
\mathcal{L}\{3 \cdot 1 + 5e^{2t}\} = 3 \mathcal{L}\{1\} + 5 \mathcal{L}\{e^{2t}\}
$$

We already know that $\mathcal{L}\{1\} = \frac{1}{s}$ and $\mathcal{L}\{e^{at}\} = \frac{1}{s-a}$.  So, for $a=2$:

$$
\mathcal{L}\{e^{2t}\} = \frac{1}{s-2}
$$

Therefore,

$$
\mathcal{L}\{3 \cdot 1 + 5e^{2t}\} = 3 \cdot \frac{1}{s} + 5 \cdot \frac{1}{s-2} = \frac{3}{s} + \frac{5}{s-2}
$$

### Exercises

1. Find the Laplace transform of $f(t) = 4\cos(3t) - 2\sin(3t)$.
   (Hint: $\mathcal{L}\{\cos(at)\} = \frac{s}{s^2+a^2}$ and $\mathcal{L}\{\sin(at)\} = \frac{a}{s^2+a^2}$)
2. Find the inverse Laplace transform of $F(s) = \frac{5}{s} - \frac{3}{s-4}$.

### Solutions

1. $\mathcal{L}\{4\cos(3t) - 2\sin(3t)\} = 4\mathcal{L}\{\cos(3t)\} - 2\mathcal{L}\{\sin(3t)\} = 4\frac{s}{s^2+9} - 2\frac{3}{s^2+9} = \frac{4s-6}{s^2+9}$.
2. $\mathcal{L}^{-1}\left\{\frac{5}{s} - \frac{3}{s-4}\right\} = 5\mathcal{L}^{-1}\left\{\frac{1}{s}\right\} - 3\mathcal{L}^{-1}\left\{\frac{1}{s-4}\right\} = 5 \cdot 1 - 3e^{4t} = 5 - 3e^{4t}$.
