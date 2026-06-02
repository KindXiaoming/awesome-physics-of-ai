# 4. Hyperparameter Disentanglement: Paper List

> "Optimization hyperparameters in deep learning affect not just the speed and cost of training but also the trajectory that training follows. This in turn affects various properties of the learned network... the theory community has come to realize that hyperparameters can be disentangled and understood."

## A. Optimization Hyperparameters & SDE Dynamics
*Focuses on algorithm-level invariances under simultaneous rescaling of step sizes and batch capacities, analyzing stochastic updates as approximations of continuous Stochastic Differential Equations (SDEs).*

* **Goyal et al. [2017]** — *Accurate, large minibatch sgd: Training imagenet in 1 hour* 
* **Mandt et al. [2017]** — *Stochastic gradient descent as approximate bayesian inference* 
* **Jastrzebski et al. [2017]** — *Three factors influencing minima in sgd* 
* **Chaudhari & Soatto [2018]** — *Stochastic gradient descent performs variational inference, converges to limit cycles for deep networks* 
* **Li et al. [2019]** — *Stochastic modified equations and dynamics of stochastic gradient algorithms i: Mathematical foundations* 
* **Li et al. [2021b]** — *On the validity of modeling sgd with stochastic differential equations (sdes)* 
* **Malladi et al. [2022]** — *On the sdes and scaling rules for adaptive gradient algorithms* 

---

## B. Resource Tradeoffs & Critical Batch Size
*Focuses on mapping the Pareto frontier balancing serial execution time against total computation cost, defining the optimal critical batch capacity boundaries.*

* **McCandlish et al. [2018]** — *An empirical model of large-batch training* 
* **Ma et al. [2018]** — *The power of interpolation: Understanding the effectiveness of sgd in modern over-parametrized learning* 
* **Jain et al. [2018]** — *Parallelizing stochastic gradient descent for least squares regression: mini-batching, averaging, and model misspecification* 
* **Shallue et al. [2019]** — *Measuring the effects of data parallelism on neural network training* 

---

## C. Implicit Regularization & Penalized Flows
*Focuses on the implicit regularization effect of SGD or optimization dynamic, steering parameters toward flat, close and compressible local minima.*

* **Cohen et al. [2025]** — *Understanding optimization in deep learning with central flows* 
* **Keskar et al. [2016]** — *On large-batch training for deep learning: Generalization gap and sharp minima* 
* **Jastrzebski et al. [2020]** — *The break-even point on optimization trajectories of deep neural networks* 
* **Cohen et al. [2021a]** — *Gradient descent on neural networks typically occurs at the edge of stability* 
* **Blanc et al. [2020]** — *Implicit regularization for deep neural networks driven by an ornstein-uhlenbeck like process* 
* **Li et al. [2021c]** — *What happens after sgd reaches zero loss?-a mathematical framework* 
* **Damian et al. [2021]** — *Label noise sgd provably prefers flat global minimizers* 
* **Wen et al. [2022]** — *How does sharpness-aware minimization minimize sharpness?* 
* **Li et al. [2025]** — *Adam reduces a unique form of sharpness: Theoretical insights near the minimizer manifold* 
* **Pesme et al. [2021]** — *Implicit bias of sgd for diagonal linear networks: a provable benefit of stochasticity* 
* **Chen et al. [2024]** — *Stochastic collapse: How gradient noise attracts sgd dynamics towards simpler subnetworks* 
* **Barrett & Dherin [2020]** — *Implicit gradient regularization* 
* **Smith et al. [2021]** — *On the origin of implicit regularization in stochastic gradient descent* 
* **Schulman & Lab [2025]** — *Lora without regret* 
* **Catalan-Tatjer et al. [2025]** — *Training dynamics impact post-training quantization robustness* 
* **Barsbey et al. [2025]** — *Large learning rates simultaneously achieve robustness to spurious correlations and compressibility* 
* **Chen et al. [2026]** — *Nexus: Same Pretraining Loss, Better Downstream Generalization via Common Minima*

---

## D. Architecture Scaling & Invariant Hyperparameter Transfer
*Focuses on disentangling dimensional coordinates (width, depth) from optimization variables to execute zero-shot hyperparameter predictions across scales.*

* **Yang & Hu [2021]** — *Tensor programs iv: Feature learning in infinite-width neural networks* 
* **Yang & Littwin [2023]** — *Tensor programs ivb: Adaptive optimization in the infinite-width limit* 
* **Yang et al. [2022]** — *Tensor programs v: Tuning large neural networks via zero-shot hyperparameter transfer* 
* **Noci et al. [2024]** — *Super consistency of neural network landscapes and learning rate transfer* 
* **Ghosh et al. [2025]** — *Understanding the mechanisms of fast hyperparameter transfer* 
* **Hayou [2025]** — *A proof of learning rate transfer under mu p* 
* **Yang et al. [2023b]** — *Tensor programs vi: Feature learning in infinite-depth neural networks* 
* **Bordelon et al. [2023]** — *Depthwise hyperparameter transfer in residual networks: Dynamics and scaling limit* 
* **Dey et al. [2025]** — *Don't be lazy: Completep enables compute-efficient deep transformers* 
