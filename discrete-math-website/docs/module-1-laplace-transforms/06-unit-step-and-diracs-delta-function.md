---
id: unit-step-and-diracs-delta-function
title: "Unit Step Function and Dirac's Delta Function"
sidebar_label: "Unit Step and Dirac's Delta Function"
---

## Unit Step Function (Heaviside Function)

The unit step function, or Heaviside function, $u(t-a)$, is a discontinuous function that is 0 for $t<a$ and 1 for $t \ge a$. It's used to model functions that are switched on or off at a certain time.

### Definition

$$
u(t-a) = \begin{cases} 0 & t < a \\ 1 & t \ge a \end{cases}
$$

### Laplace Transform of the Unit Step Function

$$
\mathcal{L}\{u(t-a)\} = \int_0^\infty e^{-st} u(t-a) \,dt = \int_a^\infty e^{-st} \cdot 1 \,dt = \left[ -\frac{1}{s}e^{-st} \right]_a^\infty = \frac{e^{-as}}{s} \quad (\text{for } s>0)
$$

This is a key component of the Second Shifting Theorem.

## Dirac's Delta Function

The Dirac delta function, $\delta(t-a)$, is not a function in the traditional sense, but a "generalized function" or distribution. It is zero everywhere except at $t=a$, where it is infinite, and the integral over its whole domain is 1.

### Properties

1.  $\delta(t-a) = 0$ for all $t \ne a$.
2.  $\int_0^\infty \delta(t-a) \,dt = 1$ for $a \ge 0$.
3.  **Sifting Property:** $\int_0^\infty f(t)\delta(t-a) \,dt = f(a)$.

### Laplace Transform of the Dirac Delta Function

Using the sifting property, we can find its Laplace transform:

$$
\mathcal{L}\{\delta(t-a)\} = \int_0^\infty e^{-st} \delta(t-a) \,dt = e^{-sa}
$$

### Example: Solving an ODE with a Delta Function

Solve $y'' + y = \delta(t-2\pi)$ with $y(0)=0$ and $y'(0)=0$.

This models a harmonic oscillator that is at rest until it is struck with a hammer at time $t=2\pi$.

1.  **Take the Laplace transform:**
    $$
    \mathcal{L}\{y''\} + \mathcal{L}\{y\} = \mathcal{L}\{\delta(t-2\pi)\}
    $$
    $$
    s^2Y(s) - sy(0) - y'(0) + Y(s) = e^{-2\pi s}
    $$

2.  **Substitute initial conditions:**
    $$
    (s^2+1)Y(s) = e^{-2\pi s}
    $$
    $$
    Y(s) = \frac{e^{-2\pi s}}{s^2+1}
    $$

3.  **Find the inverse Laplace transform:**
    This is of the form $e^{-as}F(s)$ with $a=2\pi$ and $F(s) = \frac{1}{s^2+1}$.
    The inverse transform of $F(s)$ is $f(t) = \mathcal{L}^{-1}\{\frac{1}{s^2+1}\} = \sin(t)$.
    Using the second shifting theorem, the solution is:
    $$
    y(t) = f(t-a)u(t-a) = \sin(t-2\pi)u(t-2\pi)
    $$
    Since $\sin(t-2\pi) = \sin(t)$, the solution is:
    $$
    y(t) = \sin(t)u(t-2\pi) = \begin{cases} 0 & t < 2\pi \\ \sin(t) & t \ge 2\pi \end{cases}
    $$
    The oscillator remains at rest until $t=2\pi$, after which it oscillates as $\sin(t)$.

### Exercises

1. Find the Laplace transform of $f(t) = t^2 u(t-1)$.
2. Solve $y' + y = \delta(t-1)$, with $y(0)=0$.

### Solutions

1. We use the second shifting theorem. Let $g(t) = (t+1)^2 = t^2+2t+1$. Then $f(t) = g(t-1)u(t-1)$.
   $\mathcal{L}\{g(t)\} = \mathcal{L}\{t^2\} + 2\mathcal{L}\{t\} + \mathcal{L}\{1\} = \frac{2}{s^3} + \frac{2}{s^2} + \frac{1}{s}$.
   So, $\mathcal{L}\{f(t)\} = e^{-s}(\frac{2}{s^3} + \frac{2}{s^2} + \frac{1}{s})$.
2. $sY(s) - y(0) + Y(s) = e^{-s} \implies (s+1)Y(s) = e^{-s} \implies Y(s) = e^{-s}\frac{1}{s+1}$.
   The inverse transform of $\frac{1}{s+1}$ is $e^{-t}$.
   So, $y(t) = e^{-(t-1)}u(t-1)$.
