---
title: GELU
---

2026-07-20 в 12:28

Статус: `in progress`
Тег: [[content/Боталка/DL/Функции активации/index|index]] #gelu

---
# Теория

coming soon...
## Реализация на numpy:

```python
import numpy as np
from scipy import special
import math

def gelu(x):
    """
    Compute the Gaussian Error Linear Unit (exact version using erf).
    x: list or np.ndarray
    Return: np.ndarray of same shape (dtype=float)
    """
    correct = 2 ** -0.5
    x = np.asarray(x, dtype=float)
    return 0.5 * x * (1 + special.erf(x * correct))
```

---
# Ссылки:

1. 
2. 
3. 
