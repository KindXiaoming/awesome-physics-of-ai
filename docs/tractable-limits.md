# 2. Insightful Limits Reveal Fundamental Behavior

> "Appropriate asymptotic perspectives often render otherwise intractable systems analytically tractable." 
> Modern deep learning systems regularly involve hundreds of interacting architectural components comprised of hundreds of billions of parameters trained on trillions of tokens. Constructing microscopic theories that track every individual parameter in such practical setups seems all but hopeless. Fortunately, complex systems often simplify when approximated as effectively infinite in size, revealing simple mathematical structures that remain deeply informative for original finite systems.

## A. The Infinite Width Limit & The Lazy/Rich Dichotomy
*Focuses on mean-field behaviors when the number of neurons in hidden layers approaches infinity, separating frozen feature kernels from adaptive representation learning.*

* **Neal [1996]** — *Priors for infinite networks* 
* **Poole et al. [2016]** — *Exponential expressivity in deep neural networks through transient chaos* 
* **Lecun et al. [1998]** — *Gradient-based learning applied to document recognition* 
* **Jacot et al. [2018]** — *Neural tangent kernel: Convergence and generalization in neural networks* 
* **Lee et al. [2019]** — *Wide neural networks of any depth evolve as linear models under gradient descent* 
* **Chizat et al. [2019]** — *On lazy training in differentiable programming* 
* **Mei et al. [2019]** — *Mean-field theory of two-layers neural networks: dimension-free bounds and kernel limit* 
* **Rotskoff & Eric Vanden-Eijnden [2018]** — *Parameters as interacting particles: long time convergence and asymptotic error scaling of neural networks* 
* **Chizat & Bach [2018]** — *On the global convergence of gradient descent for over-parameterized models using optimal transport* 
* **Bordelon & Pehlevan [2022]** — *Self-consistent dynamical field theory of kernel evolution in wide neural networks* 
* **Aubin et al. [2018]** — *The committee machine: Computational to statistical gaps in learning a two-layers neural network* 
* **Goldt et al. [2019]** — *Dynamics of stochastic gradient descent for two-layer neural networks in the teacher-student setup* 
* **Ren et al. [2025]** — *Emergence and scaling laws in sgd learning of shallow neural networks* 
* **Abbe et al. [2022]** — *The merged-staircase property: a necessary and nearly sufficient condition for sgd learning of sparse functions on two-layer neural networks* 
* **Moniri et al. [2023]** — *A theory of non-linear feature learning with one gradient step in two-layer neural networks* 
* **Cui et al. [2024]** — *Asymptotics of feature learning in two-layer networks after one gradient-step* 
* **Defilippis et al. [2025]** — *Scaling laws and spectra of shallow neural networks in the feature learning regime* 
* **Montanari & Wang [2026]** — *Phase transitions for feature learning in neural networks* 
* **Saxe [2015]** — *Deep linear neural networks: A theory of learning in the brain and mind* 
* **Atanasov et al. [2021]** — *Neural networks as kernel learners: The silent alignment effect* 
* **Atanasov et al. [2025]** — *The optimization landscape of sgd across the feature learning strength* 
* **Maennel et al. [2018]** — *Gradient descent quantizes relu network features* 
* **Woodworth et al. [2020]** — *Kernel and rich regimes in overparametrized models* 

### The Bayesian Perspective
* **Lee et al. [2017]** — *Deep neural networks as gaussian processes* 
* **Cohen et al. [2021b]** — *Learning curves for overparametrized deep neural networks: A field theory perspective* 
* **Lavie et al. [2024]** — *Towards understanding inductive bias in transformers: A view from infinity* 
* **Seroussi et al. [2023]** — *Separation of scales and a thermodynamic description of feature learning in some cnns* 
* **Rubin et al. [2023]** — *Grokking as a first order phase transition in two layer networks* 
* **Rubin et al. [2025b]** — *From kernels to features: A multi-scale adaptive theory of feature learning* 
* **Rubin et al. [2025a]** — *Mitigating the curse of detail: Scaling arguments for feature learning and sample complexity* 
* **Yang et al. [2023a]** — *A theory of representation learning gives a deep generalisation of kernel methods* 

---

## B. Special Focus: The Tensor Programs Framework & µP
*Highlights the structural infinite-width and depth scaling theories that formulate Maximal Update Parameterization, safeguarding zero-shot hyperparameter transfer across massive target coordinates.*

* **Yang & Hu [2021]** — *Tensor programs iv: Feature learning in infinite-width neural networks* 
* **Yang & Littwin [2023]** — *Tensor programs ivb: Adaptive optimization in the infinite-width limit* 
* **Yang et al. [2022]** — *Tensor programs v: Tuning large neural networks via zero-shot hyperparameter transfer* 
* **Noci et al. [2024]** — *Super consistency of neural network landscapes and learning rate transfer* 
* **Ghosh et al. [2025]** — *Understanding the mechanisms of fast hyperparameter transfer* 
* **Hayou [2025]** — *A proof of learning rate transfer under mu p* 

---

## C. The Infinite Depth Limit & Alternative Structural Directions
*Focuses on continuous limits where networks approximate Differential Equations, alongside scaling rules tailored for multi-head attention blocks and mixture-of-experts.*

* **Bordelon et al. [2024b]** — *Infinite limits of multi-head transformer dynamics* 
* **Lénaïc Chizat [2025]** — *The hidden width of deep resnets: Tight error bounds and phase diagrams* 
* **Chaintron et al. [2026]** — *Resnets of all shapes and sizes: Convergence of training dynamics in the large-scale limit* 
* **Ricky TQ Chen et al. [2018]** — *Neural ordinary differential equations* 
* **Bordelon et al. [2023]** — *Depthwise hyperparameter transfer in residual networks: Dynamics and scaling limit* 
* **Yang et al. [2023b]** — *Tensor programs vi: Feature learning in infinite-depth neural networks* 
* **Dey et al. [2025]** — *Don't be lazy: Completep enables compute-efficient deep transformers* 
* **Clark et al. [2026]** — *Structure, disorder, and dynamics in task-trained recurrent neural circuits* 
* **Bauer et al. [2026]** — *A unified theory of feature learning in rnns and dnns* 
* **Hron et al. [2020]** — *Infinite attention: Nngp and ntk for deep attention networks* 
* **Małaśnicki et al. [2025]** — *µ-parameterization for mixture of experts* 
* **Jiang et al. [2026]** — *Hyperparameter transfer with mixture-of-expert layers* 

---

## D. Joint Scaling Limits
*Focuses on high-dimensional random matrix regimes where sample capacity and parameter sizes approach infinity concurrently under controlled scaling fractions.*

* **Seung et al. [1992]** — *Statistical mechanics of learning from examples* 
* **Saad & Solla [1995]** — *Exact solution for on-line learning in multilayer neural networks* 
* **Lenka Zdeborová & Florent Krzakala [2016]** — *Statistical physics of inference: Thresholds and algorithms* 
* **Qianyi Li & Haim Sompolinsky [2021]** — *Statistical mechanics of deep linear neural networks: The backpropagating kernel renormalization* 
* **Hoffmann et al. [2022]** — *Training compute-optimal large language models* 
* **Bordelon & Pehlevan [2025]** — *Deep linear network training dynamics from random initialization: Data, width, depth, and hyperparameter transfer* 
* **Hayou & Yang [2023]** — *Width and depth limits commute in residual networks* 

---

## E. The Discretization Hypothesis & Finite-Size Corrections
*Evaluates the structural boundaries where noisy, finite neural structures drift from continuous infinite reference horizons.*

* **Hanin & Nica [2019]** — *Finite depth and width corrections to the neural tangent kernel* 
* **Li et al. [2022]** — *The neural covariance sde: Shaped infinite depth-and-width networks at initialization* 
* **Noci et al. [2023]** — *The shaped transformer: Attention models in the infinite depth-and-width limit* 
* **Hanin & Tianze Jiang [2025]** — *Global universality of singular values in products of many large random matrices* 
* **Mandt et al. [2017]** — *Stochastic gradient descent as approximate bayesian inference* 
* **Jastrzebski et al. [2017]** — *Three factors influencing minima in sgd* 
* **Daniel A Roberts et al. [2022]** — *The principles of deep learning theory* 
* **Jacob Zavatone-Veth et al. [2021]** — *Asymptotics of representation learning in finite bayesian neural networks* 
* **Segadlo et al. [2022]** — *Unified field theoretical approach to deep and recurrent neuronal networks* 
* **Bordelon & Pehlevan [2023]** — *Dynamics of finite width kernel and prediction fluctuations in mean field neural networks* 
* **Glasgow et al. [2025]** — *Propagation of chaos in one-hidden-layer neural networks beyond logarithmic time* 