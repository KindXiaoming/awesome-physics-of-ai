# 3. Simple Macroscopic Empirical Laws

> "The most lawful properties of deep learning are typically aggregate, macroscopic statistics over many weights and samples." 
>
> Deep learning is an extraordinarily measurable field. While tracking individual microscopic weights during training is nearly impossible, coarse properties of the system frequently obey simple, mathematically rigorous empirical laws. This paradigm closely mirrors the evolution of the quantitative physical sciences, where macroscopic regularities (such as the laws of Kepler, Boyle, Hooke, Newton, and Planck) were discovered and utilized long before their deep microscopic mechanisms were fully resolved.

---

## 📈 A. Neural Scaling Laws

The test loss represents the foundational macroscale metric of any machine learning system. Despite the extreme complexity of modern overparameterized models, the final achieved test loss decays predictably according to precise power laws. Within a given architectural family, this macroscopic statistic is governed cleanly by only three scalar variables: **compute** ($C$), **dataset size** ($D$), and **parameter count** ($N$).

$$L(C) \approx \left(\frac{C_{\min}}{C_0}\right)^{-\alpha_C}, \quad L(D) \approx \left(\frac{D}{D_0}\right)^{-\alpha_D}, \quad L(N) \approx \left(\frac{N}{N_0}\right)^{-\alpha_N}$$

### Theoretical Frontiers
* **The Exponents**: While scaling laws are robustly observable across diverse model horizons, predicting the exact scaling exponents ($\alpha_C, \alpha_D, \alpha_N$) *a priori* from architectural or dataset properties remains an open challenge. 
* **Candidate Hypotheses**: Current explanations attribute these power laws to latent data manifold dimensionality , internal feature superposition mechanisms , and hierarchical power laws embedded directly within task structures.
* **Key Literature**: 
  * *Hestness et al. [2017]* — Early empirical validation of predictable deep learning scaling.
  * *Kaplan et al. [2020]* — *Scaling laws for neural language models*.
  * *Sharma & Kaplan [2022] / Bahri et al. [2024]* — Investigating scaling mechanics relative to data manifold dimension.

---

## ⚡ B. Weight Dynamics at the Edge of Stability

The trajectory of a network's weights is strictly dictated by its high-dimensional loss landscape. To analyze this trajectory macroscopically, theorists track the **sharpness** of the loss surface, formally defined as the largest eigenvalue of the Hessian matrix with respect to the network parameters.

When a network undergoes optimization via full-batch gradient descent with a learning rate $\eta$, the sharpness exhibits a universal, non-convex phenomenon:

1. **Progressive Sharpening**: Early in training, the loss sharpness undergoes a steady, gradual increase.
2. **Self-Stabilization (The Edge of Stability)**: The sharpness eventually plateaus and hovers dynamically at or just above the maximum theoretical stability threshold:

$$\lambda_{\max}(\text{Hessian}) \approx \frac{2}{\eta}$$

### Theoretical Frontiers
* **Mechanistic Causes**: In traditional convex optimization, exceeding a sharpness of $2/\eta$ triggers catastrophic divergence. In deep learning, third-order loss curvature interactions counteract this explosion, allowing the parameter trajectory to decompose into smooth, time-averaged gradient flow dynamics coupled with stable oscillations in unstable directions.
* **Key Literature**:
  * *Cohen et al. [2021a]* — *Gradient descent on neural networks typically occurs at the edge of stability*.
  * *Damian et al. [2022a]* — Proves how third-order loss curvatures self-stabilize sharpness at the threshold.
  * *Even et al. [2023] / Cohen et al. [2025]* — Exact formulations of edge-of-stability mechanics and continuous central flows.

---

## 🛑 C. Geometric & Structural Conservation Laws

Beyond optimization trajectories, structural statistics of hidden representations and parameter matrices settle into mathematically elegant, highly predictable configurations at the end of training.

### 🔷 1. Neural Collapse
During the terminal phase of training a deep classifier under cross-entropy loss and explicit weight decay, the final hidden layer representations of intra-class samples exhibit a complete geometric collapse:
* Activations of individual samples cluster tightly around their specific class mean.
* The resulting class mean vectors self-assemble into a perfect, equidistant **regular simplex** in activation space, optimizing the global energy configuration.
* **Key Literature**: *Papyan, Han, & Donoho [2020]* — First empirical isolation of the neural collapse phenomenon.

### 🌐 2. The Neural Feature Ansatz
At the initial layers of a trained network, the coarse geometric layout of the weights reflects a direct statistical mapping of the target function. The Gram matrix of the first-layer weights ($W_1^\top W_1$) heuristically aligns with the average gradient outer product (AGOP) of the model over the data distribution:

$$W_1^\top W_1 \propto \mathbb{E}_{x \sim \mathcal{P}_{\text{data}}} \left[ \nabla_x f(x;\theta) \nabla_x f(x;\theta)^\top \right]$$

This powerful structural ansatz allows precise macroscopic predictions regarding the top eigenvectors of trained weight matrices.
* **Key Literature**: *Radhakrishnan et al. [2024]* — *Mechanism for feature learning in neural networks and backpropagation-free machine learning models*.

### 🪐 3. Noether Symmetries & Conservation Laws
In deep linear networks, the difference between the covariance and Gram matrices of consecutive layers is strictly conserved during gradient updates:

$$\frac{d}{dt} \left( W_l W_l^\top - W_{l+1}^\top W_{l+1} \right) = 0$$

By mapping this curiosity to the **Noether Principle** from classical mechanics, theorists proved that this structural regularity follows directly from continuous parameterization symmetries. This framework maps specific architectural invariants to predictable macroscopic statistics across modern architectures:
* **ReLU activations** yield explicit rescaling symmetries.
* **Normalization layers** introduce strict scale balancing invariants.
* **Softmax operators** dictate explicit logit translation symmetries.
* **Attention mechanisms** enforce rigorous rotation conservation laws between Key and Query matrices.
* **Key Literature**: 
  * *Du et al. [2018]* — Proves algorithmic balancing across layers in homogeneous networks.
  * *Kunin et al. [2021]* — *Neural mechanics: Symmetry and broken conservation laws in deep learning dynamics*.