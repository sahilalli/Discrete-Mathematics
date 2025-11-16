---
id: differentiation-and-integration-of-transforms
title: "Differentiation and Integration of Transforms"
sidebar_label: "Differentiation and Integration of Transforms"
---

## Differentiation of Transforms

This property relates the differentiation of a Laplace transform with respect to $s$ to the multiplication of the original function by $t$.

### Theorem

If $\mathcal{L}\{f(t)\} = F(s)$, then

$$
\mathcal{L}\{t^n f(t)\} = (-1)^n \frac{d^n}{ds^n} F(s)
$$

For $n=1$, this becomes:

$$
\mathcal{L}\{t f(t)\} = -F'(s)
$$

### Example

Find the Laplace transform of $f(t) = t\sin(2t)$.

Let $g(t) = \sin(2t)$, so $G(s) = \mathcal{L}\{g(t)\} = \frac{2}{s^2+4}$.
Then $f(t) = t g(t)$. Using the theorem with $n=1$:

$$
\mathcal{L}\{t\sin(2t)\} = -G'(s) = -\frac{d}{ds}\left(\frac{2}{s^2+4}\right)
$$

Using the quotient rule:
$$
= -\frac{(s^2+4)(0) - 2(2s)}{(s^2+4)^2} = -\frac{-4s}{(s^2+4)^2} = \frac{4s}{(s^2+4)^2}
$$

## Integration of Transforms

This property relates the integration of a Laplace transform with respect to $s$ to the division of the original function by $t$.

### Theorem

If $\mathcal{L}\{f(t)\} = F(s)$ and $\lim_{t \to 0^+} \frac{f(t)}{t}$ exists, then

$$
\mathcal{L}\left\{\frac{f(t)}{t}\right\} = \int_s^\infty F(\sigma) \,d\sigma
$$

### Example

Find the Laplace transform of $f(t) = \frac{\sin(t)}{t}$.

Let $g(t) = \sin(t)$, so $G(s) = \mathcal{L}\{g(t)\} = \frac{1}{s^2+1}$.
Then $f(t) = \frac{g(t)}{t}$. Using the theorem:

$$
\mathcal{L}\left\{\frac{\sin(t)}{t}\right\} = \int_s^\infty G(\sigma) \,d\sigma = \int_s^\infty \frac{1}{\sigma^2+1} \,d\sigma
$$

The integral of $\frac{1}{\sigma^2+1}$ is $\arctan(\sigma)$. So,

$$
= [\arctan(\sigma)]_s^\infty = \lim_{b \to \infty} \arctan(b) - \arctan(s)
$$

Since $\lim_{b \to \infty} \arctan(b) = \frac{\pi}{2}$, the result is:

$$
= \frac{\pi}{2} - \arctan(s)
$$

Using the identity $\arctan(s) + \text{arccot}(s) = \frac{\pi}{2}$, this can also be written as $\text{arccot}(s)$.

### Exercises

1. Find the Laplace transform of $t\cos(3t)$.
2. Find the Laplace transform of $\frac{e^t - 1}{t}$.

### Solutions

1. Let $g(t)=\cos(3t)$, $G(s) = \frac{s}{s^2+9}$.
   $\mathcal{L}\{t\cos(3t)\} = -G'(s) = -\frac{(s^2+9)(1) - s(2s)}{(s^2+9)^2} = -\frac{9-s^2}{(s^2+9)^2} = \frac{s^2-9}{(s^2+9)^2}$.
2. Let $g(t) = e^t - 1$, $G(s) = \frac{1}{s-1} - \frac{1}{s}$.
   $\mathcal{L}\{\frac{g(t)}{t}\} = \int_s^\infty (\frac{1}{\sigma-1} - \frac{1}{\sigma}) d\sigma = [\ln(\sigma-1) - \ln(\sigma)]_s^\infty = \left[\ln\left(\frac{\sigma-1}{\sigma}\right)\right]_s^\infty$.
   $\lim_{\sigma\to\infty} \ln\left(\frac{\sigma-1}{\sigma}\right) = \ln(1) = 0$.
   So the result is $0 - \ln\left(\frac{s-1}{s}\right) = \ln\left(\frac{s}{s-1}\right)$.
