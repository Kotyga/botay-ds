---
title: Softmax
---

2026-07-20 в 12:29

Статус: `in progress`
Тег: [[content/Боталка/DL/Функции активации/index|index]] #softmax

---
# Теория

coming soon...
## Реализация на numpy:

```python
import numpy as np

def softmax(x):
    """
    Compute the softmax of input x.
    Works for 1D or 2D NumPy arrays.
    For 2D, compute row-wise softmax.
    """
    x = np.asarray(x, dtype=float)
    shifted_x = x - np.max(x, axis=-1, keepdims=True)
    exp_x = np.exp(shifted_x)

    return exp_x / np.sum(exp_x, axis=-1, keepdims=True)
```

---
# Ссылки:

1. 
2. 
3. 
