# 3. Simple Macroscopic Empirical Laws

> "The most lawful properties of deep learning are typically aggregate, macroscopic statistics over many weights and samples." 
>
> Deep learning is an extraordinarily measurable field. While tracking individual microscopic weights during training is nearly impossible, coarse properties of the system frequently obey simple, mathematically rigorous empirical laws. This paradigm closely mirrors the evolution of the quantitative physical sciences, where macroscopic regularities (such as the laws of Kepler, Boyle, Hooke, Newton, and Planck) were discovered and utilized long before their deep microscopic mechanisms were fully resolved.


## A. Neural Scaling Laws
*Focuses on power-law behaviors where aggregate macroscopic statistics—most notably the final test loss—decay predictably based on computation compute ($C$), dataset tokens ($D$), and parameter count ($N$).* 

* **Kaplan et al. [2020]** — *Scaling laws for neural language models* 
* **Hestness et al. [2017]** — *Deep learning scaling is predictable, empirically* 
* **Sharma & Kaplan [2022]** — *Scaling laws from the data manifold dimension* 
* **Bahri et al. [2024]** — *Explaining neural scaling laws* 
* **Liu et al. [2025]** — *Superposition yields robust neural scaling* 
* **Cui et al. [2021]** — *Generalization error rates in kernel regression: The crossover from the noiseless to noisy regime* 
* **Bordelon et al. [2024a]** — *A dynamical model of neural scaling laws* 
* **Michaud et al. [2023]** — *The quantization model of neural scaling* 
* **Ren et al. [2025]** — *Emergence and scaling laws in sgd learning of shallow neural networks* 
* **Defilippis et al. [2025]** — *Scaling laws and spectra of shallow neural networks in the feature learning regime* 
* **Barkeshli et al. [2026]** — *On the origin of neural scaling laws: from random graphs to natural language* 
* **Cagnetta et al. [2026]** — *Deriving neural scaling laws from the statistics of natural language* 

---

## B. Weight Dynamics & The Edge of Stability
*Focuses on trajectories where the loss landscape's sharpness (the largest eigenvalue of the Hessian) progressive sharpens and self-stabilizes dynamically at the step-size threshold of $2/\eta$, extending to advanced sharpness-regularized dynamics and non-convex pretraining landscapes.*

* **Cohen et al. [2021a]** — *Gradient descent on neural networks typically occurs at the edge of stability*
* **Even et al. [2023]** — *(s) gd over diagonal linear networks: Implicit bias, large stepsizes and edge of stability*
* **Wen et al. [2023]** — *How does sharpness-aware minimization minimize sharpness?*
* **Wen et al. [2024]** — *Understanding warmup-stable-decay learning rates: A river valley loss landscape perspective*
* **Damian et al. [2022a]** — *Self-stabilization: The implicit bias of gradient descent at the edge of stability*
* **Yoo et al. [2025]** — *Understanding sharpness dynamics in nn training with a minimalist example: The effects of dataset difficulty, depth, stochasticity, and more*
* **Cohen et al. [2025]** — *Understanding optimization in deep learning with central flows*

---

## C. Geometric Regularities (Neural Collapse & Feature Ansatz)
*Focuses on terminal phase geometric constants where hidden layers collapse into low-energy configurations and initial weight layers mirror data gradient profiles.* 

* **Papyan et al. [2020]** — *Prevalence of neural collapse during the terminal phase of deep learning training* 
* **Zhu et al. [2021]** — *A geometric analysis of neural collapse with unconstrained features* 
* **Soudry et al. [2018b]** — *The implicit bias of gradient descent on separable data* 
* **Radhakrishnan et al. [2024]** — *Mechanism for feature learning in neural networks and backpropagation-free machine learning models* 
* **Ziyin et al. [2024]** — *Formation of representations in neural networks* 
* **Boix-Adserà et al. [2025]** — *The features at convergence theorem: a first-principles alternative to the neural feature ansatz for how networks learn representations* 

---

## D. Noether Symmetries & Gradient Flow Conservation Laws
*Leverages the Noether principle from physics to identify continuous parameterization symmetries—such as rescaling, translation, and rotation—that dictate strict parameter invariants.* 

* **Saxe et al. [2014]** — *Exact solutions to the nonlinear dynamics of learning in deep linear neural networks* 
* **Du et al. [2018]** — *Algorithmic regularization in learning deep homogeneous models: Layers are automatically balanced* 
* **Arora et al. [2019a]** — *A convergence analysis of gradient descent for deep linear neural networks* 
* **Kunin et al. [2021]** — *Neural mechanics: Symmetry and broken conservation laws in deep learning dynamics* 
* **Tanaka & Kunin [2021]** — *Noether's learning dynamics: Role of symmetry breaking in neural networks* 
* **Marcotte et al. [2024a]** — *Abide by the law and follow the flow: Conservation laws for gradient flows* 
* **Marcotte et al. [2024b]** — *Keep the momentum: Conservation laws beyond euclidean gradient flows* l. [2021]* — *Neural mechanics: Symmetry and broken conservation laws in deep learning dynamics*.


