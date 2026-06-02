# 1. Solvable Idealized Settings

> A reliable way to build scientific understanding in complex systems is to study pared-down yet representative settings where quantitative calculations are possible, mirroring physics' use of the harmonic oscillator or the hydrogen atom.

## Linearization in the Data (Deep Linear Networks)
Deep linear networks remove all nonlinear activations but remain highly nonlinear in their parameters, capturing hallmark behaviors of deep learning.

* **Saxe et al. [2014]** - *Exact solutions to the nonlinear dynamics of learning in deep linear neural networks* 
  * **Physics Insight**: Shows that gradient flow dynamics decouple into independent solvable Bernoulli ODEs, leading to sequential learning of singular modes where larger-singular-value modes emerge first.
* **Baldi & Hornik [1989]** - *Neural networks and principal component analysis: Learning from examples without local minima* 
  * **Physics Insight**: Characterizes the saddle-point-dominated loss landscapes of linear networks.

## Linearization in the Parameters (Kernel Methods & NTK)
Truncating nonlinear terms in a network's Taylor expansion around initialization reduces least-squares training to kernel ridge regression.

* **Jacot et al. [2018]** - *Neural tangent kernel: Convergence and generalization in neural networks* 
  * **Physics Insight**: Introduces the **Neural Tangent Kernel (NTK)**, proving that wide neural networks evolve as linear models under gradient descent where the feature map remains frozen.
* **Simon et al. [2023a]** - *The eigenlearning framework: A conservation law perspective on kernel ridge regression and wide neural networks* 
  * **Physics Insight**: Connects architecture to inductive bias through NTK eigenstructure to accurately predict test performance.

## Beyond Linearization (Genuinely Nonlinear Toy Models)
Models that remain genuinely nonlinear in both data and parameters, isolating specific nonlinear mechanisms.

* **Saad & Solla [1995]** - *Exact solution for on-line learning in multilayer neural networks* 
  * **Physics Insight**: Uses methods from statistical physics to compute exact asymptotics for learning dynamics in teacher-student models.