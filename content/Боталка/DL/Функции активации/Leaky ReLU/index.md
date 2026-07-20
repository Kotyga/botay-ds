---
title: Leaky ReLU
---

2026-07-20 в 12:29

Статус: `in progress`
Тег: #Функции_активации  #leaky_relu

---
# Теория

coming soon...

## Реализация на numpy:

```python
import numpy as np

def leaky_relu(x, alpha=0.01):
    """
    Vectorized Leaky ReLU implementation.
    """
    x = np.asarray(x, dtype=float)
    return np.where(x >= 0, x, alpha * x)
```

## Визуализация

![[leaky_relu.png]]

---
# Ссылки:

1. 
2. 
3. 
