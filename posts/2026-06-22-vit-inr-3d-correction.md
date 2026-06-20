---
title: "ViT-INR based 3D abb. correction"
date: 2026-06-22
categories: "Project"
excerpt: "Implicit Neural Representations for 3D LSFM Distortion Correction via Axial Vision Transformers"
paper:
  conference: "EE.49904 Computational Imaging"
  authors: "Donghyuk Lee (Adviser: Iksung Kang)"
  date: "June 12, 2026"
  links:
    github: "https://github.com/donghyuklee1/3D-LSFM-Distortion-Correction"
---

# Implicit Neural Representations for 3D LSFM Distortion Correction via Axial Vision Transformers

**Donghyuk Lee (Adviser: Iksung Kang)**  
[GitHub Repository](https://github.com/donghyuklee1/3D-LSFM-Distortion-Correction)  
*EE.49904 Computational Imaging (June 12, 2026)*

## 1. Introduction
Light-Sheet Fluorescence Microscopy (LSFM) has become an indispensable tool for rapid, high-resolution volumetric imaging of biological samples. However, LSFM inherently suffers from sample-induced optical aberrations and scattering, which severely degrade the axial resolution and produce elongation artifacts.

My proposed framework introduces a novel, amortized approach for 3D LSFM distortion correction by synergistically combining a Vision Transformer (ViT) encoder with a Multi-Head Implicit Neural Representation (INR):

- **Global Context via ViT Latent Space**: Unlike scene-specific optimization, my ViT encoder processes the distorted stack as an axial sequence, capturing the global context of the z-axis elongation artifact. This enables powerful *transfer learning*; the amortized network can be pre-trained on synthetic data and rapidly fine-tuned on real, sparse experimental data.
- **Multi-Head Disentangled INR**: Guided by the global latent vector, the network separates the prediction of corrected fluorescence density from the estimation of the geometric distortion subspace. Coupled with local coordinate evidence, this effectively resolves the ill-posed inverse problem for high-fidelity restoration.

## 2. Synthetic 3D LSFM Bead Calibration Dataset
To train the restoration models, a reproducible synthetic forward model generates paired datasets of distorted observations and corrected targets, simulating the physical degradations of LSFM based on real-world calibration logic. The primary LSFM distortion is a z-axis elongation. The complete forward model combines Light-sheet Illumination (Gaussian envelope), 3D PSF Blur, and mixed Poisson-Gaussian Noise. The complete forward model is formulated as:

$$x = N \left(\text{PoissonGaus} \left(G * (L \cdot v(f, c^{\text{obs}})) + b\right)\right)$$

## 3. Model Architecture
The network conceptually integrates a global context pathway for understanding macroscopic distortion via a Vision Transformer and a continuous local reconstruction pathway via a Multi-Head Implicit Neural Representation.

### 3.1 Vision Transformer (ViT) Encoder
The distorted stack is formulated as a sequence of axial slices along the z-axis:

$$x \in \mathbb{R}^{1 \times Z \times Y \times X} \implies S = [S_1, S_2, \dots, S_Z]$$

The input sequence is processed through consecutive Multi-Head Self-Attention (MHSA) blocks:

$$\text{Attention}(Q, K, V) = \text{softmax} \left(\frac{QK^\top}{\sqrt{d_k}}\right) V$$

I inherently mitigate the quadratic bottleneck by restricting the self-attention sequence exclusively to the macroscopic axial sequence (Z), effectively capturing the continuous volumetric elongation prior without exhausting memory.

### 3.2 Multi-Head Implicit Neural Representation
The latent vector $z$ is explicitly disentangled into two orthogonal subspaces: auxiliary ($z_{aux}$) and density ($z_\rho$). To resolve spatial ambiguity, local coordinate evidence is extracted:

$$\phi(p) = [\text{Fourier}(p) \parallel f_{\text{local}}(p)]$$

The coordinate features are processed by a multi-layer perceptron conditioned via Feature-wise Linear Modulation (FiLM):

$$h^{(\ell+1)} = \text{GELU}\left(\left(1 + \gamma_\ell(z_\rho)\right) \odot \left(W_\ell h^{(\ell)}\right) + \beta_\ell(z_\rho)\right)$$

The density head predicts the final bounded intensity field mapped into a valid range:

$$\hat{y}(p) = 1 - \exp\left(-\text{softplus}(\text{MLR}_\rho(\phi(p), z_\rho))\right) \in [0, 1]$$

## 4. Optimization and Loss
To optimize the amortized framework under extreme spatial sparsity, I employ a multi-task joint optimization objective:

- **Foreground-Weighted Mean Squared Error ($L_{wmse}$)**: Dynamically counterbalances the structural sparsity by heavily penalizing errors inside the sparse bead cores while suppressing background noise gradients.
$$L_{\text{wmse}} = \frac{\sum_p (\hat{y}(p) - y(p))^2 \cdot w(y(p))}{\sum_p w(y(p))}$$

- **Maximum Intensity Projection (MIP) Consistency Loss ($L_{proj}$)**: Enforces macro-structural alignment across orthogonal imaging planes (xy, yz, xz) using SmoothL1 loss to bridge the structural gap.
$$L_{\text{proj}} = \frac{1}{3} \sum_{dim \in \{-3, -2, -1\}} \text{SmoothL1}\left(\max_{dim} \hat{y}, \max_{dim} y\right)$$

- **Physics-Informed Forward Consistency Loss ($L_{phys}$)**: Acts as a self-supervised regularizer ensuring that re-distorting the predicted continuous density fields under the estimated axial distortion factor precisely reconstructs the raw degraded observation.
$$L_{\text{phys}} = \|s \cdot D(\hat{y}, f) - x\|_{1, w}$$

## 5. Results and Discussion
I conducted a comprehensive evaluation against three baseline methodologies using 4,092 fully degraded LSFM volumetric stacks. 

My proposed framework demonstrates unprecedented geometric reconstruction, securing the lowest axial ratio error (0.0449 ± 0.0246) while maintaining competitive global restoration scores. This confirms that the explicitly disentangled Multi-Head INR decoder, guided heavily by the physics-informed forward operator ($L_{phys}$), successfully reconstructs the true continuous spherical boundaries of the calibration samples. Rather than blindly interpolating discrete voxel intensities, the coordinate-based implicit fields map spatial coordinates to structural densities, inherently acting as a powerful geometrical prior against the ill-posed nature of extreme axial smearing.

The 16/64 z-stack mosaic explicitly verifies that my coordinate-based model successfully decouples structural localization from geometric warping, preserving both localized brightness amplitudes and sharp isotropic boundaries across the entire field of view—an outcome severely blurred by the spatial discretization constraints of standard CNNs.

## 6. Limitations and Future Work
While the proposed amortized ViT-INR framework demonstrates compelling advancements in continuous 3D morphology restoration, several limitations present critical avenues for future investigation:
1. Standard quadratic computational complexity ($O(Z^2)$) of the Axial ViT limits scalability for massive experimental datasets. Future work will explore Hierarchical MHSA or sub-quadratic state-space models like Vision Mamba (Vim).
2. The current physical forward model primarily simulates static refractive index (RI) mismatches. Transitioning the framework from synthetic training sets to experimental biological target domains will necessitate expanding the auxiliary geometric branch to implicitly learn and invert complex, localized wavefront deformations.
