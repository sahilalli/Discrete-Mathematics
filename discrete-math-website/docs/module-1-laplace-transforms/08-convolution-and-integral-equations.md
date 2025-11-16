---
id: convolution-and-integral-equations
title: "Convolution and Integral Equations"
sidebar_label: "Convolution and Integral Equations"
---

## Convolution

The convolution of two functions $f(t)$ and $g(t)$, denoted $(f * g)(t)$, is defined by the integral:

$$
(f * g)(t) = \int_0^t f(\tau)g(t-\tau) \,d\tau
$$

Convolution is a mathematical operation that expresses the amount of overlap of one function as it is shifted over another function.

## Convolution Theorem

The Convolution Theorem is a very powerful tool that provides a simple way to find the inverse Laplace transform of a product of two transforms.

### Theorem

If $\mathcal{L}\{f(t)\} = F(s)$ and $\mathcal{L}\{g(t)\} = G(s)$, then the Laplace transform of the convolution of $f(t)$ and $g(t)$ is the product of their individual Laplace transforms:

$$
\mathcal{L}\{(f * g)(t)\} = F(s)G(s)
$$

Conversely, the inverse Laplace transform of a product of two transforms is the convolution of the two individual inverse transforms:

$$
\mathcal{L}^{-1}\{F(s)G(s)\} = (f * g)(t)
$$

### Example

Find the inverse Laplace transform of $H(s) = \frac{1}{s(s^2+4)}$ using the convolution theorem.

Let $F(s) = \frac{1}{s}$ and $G(s) = \frac{1}{s^2+4}$.
We can find the inverse transforms of $F(s)$ and $G(s)$:
-   $f(t) = \mathcal{L}^{-1}\{F(s)\} = \mathcal{L}^{-1}\left\{\frac{1}{s}\right\} = 1$
-   $g(t) = \mathcal{L}^{-1}\{G(s)\} = \mathcal{L}^{-1}\left\{\frac{1}{s^2+4}\right\} = \frac{1}{2}\mathcal{L}^{-1}\left\{\frac{2}{s^2+4}\right\} = \frac{1}{2}\sin(2t)$

Now, we can find the inverse transform of $H(s)$ by convolving $f(t)$ and $g(t)$:
$$
h(t) = (f * g)(t) = \int_0^t f(\tau)g(t-\tau) \,d\tau = \int_0^t 1 \cdot \frac{1}{2}\sin(2(t-\tau)) \,d\tau
$$
$$
= \frac{1}{2} \int_0^t \sin(2t-2\tau) \,d\tau
$$
Let $u = 2t-2\tau$, so $du = -2d\tau$.
$$
= \frac{1}{2} \left[ \frac{1}{2}\cos(2t-2\tau) \right]_0^t = \frac{1}{4} [\cos(0) - \cos(2t)] = \frac{1}{4}(1-\cos(2t))
$$
So, $\mathcal{L}^{-1}\left\{\frac{1}{s(s^2+4)}\right\} = \frac{1}{4}(1-\cos(2t))$.

## Integral Equations

The convolution theorem is also useful for solving certain types of integral equations, particularly Volterra integral equations of the second kind, which have the form:
$$
y(t) = f(t) + \int_0^t g(t-\tau)y(\tau) \,d\tau
$$
This equation can be written using the convolution notation:
$$
y(t) = f(t) + (g * y)(t)
$$
Taking the Laplace transform of both sides gives:
$$
Y(s) = F(s) + G(s)Y(s)
$$
We can then solve for $Y(s)$:
$$
Y(s)(1 - G(s)) = F(s) \implies Y(s) = \frac{F(s)}{1-G(s)}
$$
The solution $y(t)$ is found by taking the inverse Laplace transform of $Y(s)$.

### Exercises

1. Find the inverse Laplace transform of $\frac{1}{(s-1)(s-2)}$ using convolution.
2. Solve the integral equation $y(t) = t + \int_0^t \sin(t-\tau)y(\tau) d\tau$.

### Solutions

1. $f(t) = e^t$, $g(t) = e^{2t}$.
   $(f*g)(t) = \int_0^t e^\tau e^{2(t-\tau)}d\tau = e^{2t} \int_0^t e^{-\tau} d\tau = e^{2t}[-e^{-\tau}]_0^t = e^{2t}(-e^{-t}+1) = e^{2t} - e^t$.
2. $Y(s) = \frac{1}{s^2} + \frac{1}{s^2+1} Y(s) \implies Y(s)(1 - \frac{1}{s^2+1}) = \frac{1}{s^2} \implies Y(s)(\frac{s^2}{s^2+1}) = \frac{1}{s^2} \implies Y(s) = \frac{s^2+1}{s^4} = \frac{1}{s^2} + \frac{1}{s^4}$.
   $y(t) = \mathcal{L}^{-1}\{\frac{1}{s^2} + \frac{1}{s^4}\} = t + \frac{t^3}{3!}$.
