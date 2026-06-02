# 4. Hyperparameter Disentanglement

> "Training a deep learning system involves many numerical knobs, termed 'hyperparameters.' ... It is only in the last few years that the theory community has come to realize that hyperparameters can be disentangled and understood, and that the resulting mathematics is often both useful for practitioners and clarifying for theorists." 

---

### 🌊 The Physics Precedent: Fluid Dynamics & Dimensionless Constants
The mathematical study of deep learning hyperparameters bears profound similarities to the constant parameters governing physical dynamical systems. For instance, in fluid dynamics, a dimensionless constant called the **Reynolds number**—computed from pipe diameter, fluid speed, density, and viscosity—determines whether fluid flow will be orderly (laminar) or turbulent. While solving the exact microscopic trajectory of a turbulent fluid is incredibly difficult, predicting whether the flow will be turbulent or how the system shifts when scaling up system parameters is highly practical. Analogously, while solving the exact optimization dynamics of a neural network is mathematically challenging, learning mechanics strives to provide a coarse, predictive picture of how training behaviors alter when shifting numerical knobs.

---

## 🎛️ A. Understanding Optimization Hyperparameters

Stochastic gradient descent relies heavily on two primary numerical knobs: **learning rate** and **batch size**. Learning mechanics systematically models how these parameters control both optimization velocity and the structural properties of the learned network.

### 🌡️ 1. The Linear Scaling Rule & Noise Temperature
* **The Invariance Principle**: Under stochastic gradient descent, optimization dynamics exhibit an algorithm-level invariance under a simultaneous rescaling of step size and batch capacity. If a practitioner doubles both the learning rate and the batch size while halving the total optimizer steps (keeping the total number of training examples processed fixed), the network's optimization trajectory remains nearly identical. 
* **SDE Modeling**: This empirical rule of thumb is formally clarified by interpreting SGD as a discrete numerical approximation of an underlying continuous **Stochastic Differential Equation (SDE)**. The SDE perspective proves that the effective "noise temperature" of stochastic training is directly modulated by the ratio of the learning rate to the batch size. For modern adaptive optimizers, this scaling relationship shifts, dictating that the learning rate should instead scale with the square root of the batch size.
* **Key Literature**:
  * *Goyal et al. [2017]* — Empirical proof of the linear scaling rule for large mini-batch training.
  * *Mandt et al. [2017] / Jastrzebski et al. [2017]* — Interrogating stochastic gradient descent as approximate Bayesian inference via continuous SDEs.
  * *Malladi et al. [2022]* — Deriving continuous SDE bounds and alternative scaling rules for adaptive gradient algorithms.

### 📉 2. Resource Tradeoffs & The Critical Batch Size
* **The Pareto Frontier**: Selecting an optimal batch size requires balancing an inherent engineering tradeoff between two distinct resources: serial time (sequential execution steps) and overall compute (total computation cost). Minimizing serial time exclusively pushes the ideal batch size to the full dataset, whereas minimizing computation cost exclusively drives the ideal batch size down to 1.
* **The Critical Threshold**: In reality, practitioners accept an optimization compromise quantified by the **critical batch size**. Simple statistical frameworks model this resource frontier as a clean mathematical hyperbola, allowing teams to isolate the exact batch size that optimally negotiates the time-compute tradeoff.
* **Key Literature**: *McCandlish et al. [2018]* — Deriving and empirically validating a predictive model for large-batch training and critical batch capacity.

### 🪐 3. Curvature-Penalized Flows
* **Implicit Regularization**: Beyond optimization speed, optimization hyperparameters fundamentally dictate the geometric landscape that a network's weights follow. Operating with larger learning rates and smaller batch sizes structurally regularizes the **sharpness (loss function curvature)** along the parameter path, steering networks toward flatter, more compressible, and better-generalizing local minima.
* **Effective Flow Formulations**: By Taylor-expanding the network objective function to the third order, theorists discovered that high-frequency optimization oscillations mathematically act as an implicit deterministic drift. Consequently, discrete, unstable optimization trajectories on realistic neural networks can be cleanly modeled as a smooth continuous **curvature-penalized gradient flow**, where hyperparameters simply modulate the intensity and form of the curvature penalty.
* **Key Literature**:
  * *Keskar et al. [2016]* — Early empirical isolation of the generalization gap and sharp vs. flat minima boundaries.
  * *Blanc et al. [2020] / Damian et al. [2021]* — Proving curvature regularization driven by third-order objective expansions.
  * *Cohen et al. [2025]* — *Understanding optimization in deep learning with central flows*.

---

## 🔲 B. Disentangling Architecture from Optimization: µP

A historical roadblock in large-scale deep learning was the entanglement of architectural knobs (such as width and depth) with optimization knobs (such as learning rate and initialization variance). Under standard parameterization practices, expanding a model's width causes its optimal learning rate to shift unpredictably, forcing costly trial-and-error re-tuning at production scales.

### 📐 1. The Tensor Programs Framework
To decouple these dimensions, the **Tensor Programs framework** formalizes structural hyperparameters by writing the learning rate in a width-dependent format:

$$\eta = \eta_0 \cdot \text{[width]}^c$$

This formalization separates a scale-invariant coefficient ($\eta_0$) from a width-dependent factor governed by an explicit exponent ($c$). Asymptotic analyses prove that all non-explosive width parameterizations collapse into one of two structural limits:
1. **Neural Tangent Parameterization (NTP)**: A scaling regime where representations and network features remain completely frozen during training (equivalent to the lazy limit).
2. **Maximal Update Parameterization (µP)**: A stable, alternative scaling regime where network features actively evolve, and hidden representations preserve a non-trivial dynamical flow at the infinite-width limit.

### 🚀 2. Zero-Shot Hyperparameter Transfer
Because µP guarantees structural parameter invariance across varying dimensions, it unlocks **zero-shot hyperparameter transfer**. Engineers can cheaply map the optimal learning rate, initialization scale, and schedule coordinates on a small, narrow proxy model, and transfer those exact coordinates directly to a massive, production-scale network where they remain near-optimal.
[ Small Proxy Model ]  ───(Tune Optimal Hyperparameters Cheaply)───┐
▼  (Zero-Shot Transfer via µP)
[ Massive Target Model ] ◄───(Apply Invariant Parameter Scalings)───┘

### 🛰️ 3. Extensions to Depth and Modalities
While original µP frameworks evaluated infinite width asymptotically, recent structural bounds prove that a small set of spectral statistics stabilizes rapidly across finite widths, explaining its real-world accuracy. This scaling-centric paradigm has been successfully generalized across alternative structural coordinates:
* **Depth Scaling**: Standardizing invariant parameter transfer down deep residual blocks.
* **Transformers**: Designing compute-efficient, shaped transformer representations.
* **Mixture-of-Experts (MoE)**: Scaling parameter bounds across expert counts and expert routing widths.
* **Key Literature**:
  * *Yang & Hu [2021]* — *Tensor programs IV: Feature learning in infinite-width neural networks*.
  * *Yang et al. [2022]* — *Tensor programs V: Tuning large neural networks via zero-shot hyperparameter transfer*.
  * *Bordelon et al. [2023] / Yang et al. [2023b]* — Extending invariant hyperparameter transfer to infinite-depth networks.
