---
id: solution-of-odes
title: "Solution of Ordinary Differential Equations (ODEs)"
sidebar_label: "Solution of ODEs"
---

## Solving ODEs with Laplace Transforms

The Laplace transform is a powerful method for solving linear ordinary differential equations with constant coefficients. The key idea is to transform the differential equation in the $t$-domain into an algebraic equation in the $s$-domain.

The general procedure is as follows:
1. Take the Laplace transform of both sides of the differential equation.
2. Use the properties of Laplace transforms, particularly the derivative property, to express the equation in terms of $F(s) = \mathcal{L}\{f(t)\}$.
3. Substitute the initial conditions.
4. Solve the resulting algebraic equation for $F(s)$.
5. Find the inverse Laplace transform of $F(s)$ to obtain the solution $f(t)$.

### Example

Solve the following initial value problem:
$y'' - y' - 2y = 0$, with $y(0)=1$ and $y'(0)=0$.

1.  **Take the Laplace transform of the equation:**
    $$
    \mathcal{L}\{y''\} - \mathcal{L}\{y'\} - 2\mathcal{L}\{y\} = 0
    $$

2.  **Apply the derivative property:**
    Let $Y(s) = \mathcal{L}\{y(t)\}$.
    $$
    [s^2 Y(s) - sy(0) - y'(0)] - [sY(s) - y(0)] - 2Y(s) = 0
    $$

3.  **Substitute the initial conditions** ($y(0)=1, y'(0)=0$):
    $$
    [s^2 Y(s) - s(1) - 0] - [sY(s) - 1] - 2Y(s) = 0
    $$
    $$
    s^2 Y(s) - s - sY(s) + 1 - 2Y(s) = 0
    $$

4.  **Solve for $Y(s)$:**
    $$
    Y(s)(s^2 - s - 2) - s + 1 = 0
    $$
    $$
    Y(s)(s-2)(s+1) = s - 1
    $$
    $$
    Y(s) = \frac{s-1}{(s-2)(s+1)}
    $$

5.  **Find the inverse Laplace transform:**
    We use partial fraction decomposition for $Y(s)$:
    $$
    \frac{s-1}{(s-2)(s+1)} = \frac{A}{s-2} + \frac{B}{s+1}
    $$
    Multiplying by $(s-2)(s+1)$ gives $s-1 = A(s+1) + B(s-2)$.
    -   If $s=2$, then $1 = 3A \implies A = 1/3$.
    -   If $s=-1$, then $-2 = -3B \implies B = 2/3$.
    So,
    $$
    Y(s) = \frac{1/3}{s-2} + \frac{2/3}{s+1}
    $$
    Now, take the inverse Laplace transform:
    $$
    y(t) = \mathcal{L}^{-1}\{Y(s)\} = \frac{1}{3}\mathcal{L}^{-1}\left\{\frac{1}{s-2}\right\} + \frac{2}{3}\mathcal{L}^{-1}\left\{\frac{1}{s+1}\right\}
    $$
    $$
    y(t) = \frac{1}{3}e^{2t} + \frac{2}{3}e^{-t}
    $$

This is the solution to the initial value problem.

### Exercises

1. Solve the ODE $y' + 2y = 0$ with $y(0)=3$.
2. Solve the ODE $y'' + 4y = 0$ with $y(0)=1$ and $y'(0)=2$.

### Solutions

1. $\mathcal{L}\{y'\} + 2\mathcal{L}\{y\} = 0 \implies sY(s) - y(0) + 2Y(s) = 0 \implies Y(s)(s+2) = 3 \implies Y(s) = \frac{3}{s+2}$.
   $y(t) = \mathcal{L}^{-1}\{\frac{3}{s+2}\} = 3e^{-2t}$.
2. $\mathcal{L}\{y''\} + 4\mathcal{L}\{y\} = 0 \implies s^2Y(s) - sy(0) - y'(0) + 4Y(s) = 0 \implies Y(s)(s^2+4) = s+2 \implies Y(s) = \frac{s+2}{s^2+4} = \frac{s}{s^2+4} + \frac{2}{s^2+4}$.
   $y(t) = \mathcal{L}^{-1}\{\frac{s}{s^2+4}\} + \mathcal{L}^{-1}\{\frac{2}{s^2+4}\} = \cos(2t) + \sin(2t)$.
