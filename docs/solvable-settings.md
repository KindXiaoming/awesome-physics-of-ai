# 1. Solvable Idealized Settings: Paper List

> A reliable way to build scientific understanding in complex systems is to study pared-down yet representative settings where quantitative calculations are possible, mirroring physics' use of the harmonic oscillator or the hydrogen atom.

## A. Linearization in the Data (Deep Linear Networks)
*Focuses on architectures that remove all nonlinear activation functions but remain highly nonlinear in their parameters, isolating the unique effects of network depth and layer interactions.*

* **Saxe et al. [2014]** — *Exact solutions to the nonlinear dynamics of learning in deep linear neural networks*
* **Nam et al. [2025]** — *Position: Solve layerwise linear models first to understand neural dynamical phenomena (neural collapse, emergence, lazy/rich regime, and grokking)*
* **Baldi & Hornik [1989]** — *Neural networks and principal component analysis: Learning from examples without local minima*
* **Gissin et al. [2019]** — *The implicit bias of depth: How incremental learning drives generalization*
* **Atanasov et al. [2021]** — *Neural networks as kernel learners: The silent alignment effect*
* **Even et al. [2023]** — *(s) gd over diagonal linear networks: Implicit bias, large stepsizes and edge of stability*
* **Woodworth et al. [2020]** — *Kernel and rich regimes in overparametrized models*
* **Kunin et al. [2024]** — *Get rich quick: exact solutions reveal how unbalanced initializations promote rapid feature learning*
* **Fukumizu [1998]** — *Effect of batch learning in multilayer neural networks*
* **Tarmoun et al. [2021]** — *Understanding the dynamics of gradient flow in overparameterized linear models*
* **Dominé et al. [2025]** — *From lazy to rich: Exact learning dynamics in deep linear networks*
* **Lampinen & Ganguli [2018]** — *An analytic theory of generalization dynamics and transfer learning in deep linear networks*
* **Kalimeris et al. [2019]** — *Sgd on neural networks learns functions of increasing complexity*
* **Simon et al. [2023b]** — *On the stepwise nature of self-supervised learning*
* **Gidel et al. [2019]** — *Implicit regularization of discrete gradient dynamics in linear neural networks*
* **Li et al. [2021a]** — *Towards resolving the implicit bias of gradient descent for matrix factorization: Greedy low-rank learning*
* **Jacot et al. [2021]** — *Saddle-to-saddle dynamics in deep linear networks: Small initialization training, symmetry, and sparsity*
* **Pesme & Flammarion [2023]** — *Saddle-to-saddle dynamics in diagonal linear networks*
* **Arora et al. [2018]** — *On the optimization of deep networks: Implicit acceleration by overparameterization*
* **Arora et al. [2019b]** — *Implicit regularization in deep matrix factorization*
* **Pesme et al. [2021]** — *Implicit bias of sgd for diagonal linear networks: a provable benefit of stochasticity*
* **Chen et al. [2024]** — *Stochastic collapse: How gradient noise attracts sgd dynamics towards simpler subnetworks*
* **Ziyin et al. [2022]** — *Exact solutions of a deep linear network*
* **Wang & Jacot [2024]** — *Implicit bias of sgd in l-2-regularized linear dnns: One-way jumps from high to low rank*

---

## B. Linearization in the Parameters (Kernel Methods & NTK)
*Focuses on settings where networks are well-approximated by their first-order Taylor expansion around initial parameters, transforming least-squares training into tractable kernel ridge regression.*

* **Jacot et al. [2018]** — *Neural tangent kernel: Convergence and generalization in neural networks*
* **Lee et al. [2019]** — *Wide neural networks of any depth evolve as linear models under gradient descent*
* **Chizat et al. [2019]** — *On lazy training in differentiable programming*
* **Liu et al. [2020]** — *On the linearity of large non-linear models: when and why the tangent kernel is constant*
* **Malladi et al. [2023]** — *A kernel-based view of language model fine-tuning*
* **Ren & Sutherland [2025]** — *Learning dynamics of LLM finetuning*
* **Arora et al. [2019c]** — *On exact computation with an infinitely wide neural net*
* **Geifman et al. [2020]** — *On the similarity between the laplace and neural tangent kernels*
* **Jacot et al. [2020]** — *Kernel alignment risk estimator: Risk prediction from training data*
* **Canatar et al. [2021]** — *Spectral bias and task-model alignment explain generalization in kernel regression and infinitely wide neural networks*
* **Loureiro et al. [2021]** — *Learning curves of generic features maps for realistic datasets with a teacher-student model*
* **Hastie et al. [2022]** — *Surprises in high-dimensional ridgeless least squares interpolation*
* **Wei et al. [2022]** — *More than a toy: Random matrix models predict how real-world neural representations generalize*
* **Simon et al. [2023a]** — *The eigenlearning framework: A conservation law perspective on kernel ridge regression and wide neural networks*
* **Basri et al. [2020]** — *Frequency bias in neural networks for input of non-uniform density*
* **Karkada et al. [2025]** — *Predicting kernel regression learning curves from only raw data statistics*
* **Belkin et al. [2019]** — *Reconciling modern machine-learning practice and the classical bias-variance trade-off*
* **Advani et al. [2020]** — *High-dimensional dynamics of generalization error in neural networks*
* **Caponnetto & de Vito [2007]** — *Optimal rates for the regularized least-squares algorithm*
* **Pillaud-Vivien et al. [2018]** — *Statistical optimality of stochastic gradient descent on hard learning problems through multiple passes*
* **Cui et al. [2023]** — *Error scaling laws for kernel classification under source and capacity conditions*
* **Atanasov et al. [2024]** — *Scaling and renormalization in high-dimensional regression*
* **Ghorbani et al. [2020]** — *When do neural networks outperform kernel methods?*
* **Vyas et al. [2022]** — *Limitations of the ntk for understanding generalization in deep learning*

---

## C. Beyond Linearization (Genuinely Nonlinear Toy Models)
*Focuses on solvable minimal models that remain genuinely nonlinear in both the data and the parameters, capturing explicit feature-learning mechanisms.*

* **Abbe et al. [2022]** — *The merged-staircase property: a necessary and nearly sufficient condition for sgd learning of sparse functions on two-layer neural networks*
* **Damian et al. [2022b]** — *Neural networks can learn representations with gradient descent*
* **Bietti et al. [2022]** — *Learning single-index models with shallow neural networks*
* **Ba et al. [2022]** — *High-dimensional asymptotics of feature learning: How one gradient step improves the representation*
* **Dandi et al. [2023]** — *How two-layer neural networks learn, one (giant) step at a time*
* **Barbier et al. [2019]** — *Optimal errors and phase transitions in high-dimensional generalized linear models*
* **Aubin et al. [2018]** — *The committee machine: Computational to statistical gaps in learning a two-layers neural network*
* **Mignacco et al. [2020]** — *Dynamical mean-field theory for stochastic gradient descent in gaussian mixture classification*
* **Erba et al. [2025]** — *The nuclear route: Sharp asymptotics of erm in overparameterized quadratic networks*
* **Ben Arous et al. [2025]** — *Learning quadratic neural networks in high dimensions: Sgd dynamics and scaling laws*
* **Defilippis et al. [2025]** — *Scaling laws and spectra of shallow neural networks in the feature learning regime*
* **Ren et al. [2025]** — *Emergence and scaling laws in sgd learning of shallow neural networks*
* **Soudry et al. [2018a]** — *The implicit bias of gradient descent on separable data*
* **Lyu and Li [2020]** — *Gradient descent maximizes the margin of homogeneous neural networks*
* **Saad & Solla [1995]** — *Exact solution for on-line learning in multilayer neural networks*
* **Goldt et al. [2019]** — *Dynamics of stochastic gradient descent for two-layer neural networks in the teacher-student setup*
* **Ben Arous et al. [2022]** — *High-dimensional limit theorems for sgd: Effective dynamics and critical scaling*
* **Veiga et al. [2022]** — *Phase diagram of stochastic gradient descent in high-dimensional two-layer neural networks*
* **Zavatone-Veth et al. [2025]** — *Summary statistics of learning link changing neural representations to behavior*
* **Nichani et nala. [2025]** — *Understanding factual recall in transformers via associative memories*
* **Morwani et al. [2023]** — *Feature emergence via margin maximization: case studies in algebraic tasks*
* **Gromov [2023]** — *Grokking modular arithmetic*
* **Kunin et al. [2025]** — *Alternating gradient flows: A theory of feature learning in two-layer neural networks*
* **Zhang et al. [2025]** — *Training dynamics of in-context learning in linear attention*
* **Boncoraglio et al. [2025]** — *Single-head attention in high dimensions: A theory of generalization, weights spectra, and scaling laws*
* **Bordelon et al. [2025]** — *How feature learning can improve neural scaling laws*