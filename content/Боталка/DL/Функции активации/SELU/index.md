---
title: SELU
---

2026-07-20 в 12:29

Статус: `in progress`
Тег: [[content/Боталка/DL/Функции активации/index|index]] #selu

---
# Теория

coming soon...
## Реализация на numpy:

```python
import numpy as np

def selu(x, lam=1.0507009873554804934193349852946, alpha=1.6732632423543772848170429916717):
    """
    Apply SELU activation element-wise.
    Returns a list of floats rounded to 4 decimal places.
    """
    for i in range(len(x)):
        if x[i] > 0:
            x[i] = lam * x[i]
        else:
            x[i] = lam * alpha * (np.exp(x[i]) - 1)
    
    return x
```

---
# Ссылки:

1. 
2. 
3. 
