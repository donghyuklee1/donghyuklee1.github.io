---
title: "[논문리뷰] PLADIS: Pushing the Limits of Attention in Diffusion Models at Inference Time by Leveraging Sparsity"
last_modified_at: 2026-02-07
categories: 논문리뷰
tags:
  - Diffusion
  - Image Generation
  - Computer Vision
  - ICCV
excerpt: PLADIS 논문 리뷰 (ICCV 2025)
use_ma: true
paper:
  conference: ICCV 2025
  links:
    paper: "https://arxiv.org/abs/xxxx"
    page: "https://example.com"
    github: "https://github.com"
  authors: Kwanyoung Kim, Byeongsu Sim
  affiliation: Samsung Research
  date: 10 Mar 2025
---

## Introduction

- **CFG (Classifier-Free Guidance)**: conditional 모델과 unconditional 모델의 score function 차이를 계산하고 가중치를 적용하여 샘플이 특정 클래스에 속할 가능성을 높이는 대표적인 샘플링 기법이다. CFG는 효과적이지만 추가적인 학습과 inference가 필요하며, 가중치가 너무 높을 경우 샘플 품질이 저하될 수 있다.

- **연구 동향**: CFG에서 영감을 받아 다양한 guidance 샘플링 방법이 연구되어 왔다. 그러나 최근 방법들은 추가적인 neural function evaluation (NFE)을 필요로 하며, 두 모델 간의 차이를 계산해야 하므로 guidance-distilled model에는 적용할 수 없다.

- **연구 질문**: 추가적인 학습이나 NFE가 필요 없고, 다른 guidance 샘플링 방법과 결합할 수 있으며, guidance-distilled model에도 적용할 수 있는 범용 부스팅 방법을 개발할 수 있을까?

- **본 논문의 접근**: 완전히 새로운 접근 방식을 통해 attention 기반 방법을 채택하여 이 어려운 문제를 해결하고자 하였다.

- **주요 기여**: α-Entmax를 통한 sparse attention의 중요성을 발견한 것이다. α-Entmax는 α → 1일 때 softmax이고 α = 2일 때 sparsemax이며, 모든 α > 1에 대해 sparsity를 가진다.
